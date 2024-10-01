<template>
    <div className="flex items-center gap-2 break-words">
        <BubbleMenu v-if="editor" :editor="editor" :tippyOptions="{ duration: 100 }" class="bg-white rounded-lg">
            <div class="rounded-lg ring-black ring-1">
                <Toolbar :editor="editor" />
            </div>
        </BubbleMenu>
        <EditorContent :editor="editor"
            class="flex-1 bg-white max-h-[100px] max-[567px]:h-[90px] overflow-y-auto py-[1px]" />
        <div class="ring-1 ring-[#EBF0F3] rounded-lg max-[1240px]:hidden self-end">
            <Toolbar :editor="editor" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    BubbleMenu,
    EditorContent,
    Mark,
    mergeAttributes,
    useEditor,
} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from './Toolbar.vue';

const { prompt } = defineProps<{ prompt: string }>();
const emit = defineEmits(['update:prompts']);

const ImportanceMark = Mark.create({
    name: "importance",
    draggable: false,

    toDOM: (props: any) => {
        return ["span", { class: "highlighted-text", id: props.attrs.id }, 0];
    },
    renderHTML(this, { HTMLAttributes }) {
        const elem = document.createElement("span");
        Object.entries(
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
        ).forEach(([attr, val]) => elem.setAttribute(attr, val));

        elem.classList.add("highlighted-text");
        elem.setAttribute("contenteditable", "false");

        elem.addEventListener("click", (e) => {
            const parentRect = (e.target as HTMLElement).getBoundingClientRect();

            const clickedSpanId = (e?.target as HTMLSpanElement)?.id;
            const targetTextToRemove = (e?.target as HTMLSpanElement)?.innerText;

            const editor = this.editor;
            const nodes = editor?.getJSON().content?.[0].content ?? [];

            let startFrom = 0;
            let targetTextLen = 0;
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                if (node.marks?.[0].attrs?.id === clickedSpanId) {
                    targetTextLen = node?.text?.length ?? 0;
                    break;
                }
                startFrom += node?.text?.length ?? 0;
            }

            const indexFrom = startFrom;
            const indexTo = startFrom + targetTextLen + 1;

            // Calculate the relative coordinates of the click event within the parent element
            const relativeX = e.clientX - parentRect!.left;
            const relativeY = e.clientY - parentRect!.top;

            // Define the coordinates or the range where the :after pseudo-element is located
            const pseudoElementRange = {
                startX: parentRect!.width - 20, // adjust based on your design
                startY: parentRect!.height - 20, // adjust based on your design
                endX: parentRect!.width,
                endY: parentRect!.height,
            };

            // Check if the click event occurred within the pseudo-element range
            if (
                relativeX >= pseudoElementRange.startX &&
                relativeX <= pseudoElementRange.endX &&
                relativeY >= pseudoElementRange.startY &&
                relativeY <= pseudoElementRange.endY
            ) {
                editor?.commands.deleteRange({
                    from: indexFrom + 1,
                    to: indexTo,
                });
                editor?.commands.insertContentAt(
                    indexFrom + 1,
                    targetTextToRemove
                );
            }
        });
        return elem;
    },
    addGlobalAttributes() {
        return [
            {
                types: ["importance"],
                attributes: {
                    id: {
                        default: null,
                        renderHTML: (attributes) => {
                            return {
                                id: attributes.id || Math.random().toString(36).substring(7),
                            };
                        },
                    },
                    level: {
                        default: "0",
                        renderHTML: (attributes) => {
                            return {
                                class: `level-${attributes.level}`,
                            };
                        },
                        parseHTML: (element) => element.style.textAlign || "left",
                    },
                },
            },
        ];
    },

    parseHTML() {
        return [{ tag: "span.highlighted-text" }];
    },
});

const editor = useEditor({
    extensions: [
        StarterKit,
        ImportanceMark,
        Placeholder.configure({
            placeholder: "Describe the content you want to generate.",
        }),
    ],
    content: `<p>${prompt ?? ""}</p>`,
    onUpdate({ editor }) {
        const contents = editor
            .getJSON()
            .content?.[0]?.content?.filter((content) => content.text?.length)
            .map((content) => {
                if (content.marks?.[0].type === "importance") {
                    return {
                        text: content.text?.trim(),
                        importance: content.marks[0].attrs?.level as number,
                        id: content.marks[0].attrs?.id as string,
                    };
                }
                return {
                    text: content.text?.trim(),
                    importance: 0,
                };
            });
        if (contents?.length) {
            emit('update:prompts', contents.filter((c) => c.text?.length))
        }

        // Add empty space end of the line
        var hasChange = false;
        const content = editor.getJSON().content;
        if (!content?.[0].content?.length) {
            emit('update:prompts', [])
            return;
        }
        for (let index = 1; index < content[0].content.length; index++) {
            const element = content[0].content[index];
            if (element.marks?.[0].type !== "importance") {
                continue;
            }

            if (!content[0].content[index - 1].text?.endsWith(" ")) {
                content[0].content[index - 1].text =
                    content[0].content[index - 1].text + " ";
                hasChange = true;
            }

            if (index === content[0].content.length - 1) {
                content[0].content.push({
                    type: "text",
                    text: " ",
                });
                hasChange = true;
            } else if (!content[0].content[index + 1].text?.startsWith(" ")) {
                content[0].content[index + 1].text =
                    " " + content[0].content[index + 1].text;
                hasChange = true;
            }
        }

        if (hasChange) {
            editor.commands.setContent(content);
        }
    },
});
</script>

<style>
[contenteditable] {
    outline: 0px solid transparent;
}

.tiptap p {
    line-height: 32px;
}

.tiptap p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    height: 0;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.30);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
}


span.highlighted-text {
    border-radius: 8px;
    border: 1px solid #EBF0F3;
    background: #FFF;
    padding: 4px;
    margin: 4px;
}

span.highlighted-text:after {
    padding-left: 4px;
    content: "\00d7";
    /* This will render the 'X' */
    width: 16px;
    opacity: 0.5;
    cursor: pointer;
}

span.highlighted-text.level-1:before {
    padding-right: 4px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%2300C16A'%3E%3Cpath fill='%2300C16A' d='m10.024 5.88-5.25 5.626a.376.376 0 0 1-.641-.328L4.82 7.74 2.118 6.726a.375.375 0 0 1-.14-.61L7.228.493a.375.375 0 0 1 .641.328L7.18 4.26l2.702 1.014a.375.375 0 0 1 .14.607h.002Z'/%3E%3C/svg%3E");
}

span.highlighted-text.level-2:before {
    padding-right: 4px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='12' fill='%2300C16A'%3E%3Cpath fill='%2300C16A' d='m10.024 5.88-5.25 5.626a.376.376 0 0 1-.641-.328L4.82 7.74 2.118 6.726a.375.375 0 0 1-.14-.61L7.228.493a.375.375 0 0 1 .641.328L7.18 4.26l2.702 1.014a.375.375 0 0 1 .14.607h.002ZM22.024 5.88l-5.25 5.626a.376.376 0 0 1-.642-.328l.688-3.438-2.702-1.014a.375.375 0 0 1-.14-.61l5.25-5.624a.375.375 0 0 1 .641.328l-.689 3.44 2.702 1.014a.375.375 0 0 1 .14.607h.002Z'/%3E%3C/svg%3E");
}

span.highlighted-text.level-3:before {
    padding-right: 4px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='12' fill='%2300C16A'%3E%3Cpath fill='%2300C16A' d='m10.024 5.88-5.25 5.626a.375.375 0 0 1-.641-.328L4.82 7.74 2.118 6.726a.375.375 0 0 1-.14-.61L7.228.493a.375.375 0 0 1 .641.328L7.18 4.26l2.702 1.014a.374.374 0 0 1 .14.607h.002ZM22.024 5.88l-5.25 5.626a.375.375 0 0 1-.642-.328l.688-3.438-2.702-1.014a.375.375 0 0 1-.14-.61l5.25-5.624a.375.375 0 0 1 .641.328l-.689 3.44 2.702 1.014a.375.375 0 0 1 .14.607h.002ZM34.024 5.88l-5.25 5.626a.375.375 0 0 1-.642-.328l.688-3.438-2.702-1.014a.375.375 0 0 1-.14-.61l5.25-5.624a.375.375 0 0 1 .641.328l-.689 3.44 2.702 1.014a.375.375 0 0 1 .14.607h.002Z'/%3E%3C/svg%3E");
}
</style>