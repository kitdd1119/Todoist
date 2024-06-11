import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Pressable } from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

import Colors from "../../constants/colors";
import SafeAreaView from "../SafeAreaView/SafeAreaView";

function Setting({ navigation }) {
    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.screen}>

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
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <View style={styles.icon}>
                                        <FontAwesome5 name="user-circle" size={24} color={Colors.mainColor} />
                                    </View>
                                    <Text style={styles.text}>계정</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>일반</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>테마</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>앱 아이콘</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>내비게이션</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>빠른 추가</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>생산성</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>알림</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed4}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>Siri</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>도움말 및 피드백</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>소개</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.settingView}>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed3}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>새 업데이트</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed2}
                                onPress={() => { }}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.text}>동기화</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View>
                            <Pressable
                                style={({ pressed }) => pressed && styles.pressed4}
                                onPress={() => { }}
                            >
                                <Text style={styles.text}>로그아웃</Text>
                            </Pressable>
                        </View>
                    </View>
                    <Text>로그인 계정: { }</Text>
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
    topText2View: {
        alignItems: 'flex-end'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 0,
    },
    icon: {
        padding: 10,
        borderBottomWidth: 0,
        borderBottomColor: 'white'
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
    settingView: {
        borderBottomColor: 'silver',
        borderBottomWidth: 0.2
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