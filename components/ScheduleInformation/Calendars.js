import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

function Calendars(props) {
    const modalizeRef = useRef(null);

    useEffect(() => {
        if (props.visible) {
            modalizeRef.current?.open();
        } else {
            modalizeRef.current?.close();
        }
    }, [props.visible]);

    return (
        <GestureHandlerRootView>
            <Modalize
                ref={modalizeRef}
                snapPoint={600}
                modalStyle={styles.modalStyle}
                overlayStyle={styles.overlayStyle}
                handlePosition="inside"
                handleStyle={{ backgroundColor: 'silver' }}
                closeOnOverlayTap={true}
                panGestureComponentEnabled={true}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.topButtonContainer}>
                        <TouchableOpacity onPress={props.offCalender}>
                            <Text>취소</Text>
                        </TouchableOpacity>
                        <Text>일정</Text>
                        <TouchableOpacity onPress={props.offCalender}>
                            <Text>완료</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Calendar
                            onDayPress={props.onDayPress}
                            markedDates={{
                                [props.selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                            }}
                        />
                    </View>
                </View>
                <View>
                    <Text>asdasd</Text>
                </View>
            </Modalize>
        </GestureHandlerRootView>
    )
}

export default Calendars;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
    },
    modalStyle: {
        padding: 20,
    },
    overlayStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 모달 배경 색상 설정
    },
    topButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    }
});