export type ColorPickerProps = {
    modelValue: string;
    allowEmpty?: boolean;
};

export type ColorPickerEmits = (
    event: 'update:modelValue',
    parameter: ColorPickerProps['modelValue'],
) => void;