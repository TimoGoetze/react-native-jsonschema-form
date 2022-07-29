import { WidgetProps } from '@rjsf/core';
declare const CheckboxWidget: ({ value, disabled, readonly, label, onChange, schema, }: WidgetProps) => JSX.Element;
declare type CheckBoxProps = {
    disabled?: boolean;
    onChange: (selected: boolean) => void;
    selected: boolean;
    label: string;
};
export declare const CheckBoxComponent: ({ disabled, onChange, selected, label }: CheckBoxProps) => JSX.Element;
export default CheckboxWidget;
