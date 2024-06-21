import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch, Platform, Pressable, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Checkbox } from "react-native-paper";

import Colors from "../../constants/colors";

function Navigation() {
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [allCheck, setAllChecked] = useState(false);

    function allCheckHandler() {
        const checkAll = !allCheck;
        setAllChecked(checkAll);
        setChecked(checkAll);
        setChecked2(checkAll);
        setChecked3(checkAll);
        setChecked4(checkAll);
        setChecked5(checkAll);
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.screen}>
                <View style={[styles.settingButtonContainer, { paddingTop: Platform.OS === 'android' ? 48 : undefined }]}>
                    <Text style={styles.tinyText}>탭바</Text>
                    <View style={styles.settingButton}>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.icon}>
                                    <Image
                                        source={require('../../assets/BottomTab/Today2.png')}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </View>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>오늘</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed3}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.icon}>
                                    <Image
                                        source={require('../../assets/BottomTab/ManagementBox2.png')}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </View>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>관리함</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed3}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.icon}>
                                    <Image
                                        source={require('../../assets/BottomTab/Search2.png')}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </View>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>검색</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed3}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.icon}>
                                    <Image
                                        source={require('../../assets/BottomTab/ManagementBox2.png')}
                                        style={{ width: 24, height: 24 }}
                                    />
                                </View>
                                <View style={styles.bottomWidthView}>
                                    <Text style={styles.text}>목록</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed2}
                        >
                            <View style={styles.iconContainer}>
                                <View style={styles.icon}>
                                    <AntDesign name="plus" size={24} color={Colors.mainColor} />
                                </View>
                                <View style={styles.bottomWidthView2}>
                                    <Text style={styles.text}>추가</Text>
                                    <AntDesign name="right" size={10} color="black" />
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    <Text style={[styles.tinyText, { marginBottom: 30 }]}>워크플로에 맞게 탭바 내비게이션을 사용자 정의하세요. 유효한 슬롯에서 대상을 선택하고 "편집"을 탭하여 재정렬하세요.</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.tinyText}>메뉴항목</Text>
                        <Text onPress={allCheckHandler} style={{ marginHorizontal: 12, marginVertical: 6, color: Colors.mainColor }}>모두 표시</Text>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked(!checked) }}
                                    uncheckedColor={Colors.mainColor}
                                />
                                <Image
                                    source={require('../../assets/BottomTab/ManagementBox2.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>관리함</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Checkbox
                                    status={checked2 ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked2(!checked2) }}
                                    uncheckedColor={Colors.mainColor}
                                />
                                <Image
                                    source={require('../../assets/BottomTab/Today2.png')}
                                    style={{ width: 24, height: 24 }}
                                />

                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>오늘</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Checkbox
                                    status={checked3 ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked3(!checked3) }}
                                    uncheckedColor={Colors.mainColor}
                                />
                                <AntDesign name="calendar" size={24} color={Colors.mainColor} />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>다음</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Checkbox
                                    status={checked4 ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked4(!checked4) }}
                                    uncheckedColor={Colors.mainColor}
                                />
                                <Image
                                    source={require('../../assets/BottomTab/filter_label.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>필터 & 라벨</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Checkbox
                                    status={checked5 ? 'checked' : 'unchecked'}
                                    onPress={() => { setChecked5(!checked5) }}
                                    uncheckedColor={Colors.mainColor}
                                />
                                <AntDesign name="checkcircleo" size={24} color={Colors.mainColor} />
                            </View>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>완료한 작업</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.tinyText, { marginBottom: 30 }]}>탭바 옵션으로 설정된 항목은 메뉴에서 숨겨집니다.</Text>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <Text style={styles.text}>작업 개수 표시</Text>
                            <Switch />
                        </View>
                    </View>
                    <Text style={styles.tinyText}>사용 안함으로 설정할 경우, 작업 개수가 내비게이션 메뉴에서 사라집니다.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Navigation;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    settingButtonContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    settingButton: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        padding: 12
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