import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/colors";

function ListScreen() {
    const navigation = useNavigation();

    function ProjectHandler() {
        navigation.navigate('Project', { headerShown: false });
      }
    

    function UpComingHandler() {
        navigation.navigate('다음');
    }

    function FilterAndLabelHandler() {
        navigation.navigate('MainOverview', {
            screen: '필터 & 라벨',
        });
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <View style={styles.list1}>
                    <View style={styles.listOption1}>
                        <TouchableOpacity onPress={UpComingHandler}>
                            <View style={styles.list1next}>
                                <AntDesign name="calendar" size={24} color={Colors.mainColor} />
                                <Text style={styles.listOption1Text}>다음</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={FilterAndLabelHandler}>
                        <View style={styles.list2next}>
                            <Image source={require('../assets/BottomTab/filter_label.png')} style={{ width: 24, height: 24 }} />
                            <Text style={styles.listOption1Text}>필터 & 라벨</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.projectButton}>
                    <TouchableOpacity onPress={ProjectHandler} style={styles.user}>
                        <Text>프로젝트</Text>
                        <AntDesign name="right" size={10} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bell}>
                        <AntDesign name="plus" size={20} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.setting}>
                        <AntDesign name="down" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.list1}>
                        <View style={styles.listOption1}>
                            <TouchableOpacity>
                                <View style={styles.list1next}>
                                    <Feather name="hash" size={24} color="gray" />
                                    <Text style={styles.listOption1Text}>자택</Text>
                                    <Feather name="home" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={ProjectHandler}>
                            <View style={styles.list2next}>
                                <SimpleLineIcons name="pencil" size={24} color="gray" />
                                <Text style={styles.listOption1Text}>프로젝트 관리</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f2',
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 'auto',
    },
    bell: {
        marginRight: 20,
    },
    setting: {
        marginRight: 10,
    },
    list1: {
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    list1next: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 5,
    },
    list2next: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 5,
    },
    listOption1: {
        borderBottomWidth: 1,
        color: 'black',
    },
    listOption1Text: {
        marginLeft: 10,
        fontSize: 16,
        textAlign: 'center'
    },
    listOption2: {
        color: 'black',
    },
    projectButton: {
        flexDirection: 'row',
        margin: 10,
    },
})