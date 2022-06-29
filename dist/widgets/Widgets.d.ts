/// <reference types="react" />
/// <reference types="@rjsf/core" />
export declare const Widgets: {
    TextWidget: ({ id, readonly, disabled, label, value, onChange, onBlur, onFocus, autofocus, options, multiline, secureEntry, schema, textContentType, rawErrors, }: import("@rjsf/core").WidgetProps & {
        multiline?: boolean | undefined;
        secureEntry?: boolean | undefined;
        textContentType?: "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode" | undefined;
    }) => JSX.Element;
    EmailWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
    URLWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
    TextareaWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
    CheckboxWidget: ({ value, disabled, readonly, label, onChange, schema, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    CheckboxesWidget: ({ disabled, options, value, readonly, onChange, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    PasswordWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
    RadioWidget: ({ options, value, disabled, readonly, onChange, rawErrors, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    SelectWidget: ({ options, value, disabled, readonly, onChange, rawErrors, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    RangeWidget: ({ value, readonly, disabled, schema, onChange, }: import("@rjsf/core").WidgetProps) => JSX.Element;
    HiddenWidget: () => JSX.Element;
    DateWidget: (props: import("@rjsf/core").WidgetProps) => JSX.Element;
};
