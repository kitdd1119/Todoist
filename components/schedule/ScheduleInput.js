import React, { useState, useRef } from "react";
import {
    Modal,
    StyleSheet,
    TextInput,
    View,
    Button,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from "react-native";
import { sendSchedule } from "../../util/http";

function ScheduleInput(props) {
    const [enteredScheduleText, setEnteredScheduleText] = useState('');
    const inputRef = useRef(null);

    function inputScheduleHandler(enteredSchedule) {
        setEnteredScheduleText(enteredSchedule);
    }

    async function addScheduleHandler() {
        // DB 로 일정 값 보내기
        // app.js에서 일정 값을 보내야 할 수도 있음.
        await sendSchedule(enteredScheduleText);
        props.onAddSchedule(enteredScheduleText);
        setEnteredScheduleText('');
    }

    function endScheduleAddButtonHandler() {
        props.offSchedule();
        setEnteredScheduleText('');
    }

    function keyboardViewHandler() {
        inputRef.current.focus();
    }

    const isInputEmpty = enteredScheduleText.trim().length === 0;

    return (
        <Modal visible={props.visible} animationType="slide" transparent={true} onShow={keyboardViewHandler}>
            <TouchableWithoutFeedback onPress={endScheduleAddButtonHandler}>
                <View style={styles.modalOverlay}>
                    <KeyboardAvoidingView style={styles.container}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback>
                                <View>
                                    <TextInput
                                        ref={inputRef}
                                        style={styles.textInput}
                                        placeholder="예. 매일 오후 8시에 책 읽기"
                                        onChangeText={inputScheduleHandler}
                                        value={enteredScheduleText}
                                    />
                                    <View style={styles.buttonContainer}>
                                        <Button 
                                            title="일정 추가" 
                                            onPress={addScheduleHandler} 
                                            disabled={isInputEmpty}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ScheduleInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContainer: {
        marginTop: 'auto',
        backgroundColor: 'white',
        padding: 20,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        elevation: 5,
    },
    textInput: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        opacity: 0.5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});
