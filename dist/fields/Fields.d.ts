/// <reference types="@rjsf/core" />
export declare const Fields: {
    TitleField: ({ title, required, error, }: {
        title?: string | undefined;
        required?: boolean | undefined;
        error?: boolean | undefined;
    }) => JSX.Element;
    AnyOfField: ({ formData, options, registry, onChange, baseType, disabled, errorSchema, idPrefix, idSchema, onBlur, onFocus, uiSchema, schema, }: import("@rjsf/core").FieldProps<any>) => JSX.Element;
    OneOfField: ({ formData, options, registry, onChange, baseType, disabled, errorSchema, idPrefix, idSchema, onBlur, onFocus, uiSchema, schema, }: import("@rjsf/core").FieldProps<any>) => JSX.Element;
    UnsupportedField: ({ reason, idSchema, schema }: import("@rjsf/core").FieldProps<any>) => JSX.Element;
};
