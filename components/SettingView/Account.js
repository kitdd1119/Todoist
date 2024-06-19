import { View, Text, TouchableOpacity, TextInput, Switch, StyleSheet, ScrollView, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants/colors";
import SafeAreaView from "../SafeAreaView/SafeAreaView";

function Account() {
    function PhotoEditing() {
        // 사진 찍기, 사진 선택, 현재 사진 삭제 기능을 넣은 메뉴 버튼
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.photoEditingContainer}>
                        <TouchableOpacity style={styles.photoEditingButton}>
                            <AntDesign name="user" size={60} color={Colors.mainColor} />
                            <Text style={{ color: 'gray', marginVertical: 6 }}>아바타 사진은 전체 공개입니다.</Text>
                            <Text style={{ color: Colors.mainColor }}>편집</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.accountEditingContainer}>
                        <View style={styles.accountEditingView}>
                            <Text style={styles.text}>성과 이름</Text>
                            <TextInput
                                // placeholder={로그인 된 계정 아이디가 기본 설정}
                                style={[styles.buttonContainer2, { fontSize: 16 }]}
                            />
                        </View>
                        <View style={styles.accountEditingView}>
                            <Text style={styles.text}>이메일</Text>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{ fontSize: 16 }}>{ }</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountEditingView}>
                            <Text style={styles.text}>패스워드</Text>
                            <TouchableOpacity style={styles.buttonContainer2}>
                                <Text style={{ textAlign: 'center', fontSize: 16 }}>패스워드 추가</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountEditingView}>
                            <Text style={styles.text}>2단계 인증</Text>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{ fontSize: 16 }}>2단계 인증 사용</Text>
                                <Switch

                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.accountEditingView}>
                            <TouchableOpacity style={styles.buttonContainer2}>
                                <Text style={{ textAlign: 'center', color: Colors.mainColor, fontSize: 16 }}>계정 삭제</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 16 : undefined
        // 안드로이드에서 왜 SafeAreaView가 적용이 안되는지 모르겠음.
    },
    photoEditingContainer: {
        height: 150
    },
    photoEditingButton: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accountEditingContainer: {
        margin: 20
    },
    accountEditingView: {
        marginVertical: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 10
    },
    buttonContainer2: {
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 10
    },
    text: {
        margin: 5,
        color: 'gray'
    }
});