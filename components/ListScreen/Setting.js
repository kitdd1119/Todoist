import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";

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
                        <Text style={[styles.text, { fontWeight: 'bold' }]}>설정</Text>
                    </View>
                    <View style={styles.topText2View}>
                        <TouchableOpacity onPress={cancelHandler}>
                            <Text style={[styles.text, { color: Colors.mainColor, fontWeight: 'bold' }]}>완료</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>계정</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView2}>
                            <TouchableOpacity>
                                <Text style={styles.text}>일반</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>테마</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>앱 아이콘</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>내비게이션</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView2}>
                            <TouchableOpacity>
                                <Text style={styles.text}>빠른 추가</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>생산성</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView2}>
                            <TouchableOpacity>
                                <Text style={styles.text}>알림</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView2}>
                            <TouchableOpacity>
                                <Text style={styles.text}>Siri</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>도움말 및 피드백</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>소개</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView}>
                            <TouchableOpacity>
                                <Text style={styles.text}>새 업데이트</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.settingView2}>
                            <TouchableOpacity>
                                <Text style={styles.text}>동기화</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.settingView2}>
                            <TouchableOpacity>
                                <Text style={styles.text}>로그아웃</Text>
                            </TouchableOpacity>
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
    text: {
        fontSize: 18,
    },
    topText2View: {
        alignItems: 'flex-end'
    },
    settingButtonContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    settingButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 30,
        marginBottom: 30,
    },
    settingView: {
        padding: 10,
        borderColor: 'silver',
        borderBottomWidth: 0.2
    },
    settingView2: {
        padding: 10,
    },
});