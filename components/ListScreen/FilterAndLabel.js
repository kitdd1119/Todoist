import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function FilterAndLabel({ navigation }) {
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

export default FilterAndLabel;

const styles = StyleSheet.create({

});