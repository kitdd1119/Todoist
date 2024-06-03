import { StyleSheet, View } from "react-native";

import EditSchedule from "../components/ScheduleInformation/EditSchedule";
import SafeAreaView from "../components/SafeAreaView/SafeAreaView";

function ScheduleInformation({ navigation }) {
    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <EditSchedule
                    onCancel={cancelHandler}
                />
            </View>
        </SafeAreaView>
    )
}

export default ScheduleInformation;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
