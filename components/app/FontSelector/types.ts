export type FontSelectorProps = {
    modelValue: string;
};

export type FontSelectorEmits = (
    event: 'update:modelValue',
    parameter: FontSelectorProps['modelValue'],
) => void;