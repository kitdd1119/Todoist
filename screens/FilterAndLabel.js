import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

function FilterAndLabel() {
    const navigation = useNavigation();
    const [Expand, Collapse] = useState(true);
    const [Expand2, Collapse2] = useState(true);

    function handleScroll(event) {
        const scrollY = event.nativeEvent.contentOffset.y;
        if (scrollY <= 40) { // 스크롤 위치가 50 이상이면 헤더 타이틀을 표시
            navigation.setOptions({ headerTitle: '' });
        } else {
            navigation.setOptions({ headerTitle: '필터 & 라벨' });
        }
    }

    return (
        <>
            <ScrollView onScroll={handleScroll} style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.topNavigation}>
                        <Text style={styles.text}>필터 & 라벨</Text>
                    </View>
                    <View style={styles.filterAndLabelContainer}>
                        <View style={styles.filterAndLabelFunctionButton}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Pressable
                                    onPress={() => { Collapse(!Expand) }}
                                    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>필터</Text>
                                        <Text
                                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', paddingVertical: 3, paddingHorizontal: 2, fontSize: 12 }}>사용량: {'/3'}</Text>
                                    </View>
                                    <View>
                                        {Expand
                                            ? <AntDesign name="down" size={18} color="black" />
                                            : <AntDesign name="right" size={18} color="black" />
                                        }
                                    </View>
                                </Pressable>
                                <Pressable style={{ marginHorizontal: 10 }}>
                                    <AntDesign name="plus" size={18} color="black" />
                                </Pressable>
                            </View>
                            {Expand && (
                                <>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                        <MaterialCommunityIcons name="water-outline" size={24} color="black" />
                                        <Text style={{ marginHorizontal: 6, fontSize: 16 }}>할당된 사람: { }</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                        <MaterialCommunityIcons name="water-outline" size={24} color="black" />
                                        <Text style={{ marginHorizontal: 6, fontSize: 16 }}>우선 순위 { }</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    </View>
                    <View style={styles.filterAndLabelContainer}>
                        <View style={styles.filterAndLabelFunctionButton}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                                <Pressable
                                    onPress={() => { Collapse2(!Expand2) }}
                                    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>라벨</Text>
                                    </View>
                                    <View>
                                        {Expand2
                                            ? <AntDesign name="down" size={18} color="black" />
                                            : <AntDesign name="right" size={18} color="black" />
                                        }
                                    </View>
                                </Pressable>
                                <Pressable style={{ marginHorizontal: 10 }}>
                                    <AntDesign name="plus" size={18} color="black" />
                                </Pressable>
                            </View>
                            {Expand2 && (
                                <>
                                    <TouchableOpacity
                                        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
                                    >
                                        <Feather name="tag" size={24} color="black" style={{ transform: [{ scaleX: -1 }] }} />
                                        <Text style={{ marginHorizontal: 6, fontSize: 16 }}>읽기</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default FilterAndLabel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topNavigation: {
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    },
    text: {
        margin: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    filterAndLabelContainer: {
        marginHorizontal: 10,
        marginTop: 10,
    },
    filterAndLabelFunctionButton: {
        flexDirection: 'column',
    }
});