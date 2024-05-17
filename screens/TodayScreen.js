import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Snackbar } from "react-native-paper";

import AddScheduleList from "../components/schedule/AddScheduleList";
import { fetchSchedule } from "../util/http";

function TodayScreen({ courseSchedules, setCourseSchedules }) {
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

    function deleteScheduleHandler(id) {
        const scheduleToDelete = courseSchedules.find(schedule => schedule.id === id);
        if (scheduleToDelete) {
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

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.topNavigation}>
                    <Text style={styles.text}>오늘</Text>
                </View>
                <View style={styles.scheduleContainer}>
                    <FlatList
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
                        alwaysBounceVertical={false}>
                    </FlatList>
                </View>
            </View>
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
        </SafeAreaView>
    )
}

export default TodayScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topNavigation: {
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // #fafafa
    },
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    scheduleContainer: {
        flex: 1,
    },
});
