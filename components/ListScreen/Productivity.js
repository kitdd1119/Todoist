import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../constants/colors";
import SafeAreaView from '../SafeAreaView/SafeAreaView';

const screenWidth = Dimensions.get('window').width;
// 화면의 너비를 가져옮.
const barWidth = screenWidth * 0.9 / 3; // 전체 화면의 90%를 사용하여 3개의 막대 너비로 나눠 계산

function Productivity({ navigation }) {
    const animation = useRef(new Animated.Value(0)).current;
    // 애니메이션 초기값을 0으로 설정하고 useRef는 current(속성) 객체를 반환.

    const handlePress = (index) => {
        // Animated.spring을 사용해 애니메이션 시작
        Animated.spring(animation, {
            toValue: index * barWidth, // 각 인덱스에 대한 x 위치 계산
            useNativeDriver: false, 
            // 레이아웃 속성을 애니메이션화하고 레이아웃 속성(left, top)은 useNativeDriver와 함께 사용할 수 없음
        }).start();
    };

    function cancelHandler() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.topContainer}>
                <TouchableOpacity>
                    <Text style={[styles.topText, { color: Colors.mainColor }]}>설정</Text>
                </TouchableOpacity>
                <Text style={[styles.topText, { fontWeight: 'bold' }]}>생산성</Text>
                <TouchableOpacity onPress={cancelHandler}>
                    <Text style={[styles.topText, { color: Colors.mainColor, fontWeight: 'bold' }]}>완료</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.activityButton}>
                    <AntDesign name="user" size={36} color={Colors.mainColor} />
                    <View style={styles.activityInfo}>
                        <Text>사용자 ID</Text>
                        <Text>완료한 작업: { }</Text>
                    </View>
                    <AntDesign name="right" size={10} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.barContainer}>
                    <Animated.View style={[styles.background, { transform: [{ translateX: animation }] }]} />
                    {/* Animated.View의 transform 속성에 translateX를 사용하여 animation 값을 직접 설정 */}
                    <TouchableOpacity style={styles.bar} onPress={() => handlePress(0)}>
                        <Text style={styles.barText}>일일</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bar} onPress={() => handlePress(1)}>
                        <Text style={styles.barText}>주간</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bar} onPress={() => handlePress(2)}>
                        <Text style={styles.barText}>Karma</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>

            </View>
        </SafeAreaView>
    );
}

export default Productivity;

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
    activityButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    activityInfo: {
        right: 100,
    },

    // 이 아래로는 일일, 주간, Karma 버튼 스타일
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
        width: '33%',
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
    // 일일, 주간, Karma 버튼 스타일
});