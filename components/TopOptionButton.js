import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, TouchableWithoutFeedback } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Menu, Snackbar } from "react-native-paper"
import Clipboard from "@react-native-clipboard/clipboard";

import Colors from "../constants/colors";

function TopOptionButton() {
    const [menuVisible, setMenuVisible] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    function menuOn() {
        setMenuVisible(true);
    }

    function menuOff() {
        setMenuVisible(false);
    }

    function snackbarOn() {
        setSnackbarVisible(true);
    }

    function snackbarOff() {
        setSnackbarVisible(false);
    }

    // const copyToClipboard = () => {
    //     Clipboard.setString('hello world');
    // };

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
                                <Menu.Item
                                    onPress={() => {
                                        // copyToClipboard;
                                        snackbarOn();
                                        menuOff();
                                    }}
                                    title="오늘 보기 링크 복사"
                                >
                                </Menu.Item>
                                <Menu.Item onPress={() => { }} title="작업 선택" />
                                <Menu.Item onPress={() => { }} title="보기" />
                                <Menu.Item onPress={() => { }} title="활동 로그" />
                            </View>
                        </TouchableWithoutFeedback>
                    </Menu>
                </View>
            </TouchableWithoutFeedback>
            <Snackbar
                visible={snackbarVisible}
                onDismiss={snackbarOff}
                duration={2000}
                style={{ width: 300, top: 790, right: 340 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={snackbarOff}>
                        <Text style={{ color: '#fff' }}>링크가 복사되었습니다.</Text>
                    </TouchableOpacity>
                </View>
            </Snackbar>
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
