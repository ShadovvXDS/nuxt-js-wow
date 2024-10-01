export interface Step {
    label: string;
    value: string;
}

export interface StepperProps {
    activeStep: Step;
    stepOptions: Step[];
}