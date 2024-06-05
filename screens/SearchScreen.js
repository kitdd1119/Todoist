import { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    TextInput, 
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { Snackbar } from "react-native-paper";

import AddScheduleList from "../components/schedule/AddScheduleList";

function SearchScreen({ courseSchedules, setCourseSchedules }) {

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
                <KeyboardAvoidingView 
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : null}
                    // 안드로이드에서 하단 네비게이션이 키보드 위로 올라오는 문제 해결해야 함.
                >
                    <View style={styles.topNavigation}>
                        <Text style={styles.text}>검색</Text>
                        <TextInput
                            placeholder="작업, 프로젝트, 및 기타"
                            style={styles.searchContainer}
                        />
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
                </KeyboardAvoidingView>
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

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topNavigation: {
        marginTop: 28,
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // #fafafa
    },
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchContainer: {
        fontSize: 16,
        marginHorizontal: 12,
        padding: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    scheduleContainer: {
        flex: 1,
    },
});