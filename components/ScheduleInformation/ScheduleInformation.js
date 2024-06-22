import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import EditSchedule from "./EditSchedule";
import SafeAreaView from "../SafeAreaView/SafeAreaView";

function ScheduleInformation({ navigation }) {
    const route = useRoute();
    const { text } = route.params;

    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <EditSchedule
                    onCancel={cancelHandler}
                    text={text}
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
    },
});
