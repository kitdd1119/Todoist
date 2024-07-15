import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import AddScheduleList from "../components/schedule/AddScheduleList";
import { deleteSchedule, fetchSchedule } from "../util/http";

function TodayScreen({ courseSchedules, setCourseSchedules }) {
    const navigation = useNavigation();

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [deletedSchedule, setDeletedSchedule] = useState(null);

    // DB 에서 일정 값 가져오기
    useEffect(() => {
        async function getSchedules() {
            const schedules = await fetchSchedule();
            setCourseSchedules((currentCourseSchedules) => [...currentCourseSchedules, ...schedules]);
        }
        getSchedules();
    }, []);

    function snackbarOn() {
        setSnackbarVisible(true);
    }

    function snackbarOff() {
        setSnackbarVisible(false);
    }

    async function deleteScheduleHandler(id) {
        const scheduleToDelete = courseSchedules.find(schedule => schedule.id === id);
        if (scheduleToDelete) {
            // DB에서 해당 id 삭제
            await deleteSchedule(scheduleToDelete);
            setDeletedSchedule(scheduleToDelete);
            setCourseSchedules((currentCourseSchedules) => {
                return currentCourseSchedules.filter((schedule) => schedule.id !== id);
            });
            snackbarOn();
        }
    }

    function undoDeleteSchedule() {
        if (deletedSchedule) {
            setCourseSchedules((currentCourseSchedules) => [...currentCourseSchedules, deletedSchedule]);
            setDeletedSchedule(null);
            snackbarOff();
        }
    }

    function handleScroll(event) {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (scrollY <= 40) { // 스크롤 위치가 50 이상이면 헤더 타이틀을 표시
            navigation.setOptions({ headerTitle: '' });
        } else {
            navigation.setOptions({ headerTitle: '오늘' });
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
                        <Text style={styles.text}>오늘</Text>
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
    );
}

export default TodayScreen;

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
