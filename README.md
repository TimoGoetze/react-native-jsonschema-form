# Experimental Fork
Please do not expect this fork to work as long as you can read this comment. It is work in progress and currently not supported except commercially. 
Thanks for your understanding.


# [react-json-schema-form](https://github.com/rjsf-team/react-jsonschema-form) themed for react-native

## Getting Started

```bash
yarn add @rjsf/core rjsf-native

# This package also depends on `@react-native-community/slider` and `@react-native-community/datetimepicker`
yarn add @react-native-community/slider
yarn add @react-native-community/datetimepicker
```

## Usage
```typescript
import ReactNativeForm from 'rjsf-native';

const App = () => {
  const form = useRef(null);
  return (
    <ReactNativeForm
      ref={form}
      onError={e => {
        console.log(e);
        Alert.alert('Please check your form');
      }}
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={form => console.log(form.formData)}>
      <Button
        title="Submit"
        onPress={() => {
          form.current?.submit();
        }}
      />
    </ReactNativeForm>
  );
};
```

We also provide a Context as a form of overriding defaults and theming

```typescript
import ReactNativeForm, {defaultProps, FormContext} from 'rjsf-native';

const App = () => {
  const form = useRef(null)
  return (
    <FormContext value={{...defaultProps, requiredTitle: '*'}}>
        <ReactNativeForm .../>
    </FormContext>
  )
}
```

### Form Context Props
```typescript
{
  theme: {
    primaryColor: string; // Your main theme color. Used for e.g. buttons
    highlightColor: string; // Used for focused inputs, checked checkboxes, slider...
    borderColor: string; // Color of textinput borders
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
```

## Development
1. Run ```yarn start``` in root folder to run the dev server
2. ```cd example && yarn run android``` to start the example app

![](./docs/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-01-03%20at%2011.45.00.png) | ![](./docs/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-01-03%20at%2011.45.04.png)
:-------------------------:|:-------------------------:


### Tasks

- [x]  <del>hidden widget</del>
- [x]  <del>unsupported field</del>
- [x]  <del>checkbox widget: Label does not honor theme.textColor</del>
- [x]  <del>support hidden schema title / description</del>
- [x]  <del>Datepicker</del> (*done until more specific functionality is required*)
- [ ]  TimePicker 
- [ ]  DateTimePicker widget
- [ ]  SelectWidget
- [ ]  FileUploadWidget
- [ ]  NumberInput widget
- [ ]  [NullField](https://github.com/rjsf-team/react-jsonschema-form/blob/master/packages/core/src/components/fields/NullField.js) to null fields from formData (Necessity questionable?)
- [ ]  widget themes (for example for [react-native-paper](https://callstack.github.io/react-native-paper/))
- [ ]  fix error: After clicking submit with empty required fields and filling in a required field and clicking submit again, error message / inputs update but scrollview scroll to top not executed

