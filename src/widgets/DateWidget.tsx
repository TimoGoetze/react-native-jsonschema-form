import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { WidgetProps } from '@rjsf/core';
import { useFormContext } from '../FormContext';

const DateWidget = (props: WidgetProps, {}) => {
    const { theme } = useFormContext();
    const [ show, setShow ] = useState(false);
    const { placeholderText } = props.options;

    const themedContainerStyle = {
        borderColor: props.rawErrors?.length > 0 ? theme.errorColor : theme.borderColor,
    };

    const themedPlaceholderTextStyle = {
        color: props.rawErrors?.length > 0 ? theme.errorColor : theme.borderColor
    }

    const themedTextStyle = {
        color: theme.textColor
    }

    const onDateChange = (_event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || new Date();
        setShow(false);
        props.onChange(+currentDate); //date as timestamp
    };

    return (
        <>
            <TouchableOpacity style={ [ styles.input, themedContainerStyle ] } onPress={() => setShow(true) }>
                {
                    !props.value &&
					< Text style={ themedPlaceholderTextStyle }>{ placeholderText || '' }</Text>
                }

                {
                    props.value &&
					< Text style={ themedTextStyle }>{ new Date(props.value)?.toLocaleDateString() || '' }</Text>
                }
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={ new Date() }
                    mode={ 'date' }
                    is24Hour={ true }
                    display='default'
                    onChange={ onDateChange }
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: '#979B9E',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 4,
        fontSize: 16,
        color: '#333333',
    },
});

export default DateWidget;
