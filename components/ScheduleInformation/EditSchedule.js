import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import Calendars from "./Calendars";

function EditSchedule({ onCancel }) {
    const [modalIsVisible, setModalIsVisible] = useState('');
    const [calendarSelected, setCalendarSelected] = useState('');

    function offCalendarHandler() {
        setModalIsVisible(false);
    }

    function handleDayPress(day) {
        setCalendarSelected(day.dateString);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topButton}>
                <TouchableOpacity style={styles.horizontalAlignment}>
                    <Image source={require('../../assets/BottomTab/ManagementBox.png')} style={{ width: 16, height: 16 }} />
                    <Text style={styles.text}>관리함</Text>
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
                <Text>일정 제목</Text>
            </View>
            <View>
                <Calendars
                    visible={modalIsVisible}
                    selectedDate={calendarSelected}
                    onDayPress={handleDayPress}
                    offCalender={offCalendarHandler}
                />
            </View>
            <View>
                <Text>우선 순위</Text>
            </View>
            <View>
                <Text>라벨, 미리 알림 등 편집 기능 버튼</Text>
            </View>
            <View>
                <Text>하위 작업 추가 및 댓글 작성란</Text>
            </View>
        </View>
    )
}

export default EditSchedule;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
    },
    topButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    horizontalAlignment: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginHorizontal: 5,
        fontSize: 18,
        textAlign: 'center'
    },
    option: {
        right: 10,
    }
});