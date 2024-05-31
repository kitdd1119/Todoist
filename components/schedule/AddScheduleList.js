import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
// import Calendars from "../calendar/Calendars";

function AddScheduleList(props) {
    const navigation = useNavigation();
    // const [calendarSelected, setCalendarSelected] = useState('');

    function onScheduleInformationHandler() {
        navigation.navigate('ScheduleInformation');
    }

    // function offCalendarHandler() {
    //     setModalIsVisible(false);
    // }

    // function handleDayPress(day) {
    //     setCalendarSelected(day.dateString);
    // }

    return (
        <TouchableOpacity onPress={onScheduleInformationHandler}>
            <View style={styles.screen}>
                <View style={styles.deleteButtonContainer}>
                    <Pressable
                        android_ripple={{ color: '#ddd' }}
                        style={({ pressed }) => pressed && styles.pressedSchedule}
                        onPress={props.onDeleteSchedule.bind(this, props.id)}
                    >
                        <View style={styles.deleteScheduleButton}>
                            <Text></Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.scheduleData}>
                    <Text style={styles.schedule}>{props.text}</Text>
                </View>
            </View>
            {/* <Calendars 
                visible={modalIsVisible}
                selectedDate={calendarSelected}
                onDayPress={handleDayPress}
                offCalender={offCalendarHandler}
            /> */}
        </TouchableOpacity>
    )
}

export default AddScheduleList;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
    },
    deleteButtonContainer: {
        margin: 10,
        width: 20,
        height: 20,
    },
    scheduleData: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // #fafafa
    },
    deleteScheduleButton: {
        borderColor: 'black',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 100,
    },
    schedule: {
        fontSize: 12,
    },
    pressedSchedule: {
        opacity: 0.5
    },
});
