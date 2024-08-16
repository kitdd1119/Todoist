import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform, KeyboardAvoidingView, TextInput, Image, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons, AntDesign } from '@expo/vector-icons';
import Realm from "realm";

import AddScheduleList from "../components/schedule/AddScheduleList";
// import { deleteSchedule, fetchSchedule } from "../util/http";
import Schedule from "../components/Realm/Schedules";


function SearchScreen({ courseSchedules, setCourseSchedules }) {
    const navigation = useNavigation();
    const inputRef = useRef(null);

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [deletedSchedule, setDeletedSchedule] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    // const [isFocused, setIsFocused] = useState(false);

    // DB 에서 일정 값 가져오기
    // useEffect(() => {
    //     async function getSchedules() {
    //         const schedules = await fetchSchedule();
    //         setCourseSchedules((currentCourseSchedules) => [...currentCourseSchedules, ...schedules]);
    //     }
    //     getSchedules();
    // }, []);

    function snackbarOn() {
        setSnackbarVisible(true);
    }

    function snackbarOff() {
        setSnackbarVisible(false);
    }

    async function deleteScheduleHandler(id) {
        try {
            // 삭제할 일정 찾기
            const scheduleToDelete = courseSchedules.find(schedule => schedule.id === id);
            if (scheduleToDelete) {
                // Realm 데이터베이스 열기
                const realm = await Realm.open({ schema: [Schedule.schema] });
    
                // Realm 쓰기 트랜잭션 시작
                realm.write(() => {
                    // 일정 삭제
                    realm.delete(realm.objectForPrimaryKey('Schedule', id));
                });
    
                // 상태 업데이트
                setCourseSchedules((currentCourseSchedules) => {
                    return currentCourseSchedules.filter((schedule) => schedule.id !== id);
                });
    
                // 삭제된 일정 상태 저장
                setDeletedSchedule(scheduleToDelete);
    
                // Realm 닫기
                realm.close();
    
                // 스낵바 표시
                snackbarOn();
            }
        } catch (error) {
            console.error('스케줄 삭제 시 에러 발생: ', error);
        }
    }
    
    async function undoDeleteSchedule() {
        if (deletedSchedule) {
            try {
                // Realm 데이터베이스 열기
                const realm = await Realm.open({ schema: [Schedule.schema] });
    
                // Realm 쓰기 트랜잭션 시작
                realm.write(() => {
                    // 삭제된 일정 다시 추가
                    realm.create('Schedule', deletedSchedule);
                });
    
                // 상태 업데이트
                setCourseSchedules((currentCourseSchedules) => [...currentCourseSchedules, deletedSchedule]);
    
                // 삭제된 일정 상태 초기화
                setDeletedSchedule(null);
    
                // Realm 닫기
                realm.close();
    
                // 스낵바 숨기기
                snackbarOff();
            } catch (error) {
                console.error('realm 일정 삭제 중 에러 발생: ', error);
            }
        }
    }

    function handleScroll(event) {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (scrollY <= 40) { // 스크롤 위치가 50 이상이면 헤더 타이틀을 표시
            navigation.setOptions({ headerTitle: '' });
        } else {
            navigation.setOptions({ headerTitle: '검색' });
        }
    }

    function todayScreenHandler() {
        navigation.navigate('MainOverview', {
            screen: '오늘',
        });
    }

    const filteredSchedules = courseSchedules.filter(schedule =>
        schedule.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    function inputDeleteHandler() {
        setSearchQuery('');
        inputRef.current.focus();
    }

    return (
        <>
            <FlatList
                style={styles.container}
                onScroll={handleScroll}
                data={filteredSchedules}
                renderItem={(itemData) => {
                    return (
                        <AddScheduleList
                            text={itemData.item.text}
                            id={itemData.item.id}
                            onDeleteSchedule={deleteScheduleHandler}
                        />
                    );
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                ListHeaderComponent={
                    <View style={styles.container}>
                        <KeyboardAvoidingView
                            style={styles.container}
                            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        // 안드로이드에서 하단 네비게이션이 키보드 위로 올라오는 문제 해결해야 함.
                        >
                            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                                <View style={styles.topNavigation}>
                                    <Text style={styles.text}>검색</Text>
                                    <View style={styles.textInputContainer}>
                                        <EvilIcons name="search" size={24} color="gray" />
                                        <TextInput
                                            ref={inputRef}
                                            placeholder="작업, 프로젝트, 및 기타"
                                            style={styles.searchContainer}
                                            value={searchQuery}
                                            onChangeText={setSearchQuery}
                                        />
                                        {searchQuery.length >= 1 && (
                                            <TouchableOpacity onPress={inputDeleteHandler}>
                                                <AntDesign name="closecircle" size={18} color="gray" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.scheduleContainer}>
                                <View>
                                    <TouchableOpacity
                                        onPress={todayScreenHandler}
                                        style={({ pressed }) => pressed && styles.pressed}

                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.1)' }}>
                                            <View style={{ borderBottomWidth: 0 }}>
                                                {/* 이미지 아래에 있는 보더 값 덮어써야 함. */}
                                                <Image
                                                    source={require('../assets/BottomTab/Today2.png')}
                                                    style={{ width: 24, height: 24, margin: 10 }}
                                                />
                                            </View>
                                            <View>
                                                <Text>오늘</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                }
            >
            </FlatList>
            <Snackbar
                visible={snackbarVisible}
                onDismiss={snackbarOff}
                duration={3000}
                style={{ width: 350 }}
            >
                <View>
                    <TouchableOpacity onPress={undoDeleteSchedule}>
                        <Text style={{ color: '#fff' }}>실행 취소 을 완료했습니다.</Text>
                    </TouchableOpacity>
                </View>
            </Snackbar>
        </>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topNavigation: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        marginHorizontal: 12,
        marginBottom: 12,
        padding: 6
    },
    searchContainer: {
        flex: 1,
        fontSize: 16,
    },
    text: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    scheduleContainer: {
        flex: 1,
    },
});
