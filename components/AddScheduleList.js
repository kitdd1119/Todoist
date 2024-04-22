import { View, Text, StyleSheet, Pressable } from "react-native";

function AddScheduleList(props) {
    return (
        <View style={styles.scheduleItem}>
            <Pressable
                android_ripple={{ color: '#ddd' }}
                onPress={props.onDeleteSchedule.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedSchedule}
            >
                <Text style={styles.schedule}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default AddScheduleList;

const styles = StyleSheet.create({
    scheduleItem: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: 'white',
        margin: 8,
        padding: 8,
    },
    schedule: {
        fontSize: 12,
    },
    pressedSchedule: {
        opacity: 0.5
    },
});