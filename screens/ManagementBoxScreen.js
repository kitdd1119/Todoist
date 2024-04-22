// ManagementBoxScreen.js
import { StyleSheet, View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TopOption from "../components/TopOption";
import AddScheduleList from "../components/AddScheduleList";

function ManagementBoxScreen({ courseSchedules, setCourseSchedules }) {

    function deleteScheduleHandler(id) {
        setCourseSchedules((currentCourseSchedules) => {
            return currentCourseSchedules.filter((schedule) => schedule.id !== id);
        });
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.topNavigation}>
                    <View style={styles.optionContainer}>
                        <TopOption />
                    </View>
                    <Text style={styles.text}>관리함</Text>
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

export default ManagementBoxScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topNavigation: {
        borderBottomWidth: 2,
        borderBottomColor: '#fafafa',
    },
    optionContainer: {
        margin: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
});
