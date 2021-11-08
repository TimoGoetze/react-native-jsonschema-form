import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFormContext } from '../FormContext';


const RootTitleField = ({
                          title,
                          required,
                        }: {
  title?: string;
  required?: boolean;
}) => {
  const { theme, requiredTitle } = useFormContext();
  return (
    <Text style={ [
      styles.title,
      {
        color: theme.textColor,
        borderBottomWidth: title && title.length > 0 ? 1 : 0,
      },
      title === '' && { height: 0 }
    ] }
    >
      { title }
      {
        required && <Text style={ { color: theme.errorColor } }>{ requiredTitle }</Text>
      }
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
    borderBottomColor: '#EEEEEE',
  },
});

export default RootTitleField;
