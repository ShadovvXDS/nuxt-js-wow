import { fabric } from "fabric";
import CanvasUtils from "./canvas-utils";
import type { ICanvasContext } from "./types";
import { useUndoRedo } from "./useUndoRedo";

const DEV_MODE = process.env.NODE_ENV === "development";

export function useCanvasProvider(): ICanvasContext {
    const elementRef = ref<HTMLCanvasElement | null>(null);
    const fc = ref<fabric.Canvas | null>(null);
    const data = ref<any>(null);
    const gridBackgroundActive = ref(false);
    const setGridBackgroundActive = (value: boolean) => gridBackgroundActive.value = value;
    const activeSelection = ref<fabric.Object[]>([]);
    const setActiveSelection = (value: fabric.Object[]) => activeSelection.value = value;
    const menuState = ref('Select');
    const setMenuState = (value: string) => menuState.value = value;
    const brushWidth = ref(4);
    const setBrushWidth = (value: number) => brushWidth.value = value;
    const eraserWidth = ref(4);
    const setEraserWidth = (value: number) => eraserWidth.value = value;
    const fullScreen = ref(false);
    const setFullScreen = (value: boolean) => fullScreen.value = value;
    const lineToDraw = ref<fabric.Line>();
    const setLineToDraw = (value: fabric.Line) => lineToDraw.value = value;
    const isDrawingLine = ref(false);
    const setIsDrawingLine = (value: boolean) => isDrawingLine.value = value;
    const { undo, redo, push } = useUndoRedo<string>();
    var canvasUtils: CanvasUtils;

    const downloadHandler = (fileName: string) => {
        if (!fc.value) return;
        // Convert base64 string to Blob
        const fileString = fc.value.toDataURL({
            format: 'png',
        })
        const byteCharacters = atob(fileString.substring('data:image/png;base64,'.length));
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        // Create a downloadable link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download.png';
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    const addGridBackground = () => {
        return new Promise<void>((resolve, reject) => {
            setGridBackgroundActive(true);
            fc.value!.setBackgroundImage("/assets/canvas-grid.svg", () => {
                fc.value!.renderAll();
                resolve();
                return;
            })
        })
    }

    const removeGridBackground = () => {
        return new Promise<void>((resolve, reject) => {
            setGridBackgroundActive(false);
            fc.value!.setBackgroundImage(null as any, () => {
                fc.value!.renderAll();
                resolve();
                return;
            })
        })
    }

    const undoHandler = () => {
        try {
            let desired = undo();
            if (desired) {
                fc.value!.loadFromJSON(JSON.parse(desired), fc.value!.renderAll.bind(fc.value))
            } else {
                fc.value!.clear();
            }
        } catch (_) {
            console.error("undo failed")
        }
    };

    const redoHandler = () => {
        try {
            let desired = redo();
            if (desired) {
                fc.value!.loadFromJSON(JSON.parse(desired), fc.value!.renderAll.bind(fc.value))
            }
        } catch (_) {
            console.error("redo failed")
        }
    };

    const clearHandler = () => {
        fc.value!.clear();
        let currentState = fc.value!.toJSON();
        push(JSON.stringify(currentState));
    };


    const setRef =
        (ref: HTMLCanvasElement | null, init?: (canvas: fabric.Canvas) => void) => {
            //@ts-ignore
            elementRef.current = ref;
            // save state
            if (DEV_MODE && fc.value!) {
                data.value = fc.value!.toJSON();
            }
            // dispose canvas
            fc.value?.dispose();
            // set/clear ref
            if (!ref) {
                fc.value = null;
                return;
            }
            const canvas = new fabric.Canvas(ref, { backgroundColor: "transparent", preserveObjectStacking: true, });
            fc.value! = canvas;

            // invoke callback
            init && init(canvas);
            canvasUtils = new CanvasUtils(canvas, setMenuState);

            function onChange(options: fabric.IEvent) {
                let currentState = canvas.toJSON();
                push(JSON.stringify(currentState));
            }
            canvas.on('path:created', onChange)
            canvas.on('object:modified', onChange)

            // restore state
            if (DEV_MODE && data.value) {
                canvas.loadFromJSON(data.value, canvas.renderAll.bind(canvas));
            }
        };
    watch(() => [menuState.value, brushWidth.value, eraserWidth.value], () => {

        if (!fc.value!) return;

        if (menuState.value === 'Brush') {
            fc.value!.freeDrawingBrush = new fabric.PencilBrush(fc.value!);
            fc.value!.isDrawingMode = true;
            fc.value!.freeDrawingBrush.width = brushWidth.value;
            fc.value!.freeDrawingBrush.color = '#000000';
            fc.value!.on("path:created", function (e) {
                fc.value!.renderAll();
            });
        } else if (menuState.value === 'Eraser') {
            fc.value!.freeDrawingBrush = new fabric.EraserBrush(fc.value!);
            fc.value!.isDrawingMode = true;
            fc.value!.freeDrawingBrush.width = eraserWidth.value;
            fc.value!.freeDrawingBrush.color = '#000000';
        } else if (menuState.value === 'Line') {
            fc.value!.isDrawingMode = false;
            fc.value!.defaultCursor = 'crosshair'
            fc.value!.selection = false
        } else {
            fc.value!.isDrawingMode = false;
            fc.value!.defaultCursor = undefined;
            fc.value!.selection = true
        }
    }, {
        deep: true,
    });

    watch(() => [menuState.value, lineToDraw.value, isDrawingLine.value], () => {

        let canvas = fc.value;
        if (!canvas) return;

        canvas.off('mouse:down');
        canvas.off('mouse:move');
        canvas.off('mouse:up');
        if (menuState.value !== 'Line') return
        canvas.on('mouse:down', (o) => {
            if (menuState.value !== 'Line' || isDrawingLine.value) return

            let pointer = canvas.getPointer(o.e)
            let pointerPoints = [pointer.x, pointer.y, pointer.x, pointer.y]

            let lineToDraw = new fabric.Line(pointerPoints, {
                strokeWidth: 2,
                stroke: '#000000'
            });
            lineToDraw.selectable = false
            lineToDraw.evented = false
            lineToDraw.strokeUniform = true
            lineToDraw.hasControls = true
            canvas.isDrawingMode = true
            canvas.discardActiveObject().requestRenderAll()
            canvas.add(lineToDraw)
            setLineToDraw(lineToDraw);
            setIsDrawingLine(true)
        });

        canvas.on('mouse:move', (o) => {
            if (!isDrawingLine.value) return
            canvas.isDrawingMode = true
            let pointer = canvas.getPointer(o.e)

            lineToDraw.value?.set({
                x2: pointer.x,
                y2: pointer.y
            })

            canvas.renderAll()
        });

        canvas.on('mouse:up', () => {
            if (!isDrawingLine.value) return

            lineToDraw.value!.setCoords()
            lineToDraw.value!.selectable = true
            lineToDraw.value!.evented = true
            canvas.isDrawingMode = false
            canvas.fire('object:modified')
            setIsDrawingLine(false)
        });
    }, {
        deep: true,
    });

    const addSvg = (svg: string) => {
        try {
            fabric.loadSVGFromString(
                svg,
                (objects, options) => {
                    var obj = fabric.util.groupSVGElements(objects, options)
                    obj.strokeUniform = true
                    obj.strokeLineJoin = 'miter'
                    obj.scaleToWidth(100)
                    obj.scaleToHeight(100)

                    fc.value!.add(obj).viewportCenterObject(obj).renderAll()
                    fc.value!.fire('object:modified')
                }
            )
        } catch (_) {
            console.error("can't add shape");
        }
    };

    const addImageUrl = (url: string) => {
        try {
            fabric.loadSVGFromURL(
                url,
                (objects, options) => {
                    var obj = fabric.util.groupSVGElements(objects, options)
                    obj.strokeUniform = true
                    obj.strokeLineJoin = 'miter'
                    obj.scaleToWidth(100)
                    obj.scaleToHeight(100)

                    fc.value!.add(obj).viewportCenterObject(obj).renderAll()
                    fc.value!.fire('object:modified')
                }
            )
        } catch (_) {
            console.error("can't add shape");
        }
    };

    const scaleFactor = 0.66;
    const addImage = (file: File, position?: { left: number; top: number }) => {
        try {
            var reader = new FileReader();
            reader.onload = function (event) {
                var imgObj = new Image();
                imgObj.src = (event.target as any).result as string;
                imgObj.onload = function () {
                    var image = new fabric.Image(imgObj);
                    var imageWidth = image.width ?? 0;
                    var imageHeight = image.height ?? 0;
                    // Scale
                    const maxSize = fc.value!.getWidth() * scaleFactor;
                    if (imageHeight > maxSize || imageWidth > maxSize) {
                        if (imageHeight > imageWidth) {
                            image.scaleToHeight(maxSize);
                        } else {
                            image.scaleToWidth(maxSize);
                        }
                    }
                    if (position) {
                        const zoom = fc.value!.getZoom();
                        image.set({
                            left: position.left / zoom - imageWidth / 2,
                            top: position.top / zoom - imageHeight / 2,
                        })
                        fc.value!.add(image)
                    } else {
                        fc.value!.add(image).viewportCenterObject(image);
                    }
                    fc.value!.renderAll();
                    fc.value!.fire('object:modified')
                }
            }
            reader.readAsDataURL(file);
            // ADDING THIS FOR BEING ABLE TO UPLOAD THE SAME IMAGE AGAIN EVEN AFTER IT IS REMOVED AND WANTED TO GET ADDED AGAIN
            (document.querySelector("[name='upload-image-canvas-form']") as HTMLFormElement).reset()
        } catch (e) {
            console.error(e);
            console.error("can't add shape");
        }
    };

    const handleSetMenuState = (selectedState: string) => {
        // discarding the active object so that the newly added object won't be beneath the active object
        // and the user will think that the new object has not been added because that is not instantly visible
        fc?.value?.discardActiveObject()?.requestRenderAll();
        setMenuState(selectedState)
    }

    const getImage = async () => {
        const canvasWidth = fc.value!.getWidth();
        let wasGridBackgroundActive = gridBackgroundActive;
        if (wasGridBackgroundActive) {
            await removeGridBackground();
        }
        const input = fc.value!.toDataURL({
            format: 'png',
            multiplier: 1024 / canvasWidth,
            left: 0,
            top: 0,
            width: canvasWidth,
            height: canvasWidth,
        });

        if (wasGridBackgroundActive) {
            await addGridBackground();
        }

        return input;
    };

    return {
        fabricCanvas: computed(() => fc.value!),
        htmlCanvas: computed(() => elementRef.value!),
        setRef,
        menuState: computed(() => menuState.value),
        setMenuState: handleSetMenuState,
        brushWidth: computed(() => brushWidth.value),
        setBrushWidth,
        eraserWidth: computed(() => eraserWidth.value),
        setEraserWidth,
        addSvg,
        addImage,
        addImageUrl,
        undo: undoHandler,
        redo: redoHandler,
        clear: clearHandler,
        download: downloadHandler,
        addGridBackground,
        removeGridBackground,
        gridBackgroundActive: computed(() => gridBackgroundActive.value),
        fullScreen: computed(() => fullScreen.value),
        setFullScreen,
        activeSelection: computed(() => activeSelection.value),
        setActiveSelection,
        getImage,
    }
}
