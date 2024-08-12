import React, { useState, useRef, useEffect } from "react";
import {
    Modal,
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { sendSchedule } from "../../util/http";

function ScheduleInput(props) {
    const [enteredScheduleText, setEnteredScheduleText] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const inputRef = useRef(null);

    const placeholders = [
        "예. 매일 아침 물 한 잔 마시기",
        "예. 매월 첫 째주 연말 정산하기",
        "예. 매주 수요일 산책로 걷기",
        "예. 매일 밤 10시 명상하기",
        "예. 매일 아침 8시 기상하기",
        "예. 저녁 9시부터 10시까지 책 읽기",
        "예. 내일 빨래 돌리기",
    ];

    useEffect(() => {
        setPlaceholder(placeholders[Math.floor(Math.random() * placeholders.length)]);
        if (props.visible) {
            const timer = setTimeout(() => {
                inputRef.current.focus();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [props.visible]);

    function inputScheduleHandler(enteredSchedule) {
        setEnteredScheduleText(enteredSchedule);
    }

    async function addScheduleHandler() {
        // DB 로 일정 값 보내기
        await sendSchedule(enteredScheduleText);
        props.onAddSchedule(enteredScheduleText);
        setEnteredScheduleText('');
    }

    function endScheduleAddButtonHandler() {
        props.offSchedule();
        setEnteredScheduleText('');
    }

    const isInputEmpty = enteredScheduleText.trim().length === 0;

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >
            <TouchableWithoutFeedback onPress={endScheduleAddButtonHandler}>
                <View style={styles.modalOverlay}>
                    <KeyboardAvoidingView
                        style={styles.container}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // 키보드가 올라올 때 키보드 영역까지 백그라운드 입힐 수 있도록.
                    >
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                <TextInput
                                    ref={inputRef}
                                    style={styles.titleInput}
                                    placeholder={placeholder}
                                    placeholderTextColor="silver"
                                    onChangeText={inputScheduleHandler}
                                    value={enteredScheduleText}
                                    keyboardAppearance="light"
                                />
                                <TextInput
                                    style={styles.explanationInput}
                                    placeholder="설명"
                                    placeholderTextColor="silver"
                                    keyboardAppearance="light"
                                />
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    keyboardShouldPersistTaps="handled"
                                >
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.button}>
                                            <Text>오늘</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button}>
                                            <Text>우선 순위</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button}>
                                            <Text>미리 알림</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button}>
                                            <Text>더보기</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                                <View style={styles.buttonContainer2}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text>관리함</Text>
                                    </TouchableOpacity>
                                    <Button
                                        title="일정 추가"
                                        onPress={addScheduleHandler}
                                        disabled={isInputEmpty}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback >
        </Modal >
    )
}

export default ScheduleInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // 모달 화면 외부 배경색
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end', // 하단 정렬
    },
    modalContainer: {
        backgroundColor: 'white', // 모달 화면 내부 배경색
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        elevation: 5,
        marginTop: 'auto'
    },
    titleInput: {
        width: '100%',
        color: 'black',
        fontSize: 20,
        marginHorizontal: 18,
        marginTop: 18,
    },
    explanationInput: {
        fontSize: 15,
        marginHorizontal: 18,
        marginTop: 8,
        marginBottom: 32
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 12,
        marginBottom: 12,
        padding: 6,
        borderWidth: 1,
        borderColor: 'silver'
    },
    buttonContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
        borderTopWidth: 1,
        borderColor: 'silver',
        paddingHorizontal: 18
    }
});
