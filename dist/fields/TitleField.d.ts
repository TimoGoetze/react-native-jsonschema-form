declare const TitleField: ({ title, required, error, }: {
    title?: string | undefined;
    required?: boolean | undefined;
    error?: boolean | undefined;
}) => JSX.Element;
export default TitleField;
