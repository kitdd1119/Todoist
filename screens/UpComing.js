import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function UpComing({ navigation }) {
    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <View>
            <TouchableOpacity onPress={cancelHandler}>
                <Text>나가기</Text>
            </TouchableOpacity>
        </View>
    );
}

export default UpComing;

const styles = StyleSheet.create({

});