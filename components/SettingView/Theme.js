import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch, Platform, Pressable } from "react-native";

function Theme() {

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView style={styles.screen}>
                <View style={[styles.settingButtonContainer, { paddingTop: Platform.OS === 'android' ? 48 : undefined }]}>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View>
                                <Text style={{ fontSize: 18 }}>테마 동기화</Text>
                                <Text style={{ color: 'gray' }}>모든 기기에서 테마 동기화</Text>
                            </View>
                            <Switch />
                        </View>
                    </View>
                    <View style={styles.settingButton}>
                        <View style={styles.iconContainer}>
                            <View>
                                <Text style={{ fontSize: 18 }}>자동 다크 모드</Text>
                                <Text style={{ color: 'gray' }}>다크 모드로 동기화</Text>
                            </View>
                            <Switch />
                        </View>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <View style={styles.settingButton}>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed4}

                        >
                            <Text style={styles.text}>mainColor</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.settingButtonContainer}>
                    <View style={styles.settingButton}>
                        <Pressable
                            style={({ pressed }) => pressed && styles.pressed4}

                        >
                            <Text style={styles.text}>dark</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Theme;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    settingButtonContainer: {
        margin: 10,
    },
    settingButton: {
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    pressed4: {
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    }
});