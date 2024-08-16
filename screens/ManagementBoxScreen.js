import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Realm from "realm";

import AddScheduleList from "../components/schedule/AddScheduleList";
// import { deleteSchedule, fetchSchedule } from "../util/http";
import Schedule from "../components/Realm/Schedules";

function ManagementBoxScreen({ courseSchedules, setCourseSchedules }) {
    const navigation = useNavigation();

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [deletedSchedule, setDeletedSchedule] = useState(null);

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
            navigation.setOptions({ headerTitle: '관리함' });
        }
    }

    return (
        <>
            <FlatList
                style={styles.container}
                onScroll={handleScroll}
                data={courseSchedules}
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
                    <View style={styles.topNavigation}>
                        <Text style={styles.text}>관리함</Text>
                    </View>
                }
            />
            <Snackbar
                visible={snackbarVisible}
                onDismiss={snackbarOff}
                duration={3000}
                style={{ width: 350 }}
            >
                <View>
                    <TouchableOpacity onPress={undoDeleteSchedule}>
                        <Text style={{ color: '#fff' }}>실행 취소</Text>
                    </TouchableOpacity>
                </View>
            </Snackbar>
        </>
    )
}

export default ManagementBoxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topNavigation: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
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