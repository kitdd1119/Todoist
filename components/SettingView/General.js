import { View, Text, ScrollView, StyleSheet, Pressable, Platform, Switch, TouchableOpacity, Linking } from "react-native";
import SafeAreaView from "../SafeAreaView/SafeAreaView";
import Colors from "../../constants/colors";

function General() {
    function link() {
        Linking.openURL('https://google.com');
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.screen}>
                <View style={styles.settingButtonContainer}>
                    <View style={{ paddingTop: Platform.OS === 'android' ? 48 : undefined }}>
                        <Text style={styles.tinyText}>홈</Text>
                    </View>
                    <View style={styles.settingButton}>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed}

                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>홈 보기</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed2}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView2}>
                                    <Text style={styles.text}>홈 보기 동기화</Text>
                                    <Switch

                                    />
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    <Text style={styles.tinyText}>모든 플랫폼에서 홈 보기를 동기화합니다.</Text>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>스마트 날짜 인식</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>작업에 마감 날짜 자동 감지</Text>
                                <Switch

                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>하위 작업</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>하위 작업 재설정</Text>
                                <Switch

                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.tinyText}>반복 작업을 완료할 때 하위 작업을 재설정합니다.
                        <Text onPress={link} style={{ color: Colors.mainColor }}> 자세히 알아보기</Text>
                    </Text>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>공유 프로젝트</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>초대 자동 수락</Text>
                                <Switch

                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.tinyText}>사용 안함으로 설정은, 각 프로젝트 초대를 수동으로 수락해야 합니다.</Text>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>날짜 및 시간</Text>
                    <View style={styles.settingButton}>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed}

                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>표준 시간대</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed3}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>한 주의 시작</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed3}

                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>"다음 주" 해석</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed2}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView2}>
                                    <Text style={styles.text}>"주말" 해석</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>앱 설정</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>웹 링크 열기</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>소리</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>작업 완료 톤</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                        <Text style={styles.tinyText}>스와이프 동작</Text>
                    <View style={styles.settingButton}>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed}

                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>우측 스와이프</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed2}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.bottomWidthView2}>
                                    <Text style={styles.text}>좌측 스와이프</Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <Text style={styles.tinyText}>고급</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>시험 기능</Text>
                                <Switch

                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.tinyText}>가장 먼저 새로운 기능의 초기 버전을 미리 보기 하세요.
                        <Text onPress={link} style={{ color: Colors.mainColor }}>자세히 알아보기</Text> 
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView >

    )
}

export default General;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    settingButtonContainer: {
        margin: 10,
    },
    settingButton: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    settingButton2: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 30,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    text: {
        padding: 10,
        fontSize: 18,
        marginRight: 'auto',
    },
    tinyText: {
        marginHorizontal: 12,
        marginVertical: 6,
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