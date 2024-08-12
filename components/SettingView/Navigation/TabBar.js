import { StyleSheet, View, Text, TextInput, SafeAreaView, ScrollView, Platform, Image } from "react-native";
import { EvilIcons, AntDesign } from '@expo/vector-icons';

import Colors from "../../../constants/colors";

function TabBar() {

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.screen}>
                <View style={[styles.settingButtonContainer, { paddingTop: Platform.OS === 'android' ? 48 : undefined }]}>
                    <View style={styles.textInputContainer}>
                        <EvilIcons name="search" size={24} color="gray" />
                        <TextInput
                            style={styles.textInput}
                            placeholder="검색"
                            placeholderTextColor='gray'
                        />
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Image
                                    source={require('../../../assets/BottomTab/ManagementBox2.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>관리함</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Image
                                    source={require('../../../assets/BottomTab/Today2.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>오늘</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <AntDesign name="calendar" size={24} color={Colors.mainColor} />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>다음</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Image
                                    source={require('../../../assets/BottomTab/filter_label.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>필터 & 라벨</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <AntDesign name="search1" size={24} color={Colors.mainColor} />
                            </View>
                            <View style={styles.bottomWidthView}>
                                <Text style={styles.text}>검색</Text>
                            </View>
                        </View>
                        <View style={styles.iconContainer}>
                            <View style={[styles.icon, { flexDirection: 'row', alignItems: 'center' }]}>
                                <Image
                                    source={require('../../../assets/BottomTab/List2.png')}
                                    style={{ width: 24, height: 24 }}
                                />
                            </View>
                            <View style={styles.bottomWidthView2}>
                                <Text style={styles.text}>목록</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TabBar;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    settingButtonContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    textInputContainer: {
        flex: 1,
        marginBottom: 30,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: 30,
        fontSize: 16,
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