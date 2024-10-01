export type TabOrientation = "horizontal" | "vertical";

export type NSTabProps = {
    modelValue: string;
    orientation?: TabOrientation;
    disabled?: boolean;
    options: string[] | { id: string, label: string }[];
};

export type NSTabEmits = (
    event: 'update:modelValue',
    parameter: NSTabProps['modelValue'],
) => void;