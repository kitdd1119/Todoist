import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Calendar } from "react-native-calendars";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

import SafeAreaView from "../SafeAreaView/SafeAreaView";

function Calendars(props) {
    const [calendarSelected, setCalendarSelected] = useState('');
    const modalizeRef = useRef(null);

    function offCalendarHandler() {
        props.offCalender();
        modalizeRef.current?.close();
    }

    useEffect(() => {
        if (props.visible) {
            modalizeRef.current?.open();
        } else {
            modalizeRef.current?.close();
        }
    }, [props.visible]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Modalize
                ref={modalizeRef}
                snapPoint={300}
                onOverlayPress={offCalendarHandler}
                modalStyle={styles.modalStyle}
            >
                <SafeAreaView style={styles.screen}>
                    <TouchableWithoutFeedback onPress={offCalendarHandler}>
                        <View style={styles.modalOverlay}>
                            <Calendar
                                onDayPress={day => {
                                    setCalendarSelected(day.dateString);
                                    props.onDayPress(day);
                                }}
                                markedDates={{
                                    [calendarSelected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Text>asdasd</Text>
                    </View>
                </SafeAreaView>
            </Modalize>
        </GestureHandlerRootView>
    )
}

export default Calendars;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalStyle: {
        padding: 20,
    },
    modalContent: {
        flex: 1,
    },
});
