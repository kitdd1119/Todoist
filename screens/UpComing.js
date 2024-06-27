import { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Agenda } from "react-native-calendars";

function UpComing() {
    const [selected, setSelected] = useState('');
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        // 이 함수 안에 
        const newItems = {};
        for (let i = -15; i < 15; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
                newItems[strTime] = [];
                const numItems = Math.floor(Math.random() * 3 + 1);
                for (let j = 0; j < numItems; j++) {
                    newItems[strTime].push({
                        name: `일정 ${strTime} #${j}`,
                        height: Math.max(50, Math.floor(Math.random() * 150)),
                    });
                }
            }
        }
        setItems(newItems);
    };

    function minDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const renderItem = (item) => {
        return (
            <View style={[styles.item, { height: item.height }]}>
                <Text>{item.name}</Text>
            </View>
        );
    };

    useEffect(() => {
        const today = new Date();
        loadItems({ timestamp: today.getTime() });
    }, []);

    return (
        <Agenda
            // // Agenda에 표시할 항목들의 목록. 날짜 키가 빈 배열인 경우, 해당 날짜가 비어있는 것으로 간주됨.
            items={items}

            // 특정 월의 항목을 로드해야 할 때 호출되는 콜백 함수.
            loadItemsForMonth={loadItems}

            // // 날짜를 눌렀을 때 호출되는 콜백 함수.
            onDayPress={day => {
                setSelected(day.dateString);
            }}

            // 일정 항목이 있는 날짜 마크.
            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
            }}

            // // 처음 선택된 날짜.
            selected={timeToString(new Date().getTime())}

            // 선택할 수 있는 최소 날짜.
            minDate={minDate()}

            // 과거로 스크롤할 수 있는 최대 월 수.
            pastScrollRange={0}

            // 각 항목이 어떻게 렌더링될 것인지 지정.
            renderItem={renderItem}

            // // 각 날짜가 어떻게 렌더링될지를 지정. item이 첫 번째 항목이 아닌 경우 day는 undefined일 수 있음.
            // renderDay={{

            // }}

            // // 항목이 없는 빈 날짜의 내용을 어떻게 렌더링할 것인지 지정.
            // renderEmptyDate={{

            // }}

            // // 커스텀 구현된 컴포넌트로 내부 목록을 덮어씀.
            // renderList={{

            // }}

            // 손잡이 커스텀 렌더링. (높이를 설정해도 손잡이가 올라가지 않음.)
            // renderKnob={}

            // 손잡이가 항상 보이도록.
            showClosingKnob={true}

            // Agenda 달력의 테마 지정.
            // theme={{
            //     agendaDayTextColor: 'green',
            //     backgroundColor: 'red'
            // }}

            // Agenda 컨테이너 스타일 지정.
            style={styles.calendarContainer}
        />
    )
}

export default UpComing;

const styles = StyleSheet.create({
    calendarContainer: {
        height: 500, // 달력의 높이를 설정
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
});

