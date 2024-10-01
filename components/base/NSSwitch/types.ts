export type SwitchSize = "sm" | "lg";

export type NSSwitchProps = {
    modelValue: boolean;
    size?: SwitchSize;
    label?: string;
    disabled?: boolean;
};

export type NSSwitchEmits = (
    event: 'update:modelValue',
    parameter: NSSwitchProps['modelValue'],
) => void;