import { useState } from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Calendar } from "react-native-calendars";

function Calendars(props) {
    const [calendarSelected, setCalendarSelected] = useState('');

    function offCalendarHandler() {
        props.offCalender();
    }

    return (
        // <Modal visible={props.visible} animationType="slide">
            <TouchableWithoutFeedback onPress={offCalendarHandler}>
                <View style={styles.modalOverlay}>
                    <Calendar
                        onDayPress={day => {
                            setCalendarSelected(day.dateString);
                        }}
                        markedDates={{
                            [calendarSelected]: { calendarSelected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                        }}
                    />
                </View>
            </TouchableWithoutFeedback>
        // </Modal>
    )
}

export default Calendars;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
});