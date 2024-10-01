"use client";
import { fabric } from "fabric";

export interface ICanvasContext {
    fabricCanvas: ComputedRef<fabric.Canvas>;
    htmlCanvas: ComputedRef<HTMLCanvasElement>;
    setRef: (
        ref: HTMLCanvasElement | null,
        init?: (canvas: fabric.Canvas) => void
    ) => void;
    setMenuState: (value: string) => void;
    menuState: ComputedRef<string>;
    setBrushWidth: (value: number) => void;
    brushWidth: ComputedRef<number>;
    eraserWidth: ComputedRef<number>;
    setEraserWidth: (value: number) => void;
    addSvg: (svg: string) => void;
    addImage: (url: File, position?: { left: number; top: number }) => void;
    addImageUrl: (url: string) => void;
    undo: () => void;
    redo: () => void;
    clear: () => void;
    download: (fileName: string) => void;
    addGridBackground: () => Promise<void>;
    removeGridBackground: () => Promise<void>;
    gridBackgroundActive: ComputedRef<boolean>;
    fullScreen: ComputedRef<boolean>;
    activeSelection: ComputedRef<fabric.Object[]>;
    setActiveSelection: (value: fabric.Object[]) => void;
    setFullScreen: (value: boolean) => void;
    getImage: () => Promise<string>;
}

// export const CanvasContext = createContext<ICanvasContext>({
//     fabricCanvas: { current: null },
//     htmlCanvas: { current: null },
//     setRef: (ref: HTMLCanvasElement | null) => null,
//     setMenuState: () => null,
//     menuState: "Select",
//     setBrushWidth: () => null,
//     brushWidth: 4,
//     setEraserWidth: () => null,
//     eraserWidth: 4,
//     setBrushColor: () => null,
//     brushColor: "#000000",
//     addSvg: (svg: string) => null,
//     addImage: (url: File, position?: { left: number; top: number }) => null,
//     addImageUrl: (url: string) => null,
//     undo: () => null,
//     redo: () => null,
//     clear: () => null,
//     download: (fileName: string) => null,
//     addGridBackground: () => null,
//     removeGridBackground: () => null,
//     gridBackgroundActive: false,
//     fullScreen: false,
//     activeSelection: [],
//     setActiveSelection: () => null,
//     setFullScreen: () => null,
//     getImage: () => null,
// });
