export interface Option {
    label: string;
    value: string;
}

export interface AnimatedTabsProps {
    modelValue: Option;
    options: Option[];
    subContainerClassName?: string;
}

export type AnimatedTabsEmits = (
    event: 'update:modelValue',
    parameter: AnimatedTabsProps['modelValue'],
) => void;