import TitleField from './TitleField';
import MultiSchemaField from './MultiSchemaField';
import UnsupportedField from './UnsupportedField';

export const Fields = {
  TitleField,
  AnyOfField: MultiSchemaField,
  OneOfField: MultiSchemaField,
  UnsupportedField,
};
