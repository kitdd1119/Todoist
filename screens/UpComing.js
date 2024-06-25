import { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Agenda } from "react-native-calendars";

function UpComing() {
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
            items={items}
            loadItemsForMonth={loadItems}
            selected={timeToString(new Date().getTime())}
            renderItem={renderItem}
        />
    )
}

export default UpComing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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