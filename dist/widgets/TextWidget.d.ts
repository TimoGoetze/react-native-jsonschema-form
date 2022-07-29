import { TextInputIOSProps } from 'react-native';
import { WidgetProps } from '@rjsf/core';
declare type TextWidgetProps = WidgetProps & {
    multiline?: boolean;
    secureEntry?: boolean;
    textContentType?: TextInputIOSProps['textContentType'];
};
declare const TextWidget: ({ id, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, multiline, secureEntry, schema, textContentType, rawErrors, }: TextWidgetProps) => JSX.Element;
export default TextWidget;
