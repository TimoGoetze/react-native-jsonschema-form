/// <reference types="react" />
interface FormContextProps {
    theme: {
        primaryColor: string;
        highlightColor: string;
        borderColor: string;
        textColor: string;
        placeholderTextColor: string;
        errorColor: string;
        [propName: string]: any;
    };
    requiredTitle: string;
    arrayAddTitle: string;
    radioLabelMapping?: (label: string) => string;
    [propName: string]: any;
}
export declare const defaultProps: FormContextProps;
export declare const FormContext: import("react").Context<FormContextProps>;
export declare const useFormContext: () => FormContextProps;
export {};
