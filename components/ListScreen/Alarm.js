import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Animated, Dimensions } from "react-native";
import { Octicons } from '@expo/vector-icons';

import Colors from "../../constants/colors";
import SafeAreaView from "../SafeAreaView/SafeAreaView";

const screenWidth = Dimensions.get('window').width;
const barWidth = screenWidth * 0.9 / 2;

function Alarm({ navigation }) {
    const animation = useRef(new Animated.Value(0)).current;

    const handlePress = (index) => {
        Animated.spring(animation, {
            toValue: index * barWidth,
            useNativeDriver: false,
        }).start();
    };

    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.topContainer}>
                <TouchableOpacity>
                    <Octicons name="checklist" size={24} />
                </TouchableOpacity>
                <Text style={[styles.topText, { fontWeight: 'bold' }]}>알림</Text>
                <TouchableOpacity onPress={cancelHandler}>
                    <Text style={[styles.topText, { color: Colors.mainColor, fontWeight: 'bold' }]}>완료</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.barContainer}>
                    <Animated.View style={[styles.background, { transform: [{ translateX: animation }] }]} />
                    {/* Animated.View의 transform 속성에 translateX를 사용하여 animation 값을 직접 설정 */}
                    <TouchableOpacity style={styles.bar} onPress={() => handlePress(0)}>
                        <Text style={styles.barText}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bar} onPress={() => handlePress(1)}>
                        <Text style={styles.barText}>읽지 않음 ({})</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Alarm;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    topText: {
        fontSize: 18,
    },
    alarmButton: {
        flexDirection: 'row'
    },

    // 이 아래로는 전체, 읽지 않음 버튼 스타일
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    barContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 30,
        borderRadius: 5,
        padding: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
    background: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    bar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barText: {
        fontSize: 14,
    },
    // 전체, 읽지 않음 버튼 스타일
});