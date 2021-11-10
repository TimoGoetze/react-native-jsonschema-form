import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FieldProps } from '@rjsf/core';
import { JSONSchema7 } from 'json-schema';
import { useFormContext } from '../FormContext';

// add new lines on all commas and curly brackets
const pseudoFormatSchema = (schema: JSONSchema7) => JSON.stringify(schema)?.replace(/,/g, ',\n')?.replace(/\{/g, '{\n')?.replace(/\}/g, '\n}');

const UnsupportedField = ({ reason, idSchema, schema }: FieldProps) => {
  const { theme } = useFormContext();
  return (
  <View>
    <Text style={{ color: theme.errorColor }}>
      Unsupported field schema for field <Text style={ styles.fieldId }>{ idSchema?.$id }</Text>: <Text style={ styles.reason }>{ reason }</Text>
    </Text>

    <View style={ styles.schemaContainer }>
      {
        schema && Object.keys(schema)?.length > 0 &&
        <Text style={ styles.alignment }>{ pseudoFormatSchema(schema) }</Text>
      }
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  fieldId: {
    backgroundColor: '#FFCCCC',
  },
  reason: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  schemaContainer: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
  },
  alignment: {
    textAlign: 'left',
  },
});

export default UnsupportedField;
