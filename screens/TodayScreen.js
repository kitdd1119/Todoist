import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import AddScheduleList from "../components/schedule/AddScheduleList";
import { useRealm } from "../components/Realm/RealmContext";
// import { deleteSchedule, fetchSchedule } from "../util/http";

function TodayScreen({ courseSchedules, setCourseSchedules }) {
    const realm = useRealm();
    const navigation = useNavigation();

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [deletedSchedule, setDeletedSchedule] = useState(null);

    // 이는 Realm을 통해 기기 내에 데이터를 저장하는 것이 아닌 DB로 데이터를 전송하고 가져올 시에 사용할 코드
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

    // async function deleteScheduleHandler(id) {
    //     const scheduleToDelete = courseSchedules.find(schedule => schedule.id === id);
    //     if (scheduleToDelete) {
    //         // DB에서 해당 id 삭제
    //         await deleteSchedule(scheduleToDelete);
    //         setDeletedSchedule(scheduleToDelete);
    //         setCourseSchedules((currentCourseSchedules) => {
    //             return currentCourseSchedules.filter((schedule) => schedule.id !== id);
    //         });
    //         snackbarOn();
    //     }
    // }

    // function undoDeleteSchedule() {
    //     if (deletedSchedule) {
    //         setCourseSchedules((currentCourseSchedules) => [...currentCourseSchedules, deletedSchedule]);
    //         setDeletedSchedule(null);
    //         snackbarOff();
    //     }
    // }

    async function deleteScheduleHandler(id) {
        try {
            const scheduleToDelete = courseSchedules.find(schedule => schedule.id === id);
            if (scheduleToDelete) {
                realm.write(() => {
                    const objectToDelete = realm.objectForPrimaryKey('Schedule', id);
                    if (objectToDelete) {
                        realm.delete(objectToDelete);
                    }
                });

                setCourseSchedules((currentCourseSchedules) => 
                    currentCourseSchedules.filter((schedule) => schedule.id !== id)
                );

                setDeletedSchedule(scheduleToDelete);
                snackbarOn();
            }
        } catch (error) {
            console.error('스케줄 삭제 시 에러 발생: ', error);
        }
    }

    async function undoDeleteSchedule() {
        if (deletedSchedule) {
            try {
                realm.write(() => {
                    realm.create('Schedule', deletedSchedule);
                });

                setCourseSchedules((currentCourseSchedules) => [...currentCourseSchedules, deletedSchedule]);
                setDeletedSchedule(null);
                snackbarOff();
            } catch (error) {
                console.error('일정 복원 중 에러 발생: ', error);
            }
        }
    }

    function handleScroll(event) {
        const scrollY = event.nativeEvent.contentOffset.y;
        navigation.setOptions({ headerTitle: scrollY <= 40 ? '' : '오늘' });
    }

    return (
        <>
            <FlatList
                style={styles.container}
                onScroll={handleScroll}
                data={courseSchedules}
                renderItem={(itemData) => (
                    <AddScheduleList
                        text={itemData.item.text}
                        id={itemData.item.id}
                        onDeleteSchedule={deleteScheduleHandler}
                    />
                )}
                keyExtractor={(item) => item.id}
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
});
