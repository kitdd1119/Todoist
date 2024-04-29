import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

function AddScheduleList(props) {
    return (
        <TouchableOpacity>
            <View style={styles.screen}>
                <View style={styles.deleteButtonContainer}>
                    <Pressable
                        android_ripple={{ color: '#ddd' }}
                        style={({ pressed }) => pressed && styles.pressedSchedule}
                        onPress={props.onDeleteSchedule.bind(this, props.id)}
                    >
                        <Text style={styles.deleteScheduleButton}></Text>
                    </Pressable>
                </View>
                <View style={styles.scheduleData}>
                    <Text style={styles.schedule}>{props.text}</Text>
                </View>
            </View>
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