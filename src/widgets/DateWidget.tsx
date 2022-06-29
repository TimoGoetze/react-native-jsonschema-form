import * as React from 'react';


import {DatePickerInput} from 'react-native-paper-dates';
import {
    // en,
    // nl,
     de,
    // pl,
    // pt,
    //enGB,
    registerTranslation,
} from 'react-native-paper-dates'
registerTranslation('de', de);
import { WidgetProps } from '@rjsf/core';




const DateWidget = (props: WidgetProps) => {
    const {

        onChange,
        value,

    } = props;




    const onDateChange = (selectedDate?: Date) => {
        const currentDate = selectedDate || new Date();
        onChange(+currentDate); //date as timestamp
    };




        return (
            <>

                            <DatePickerInput
                                locale="de"
                                label={"4DEV" + props.label}
                                value={value}
                                onChange={onDateChange}
                                inputMode="start"
                                mode="outlined"
                                //(see react-native-paper docs)
                                // other react native TextInput props
                            />
                    </>
            )}





export default DateWidget;
