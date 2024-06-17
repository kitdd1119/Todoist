import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Pressable, Platform } from "react-native";
import {
    FontAwesome,
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
    Feather,
    FontAwesome6,
    SimpleLineIcons,
    MaterialIcons
}
from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/colors";
import SafeAreaView from "../SafeAreaView/SafeAreaView";

function Setting({ navigation }) {
    function cancelHandler() {
        navigation.goBack();
    }

    const navigation2 = useNavigation();

    function accountHandler() {
        navigation2.navigate('계정');
    }

    function generalHandler() {
        navigation2.navigate('일반');
    }

    function themeHandler() {
        navigation2.navigate('테마');
    }

    function appIconHandler() {
        navigation2.navigate('앱 아이콘');
    }

    function navigationHandler() {
        navigation2.navigate('내비게이션');
    }

    function quickAddHandler() {
        navigation2.navigate('빠른 추가');
    }

    function productivity2Handler() {
        navigation2.navigate('생산성');
    }

    function alarm2Handler() {
        navigation2.navigate('알림');
    }

    function siriHandler() {
        navigation2.navigate('Siri');
    }

    function helpAndFeedbackHandler() {
        navigation2.navigate('도움말 및 피드백');
    }

    function introductionHandler() {
        navigation2.navigate('소개');
    }

    function newUpdateHandler() {
        navigation2.navigate('새 업데이트');
    }

    function synchronizationHandler() {
        navigation2.navigate('동기화');
    }

    return (
        <SafeAreaView style={styles.screen} >
            <ScrollView style={styles.screen} >
                <View style={styles.topContainer}>
                    <View style={styles.topTextView}>
                        <Text style={[styles.topText, { fontWeight: 'bold' }]}>설정</Text>
                    </View>
                    <View style={styles.topText2View}>
                        <TouchableOpacity onPress={cancelHandler}>
                            <Text style={[styles.topText, { color: Colors.mainColor, fontWeight: 'bold' }]}>완료</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={accountHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <FontAwesome name="user-circle-o" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>계정</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={generalHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <Ionicons name="settings-outline" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView2}>
                                        <Text style={styles.text}>일반</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={themeHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <MaterialCommunityIcons name="palette-outline" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>테마</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={appIconHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <AntDesign name="appstore-o" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>앱 아이콘</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={navigationHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <Feather name="navigation" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>내비게이션</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={quickAddHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <AntDesign name="addfile" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView2}>
                                        <Text style={styles.text}>빠른 추가</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={productivity2Handler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <FontAwesome6 name="arrow-up-right-from-square" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>생산성</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={alarm2Handler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <SimpleLineIcons name="bell" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView2}>
                                        <Text style={styles.text}>알림</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed4}
                                onPress={siriHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <AntDesign name="apple-o" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView2}>
                                        <Text style={styles.text}>Siri</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={helpAndFeedbackHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <Feather name="help-circle" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>도움말 및 피드백</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={introductionHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <AntDesign name="exclamationcircleo" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>소개</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={newUpdateHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <MaterialIcons name="tips-and-updates" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView}>
                                        <Text style={styles.text}>새 업데이트</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={synchronizationHandler}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <AntDesign name="sync" size={24} color={Colors.mainColor} />
                                    </View>
                                    <View style={styles.bottomWidthView2}>
                                        <Text style={styles.text}>동기화</Text>
                                        <AntDesign name="right" size={10} color="black" />
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton2}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed4}
                                onPress={() => { }}
                            >
                                <View style={styles.logoutContainer}>
                                    <Text style={styles.logoutText}>로그아웃</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.loginInfo}>
                        <Text style={styles.loginInfoText}>로그인 계정: { }</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Setting;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 15,
    },
    topTextView: {
        flex: 1,
        left: 20,
        alignItems: 'center'
    },
    topText: {
        fontSize: 18,
    },
    text: {
        padding: 10,
        fontSize: 18,
        marginRight: 'auto',
    },
    logoutText: {
        fontSize: 18,
        color: Colors.mainColor,
        padding: 10,
    },
    topText2View: {
        alignItems: 'flex-end'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        padding: 12
    },
    settingButtonContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    settingButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 30,
    },
    settingButton2: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
    },
    bottomWidthView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'silver',
        borderBottomWidth: 0.2,
        padding: 5
    },
    bottomWidthView2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    logoutContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    loginInfo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginInfoText: {
        fontSize: 12,
        color: 'gray'
    },
    pressed: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    pressed2: {
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    pressed3: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    pressed4: {
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
});