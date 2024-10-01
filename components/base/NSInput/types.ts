export type InputProps = {
    modelValue: string;
};

export type InputEmits = (
    event: 'update:modelValue',
    parameter: InputProps['modelValue'],
) => void;