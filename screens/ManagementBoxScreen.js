import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Snackbar } from "react-native-paper";

import AddScheduleList from "../components/schedule/AddScheduleList";

function ManagementBoxScreen({ courseSchedules, setCourseSchedules }) {

    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [deletedSchedule, setDeletedSchedule] = useState(null);

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
        <>
            <View style={styles.container}>
                <View style={styles.topNavigation}>
                    <Text style={styles.text}>관리함</Text>
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
                        <Text style={{ color: '#fff' }}>실행 취소 을 완료했습니다.</Text>
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