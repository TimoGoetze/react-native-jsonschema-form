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

    const themedStyle = {
        color: theme.textColor,
        borderBottomWidth: title && title.length > 0 ? 1 : 0,
    };

    return (
        <Text style={ [
            styles.title,
            themedStyle,
            title === '' && styles.hiddenHeight,
        ] }
        >
            {title}
            {
                required && <Text style={ { color: theme.errorColor } }>{requiredTitle}</Text>
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
    hiddenHeight: {
        height: 0,
    },
});

export default RootTitleField;
