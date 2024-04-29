import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import TopOptionButton from "./TopOptionButton";

function TopOption({ todayScreen }) {

    return (
        <View style={styles.screen}>
            <PaperProvider>
                <TopOptionButton todayScreen={todayScreen} />
            </PaperProvider>
        </View>
    )
}

export default TopOption;

const styles = StyleSheet.create({
    screen: {
        position: 'relative',
        flex: 1,
    },
})