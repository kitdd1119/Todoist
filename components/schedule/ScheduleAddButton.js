import {
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants/colors";

function ScheduleAddButton(props) {

    function startScheduleAddButtonHandler() {
        props.onModal(true);
    }

    return (
        <TouchableOpacity onPress={startScheduleAddButtonHandler} style={styles.scheduleButtonContainer}>
            <AntDesign name="pluscircle" size={60} color={Colors.mainColor} />
        </TouchableOpacity>
    );
}

export default ScheduleAddButton;

const styles = StyleSheet.create({
    scheduleButtonContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    },
});
