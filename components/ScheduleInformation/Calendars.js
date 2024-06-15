import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { Calendar } from "react-native-calendars";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

import SafeAreaView from "../SafeAreaView/SafeAreaView";

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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Modalize
                ref={modalizeRef}
                snapPoint={600}
                onClose={props.offCalendar}
                modalStyle={styles.modalStyle}
                overlayStyle={styles.overlayStyle}
                withHandle={true}
                handleStyle={{ marginTop: 20, backgroundColor: 'silver' }}
                closeOnOverlayTap={true}
            >
                <SafeAreaView style={styles.screen}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalOverlay}>
                            <Calendar
                                onDayPress={props.onDayPress}
                                markedDates={{
                                    [props.selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Text>asdasd</Text>
                    </View>
                </SafeAreaView>
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
});