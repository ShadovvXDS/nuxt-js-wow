export type NSSliderProps = {
    modelValue: number;
    min?: number;
    max?: number;
    renderInput?: boolean;
};

export type NSSliderEmits = (
    event: 'update:modelValue',
    parameter: NSSliderProps['modelValue'],
) => void;