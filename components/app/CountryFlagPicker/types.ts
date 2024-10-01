export type CountryFlagPickerProps = {
    modelValue: string | null;
};

export type CountryFlagPickerEmits = (
    event: 'update:modelValue',
    parameter: CountryFlagPickerProps['modelValue'],
) => void;