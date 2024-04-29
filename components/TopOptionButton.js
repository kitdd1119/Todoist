import React, { useState } from "react";
import { Linking, StyleSheet, TouchableOpacity, View, Text, TouchableWithoutFeedback } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Menu, Snackbar } from "react-native-paper"
// import Clipboard from "@react-native-clipboard/clipboard";

import Colors from "../../constants/colors";

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

    // 링크 복사 기능은 웹에서 구현되는데 앱에서는 에러 뜨는 듯함.
    // 기능적으로는 구현이 되는 것 같으니 다른 기능 추가하고 나중에 오류 해결 해야 할 듯함.
    
    // async function copyCurrentURL() {
    //     try {
    //         const url = await Linking.getInitialURL();
    //         Clipboard.setString(url);
    //     } catch (error) {
    //         console.error('URL을 가져오는 동안 오류가 발생했습니다:', error);
    //     }
    // }


    const copyToClipboard = () => {
        // copyCurrentURL();
        snackbarOn();
        menuOff();
    };

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
                                    onPress={copyToClipboard}
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
                style={styles.snackbar}
            >
                <View>
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
    },
    snackbar: {
        width: 300,
        top: 770,
        right: 340,
    },
});