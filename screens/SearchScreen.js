import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AddScheduleList from "../components/AddScheduleList";

function SearchScreen({ courseSchedules, setCourseSchedules }) {

    function deleteScheduleHandler(id) {
        setCourseSchedules((currentCourseSchedules) => {
            return currentCourseSchedules.filter((schedule) => schedule.id !== id);
        });
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.topNavigation}>
                    <Text style={styles.text}>검색</Text>
                </View>
                <View style={styles.scheduleContainer}>
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
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topNavigation: {
        marginTop: 38,
        borderBottomWidth: 2,
        borderBottomColor: '#fafafa',
    },
    text: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    scheduleContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
})