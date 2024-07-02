import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from '@expo/vector-icons';
import { Snackbar } from "react-native-paper";

import AddScheduleList from "../components/schedule/AddScheduleList";

function SearchScreen({ courseSchedules, setCourseSchedules }) {
    const navigation = useNavigation();

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

    function todayScreenHandler() {
        navigation.navigate('MainOverview', {
            screen: 'TodayScreen',
        });
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
                        <View style={styles.textInputContainer}>
                            <EvilIcons name="search" size={24} color="gray" />
                            <TextInput
                                placeholder="작업, 프로젝트, 및 기타"
                                style={styles.searchContainer}
                            />
                        </View>
                    </View>
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
        flex: 1,
        maxHeight: Platform.OS === 'android' ? 110 : 100,
        marginTop: 28,
        borderBottomWidth: 1,
        borderBottomColor: 'gray', // #fafafa
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 5,
        marginHorizontal: 12,
        marginVertical: 20,
    },
    searchContainer: {
        flex: 1,
        fontSize: 16,
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