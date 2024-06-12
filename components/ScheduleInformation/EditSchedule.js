import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, AntDesign, SimpleLineIcons, Entypo, Octicons, FontAwesome } from '@expo/vector-icons';

import Calendars from "./Calendars";

function EditSchedule({ onCancel, text }) {
    const [modalIsVisible, setModalIsVisible] = useState('');
    const [calendarSelected, setCalendarSelected] = useState('');

    function onCalendarHandler() {
        setModalIsVisible(true);
    }

    function offCalendarHandler() {
        setModalIsVisible(false);
    }

    function handleDayPress(day) {
        setCalendarSelected(day.dateString);
    }

    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.topButton}>
                        <TouchableOpacity style={styles.horizontalAlignment}>
                            <Image source={require('../../assets/BottomTab/ManagementBox.png')} style={{ width: 16, height: 16 }} />
                            <Text style={styles.topText}>관리함</Text>
                            <AntDesign name="right" size={10} color="black" />
                        </TouchableOpacity>
                        <View style={styles.horizontalAlignment}>
                            <TouchableOpacity style={styles.option}>
                                <SimpleLineIcons name="options" size={18} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onCancel}>
                                <MaterialIcons name="cancel" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.scheduleTitle}>{text}</Text>
                    </View>
                    <TouchableOpacity onPress={onCalendarHandler}>
                        <View style={styles.calendarButton}>
                            <Text style={styles.calendarText}>캘린더 표시</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.priorityText}>우선 순위</Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.functionButtonContainer}>
                            <TouchableOpacity style={styles.functionButton}>
                                <MaterialIcons name="label" size={24} />
                                <Text style={styles.functionButtonText}>라벨</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.functionButton}>
                                <Entypo name="stopwatch" size={24} />
                                <Text style={styles.functionButtonText}>미리 알림</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.functionButton}>
                                <Octicons name="location" size={24} />
                                <Text style={styles.functionButtonText}>위치</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.functionButton}>
                                <Entypo name="text" size={24} />
                                <Text style={styles.functionButtonText}>설명</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.functionButton}>
                                <FontAwesome name="indent" size={24} />
                                <Text style={styles.functionButtonText}>이동</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <TouchableOpacity style={styles.subSchedule}>
                        <Text>하위 작업 추가 및 댓글 작성란</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.commentInput}>
                        <Text>댓글</Text>
                        <TouchableOpacity>
                            <SimpleLineIcons name="paper-clip" size={20} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Calendars
                visible={modalIsVisible}
                selectedDate={calendarSelected}
                onDayPress={handleDayPress}
                offCalender={offCalendarHandler}
            />
        </>
    )
}

export default EditSchedule;

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        paddingHorizontal: 18,
        borderColor: 'silver',
        borderBottomWidth: 6,
    },
    topButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    horizontalAlignment: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topText: {
        marginHorizontal: 5,
        fontSize: 18,
        textAlign: 'center'
    },
    option: {
        right: 10,
    },
    scheduleTitle: {
        fontSize: 24,
        marginBottom: 10,
    },
    calendarButton: {
        borderColor: 'silver',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    calendarText: {
        fontSize: 20,
    },
    priorityText: {
        fontSize: 20,
        marginBottom: 20
    },
    functionButtonContainer: {
        flexDirection: 'row',
    },
    functionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 8,
        marginRight: 20,
        marginBottom: 18,
    },
    functionButtonText: {
        marginLeft: 6,
        fontSize: 16
    },
    subSchedule: {
        padding: 12,
    },
    commentInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 20,
        marginHorizontal: 18,
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center'
    },
});