import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import TopOptionButton from "./TopOptionButton";

function TopOption() {

    return (
        <View style={styles.screen}>
            <PaperProvider>
                <TopOptionButton />
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