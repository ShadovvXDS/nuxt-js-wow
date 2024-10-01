export type PromptInputProps = {
    negativePrompt: string;
    prompt: string;
};

export interface PromptInputEmits {
    (event: 'click', parameter: MouseEvent): void;
    (event: 'update:prompts', parameter: { text: string; importance: number }[]): void;
    (event: 'update:negativePrompt', parameter: string): void;
}