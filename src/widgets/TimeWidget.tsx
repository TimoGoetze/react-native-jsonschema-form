import * as React from 'react';


import {TimePickerModal} from 'react-native-paper-dates';
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
import {Button} from "react-native-paper";




const TimeWidget = (props: WidgetProps) => {
    const {

        onChange,
        value,

    } = props;

    const startDate = value || +new Date()



    const onDateChange = (selectedDate?: number) => {
        const currentDate = selectedDate || new Date();
        onChange(+currentDate); //date as timestamp
    };

    const TimePickerPage = () => {

            const [visible, setVisible] = React.useState(false)
            const onDismiss = React.useCallback(() => {
                setVisible(false)
            }, [setVisible])
            const startTime = new Date(props.value) || new Date(0);
            console.log(JSON.stringify(startTime));

        const onConfirm = React.useCallback(
            // @ts-ignore
                ({ hours, minutes }) => {
                    setVisible(false);

                    onDateChange(new Date(0).setHours(hours,minutes));
                },
                [setVisible]
            );
        const zeroPad = (num:number, places:number) => String(num).padStart(places, '0')

            return (
                <>
                    <TimePickerModal
                        visible={visible}
                        onDismiss={onDismiss}
                        onConfirm={onConfirm}
                        hours={startTime.getHours()} // default: current hours
                        minutes={startTime.getMinutes()} // default: current minutes
                        label={props.label}// optional, default 'Select time'
                        uppercase={false} // optional, default is true
                        cancelLabel="Cancel" // optional, default: 'Cancel'
                        confirmLabel="Ok" // optional, default: 'Ok'
                        animationType="fade" // optional, default is 'none'
                        locale="de" // optional, default is automically detected by your system
                    />
                    <Button onPress={()=> setVisible(true)}>
                        {(zeroPad(startTime.getHours(),2))+":"+(zeroPad(startTime.getMinutes(),2))}
                    </Button>
                </>
            )
        }




    return (
        <>

            <TimePickerPage
                // @ts-ignore
                locale="de"
                //label={props.label}
                value={new Date(startDate)}
                onConfirm={onDateChange}
                inputMode="start"
                mode=""
                //(see react-native-paper docs)
                // other react native TextInput props
            />
        </>
    )}





export default TimeWidget;
