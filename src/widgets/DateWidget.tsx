import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { WidgetProps } from '@rjsf/core';
import { useFormContext } from '../FormContext';

const DateWidget = (props: WidgetProps) => {
    const {
        options,
        rawErrors,
        onChange,
        value,
        disabled,
    } = props;

    const { theme } = useFormContext();
    const [ show, setShow ] = useState(false);
    const { placeholderText, minDate, maxDate } = options;
    const themedContainerStyle = {
        borderColor: rawErrors?.length > 0 ? theme.errorColor : theme.borderColor,
    };

    const themedPlaceholderTextStyle = {
        color: rawErrors?.length > 0 ? theme.errorColor : theme.borderColor,
    };

    const themedTextStyle = {
        color: theme.textColor,
    };

    const onDateChange = (_event: Event, selectedDate?: Date) => {
        const currentDate = selectedDate || new Date();
        setShow(false);
        onChange(+currentDate); //date as timestamp
    };

    return (
        <>
            <TouchableOpacity style={[ styles.input, themedContainerStyle ]} onPress={() => setShow(true)}>
                {
                    !value &&
					< Text style={themedPlaceholderTextStyle}>{placeholderText || ''}</Text>
                }

                {
                    value &&
					< Text style={themedTextStyle}>{new Date(value)?.toLocaleDateString() || ''}</Text>
                }
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display={'default'}
                    onChange={onDateChange}
                    minimumDate={(minDate && typeof minDate === 'string') ? new Date(minDate) : undefined}
                    maximumDate={(maxDate && typeof maxDate === 'string') ? new Date(maxDate) : undefined}
                    disabled={disabled}
                    {...options}
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
