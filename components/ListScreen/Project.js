import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Colors from "../../constants/colors";
import SafeAreaView from "../SafeAreaView/SafeAreaView";

function Project({ navigation }) {
    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.topContainer}>
                <TouchableOpacity onPress={cancelHandler}>
                    <Text style={[styles.topText, { color: Colors.mainColor }]}>취소</Text>
                </TouchableOpacity>
                <Text style={[styles.topText, { fontWeight: 'bold' }]}>프로젝트</Text>
                <TouchableOpacity>
                    <AntDesign name="plus" size={24} color={Colors.mainColor}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Project;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    topText: {
        fontSize: 18,
    },
});