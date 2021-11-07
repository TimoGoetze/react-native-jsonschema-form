import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFormContext } from '../FormContext';

export type UnsupportedFieldProps = {
  idSchema: {
    '$id': string;
  },
  reason: string;
  schema: {
    description: string;
    title: string;
    type: string;
    [key: string]: any;
  }
}

const UnsupportedField = ({ reason, idSchema, schema }: UnsupportedFieldProps) => {
  const { theme } = useFormContext();

  return (
  <View>
    <Text style={{ color: theme.errorColor }}>
      Unsupported field schema for field <Text style={ styles.fieldId }>{ idSchema?.$id }</Text>: <Text style={ styles.reason }>{ reason }</Text>
    </Text>

    <View style={ styles.schemaContainer }>
      <Text style={{ textAlign: 'left' }}>{JSON.stringify(schema).replaceAll(',',',\n')}</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  fieldId: {
    backgroundColor: '#FFCCCC'
  },
  reason: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  schemaContainer: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black'
  }
})

export default UnsupportedField;
