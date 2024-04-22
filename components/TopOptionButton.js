import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Menu } from "react-native-paper"

import Colors from "../constants/colors";

function TopOptionButton() {
    const [menuVisible, setMenuVisible] = useState(false);

    function menuOn() {
        setMenuVisible(true);
    }

    function menuOff() {
        setMenuVisible(false);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={menuOff}>
                <View style={styles.screen}>
                    <Menu
                        visible={menuVisible}
                        onDismiss={menuOff}
                        style={styles.menu}
                        anchor={
                            <TouchableOpacity onPress={menuOn} style={styles.option}>
                                <SimpleLineIcons name="options" size={18} color={Colors.mainColor} />
                            </TouchableOpacity>
                        }
                    >
                        <TouchableWithoutFeedback>
                            <View style={styles.menuContainer}>
                                <Menu.Item onPress={() => {menuOff();}} title="오늘 보기 링크 복사" />
                                <Menu.Item onPress={() => {}} title="작업 선택" />
                                <Menu.Item onPress={() => {}} title="보기" />
                                <Menu.Item onPress={() => {}} title="활동 로그" />
                            </View>
                        </TouchableWithoutFeedback>
                    </Menu>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default TopOptionButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        zIndex: 100, 
    },
    option: {
        width: 18,
        height: 18,
    },
    menu: {
        width: 300,
        top: 30,
        left: 'auto',
        right: 10,
    },
    menuContainer: {
        flex: 1,
    }
});
