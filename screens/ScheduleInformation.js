import { StyleSheet, Text, View } from "react-native";

function ScheduleInformation() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>asd</Text>
        </View>
    )
}

export default ScheduleInformation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});