import { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Agenda } from "react-native-calendars";

const weekdayNames = ['일', '월', '화', '수', '목', '금', '토'];

function UpComing() {
    const today = new Date();
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            const newItems = {};
            for (let i = 0; i < 30; i++) {
                const time = new Date(day.timestamp + i * 24 * 60 * 60 * 1000);
                const strTime = time.toISOString().split('T')[0];
                if (!newItems[strTime]) {
                    newItems[strTime] = [];
                    newItems[strTime].push({
                        name: `Item for ${strTime}`,
                        height: Math.max(50, Math.floor(Math.random() * 150)),
                    });
                }
            }
            setItems(newItems);
        }, 1000);
    };

    function minDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const renderItem = (item) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    );

    const renderDay = (day, item) => {
        if (!day) {
            return <View style={styles.emptyDay} />;
        }
        const dayString = `${day.day}.일 - ${weekdayNames[day.weekday]}`;
        const isOddMonth = day.month % 2 !== 0;
        const backgroundColor = isOddMonth ? 'rgba(0, 0, 0, 0.1)' : 'white';
        const isFirstDayOfMonth = day.day === 1;
        return (
            <View style={[styles.day, { backgroundColor }]}>
                {isFirstDayOfMonth && <Text style={styles.monthText}>{day.month}월</Text>}
                <Text style={styles.dayText}>{dayString}</Text>
            </View>
        );
    };

    const rowHasChanged = (r1, r2) => r1.name !== r2.name;

    const handleDayPress = (day) => {
        const selectedDate = new Date(day.year, day.month - 1, day.day);
        if (selectedDate < today) {
            return;
        }
        // Handle day press logic here
    };

    return (
        <Agenda
            items={items}
            loadItemsForMonth={loadItems}
            selected={today}
            renderItem={renderItem}
            renderDay={renderDay}
            rowHasChanged={rowHasChanged}
            minDate={minDate()}
            pastScrollRange={1}
            futureScrollRange={12}
            onDayPress={handleDayPress}
            showClosingKnob={true}
            theme={{
                agendaDayTextColor: 'transparent',
                agendaDayNumColor: 'transparent',
                agendaTodayColor: 'blue',
                agendaKnobColor: 'gray',
            }}
        />
    );
};


export default UpComing;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    day: {
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17,
    },
    dayText: {
        fontSize: 16,
    },
    monthText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    emptyDay: {
        height: 15,
        flex: 1,
        paddingTop: 30,
    },
});