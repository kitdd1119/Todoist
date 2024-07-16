import { useState } from 'react';
import { Image, Platform, StyleSheet, View, TouchableOpacity, Linking, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Feather, AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';

import TodayScreen from './screens/TodayScreen';
import ManagementBoxScreen from "./screens/ManagementBoxScreen";
import SearchScreen from "./screens/SearchScreen";
import ListScreen from "./screens/ListScreen";
import FilterAndLabel from "./screens/FilterAndLabel";
import UpComing from "./screens/UpComing";
import Colors from './constants/colors';
import ScheduleInput from './components/schedule/ScheduleInput';
import ScheduleAddButton from './components/schedule/ScheduleAddButton';
import TopOption from './components/topOption/TopOption';
import ScheduleInformation from './components/ScheduleInformation/ScheduleInformation';
import SafeAreaView from './components/SafeAreaView/SafeAreaView';
import Productivity from './components/ListScreen/Productivity';
import Alarm from './components/ListScreen/Alarm';
import Setting from './components/ListScreen/Setting';
import Project from './components/ListScreen/Project';
import Account from './components/SettingView/Account';
import General from './components/SettingView/General';
import Theme from './components/SettingView/Theme';
import AppIcon from './components/SettingView/AppIcon';
import Navigation from './components/SettingView/Navigation';
import QuickAdd from './components/SettingView/QuickAdd';
import Productivity2 from './components/SettingView/Productivity2';
import Alarm2 from './components/SettingView/Alarm2';
import Siri from './components/SettingView/Siri';
import HelpAndFeedback from './components/SettingView/HelpAndFeedback';
import Introduction from './components/SettingView/Introduction';
import NewUpdate from './components/SettingView/NewUpdate';
import Synchronization from './components/SettingView/Synchronization';
import TabBar from './components/SettingView/Navigation/TabBar';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MainOverview() {
  const navigation = useNavigation();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseSchedules, setCourseSchedules] = useState([]);

  // 설정의 내비게이션에 따라 바텀 탭에 표시가 되고 안되고 설정할 수 있는 함수를 작성해야 함.
  // const navigationCheck = ;
  // const viewScreen = {{navigationCheck ? true : false}};
  const viewScreen = true;
  const noViewScreen = false;

  function startScheduleAddButtonHandler() {
    setModalIsVisible(true);
  }

  function endScheduleAddButtonHandler() {
    setModalIsVisible(false);
  }

  function addScheduleHandler(enteredScheduleText) {
    setCourseSchedules(currentCourseSchedules => [
      ...currentCourseSchedules,
      { text: enteredScheduleText, id: Math.random().toString() }
    ]);
  }

  function ProductivityHandler() {
    navigation.navigate('Productivity');
  }

  function AlarmHandler() {
    navigation.navigate('Alarm');
  }

  function SettingHandler() {
    navigation.navigate('SettingView', {
      screen: 'Setting',
    });
  }

  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#f9f9f2',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: Colors.mainColor,
        }}
      >
        <BottomTab.Screen
          name="오늘"
          options={{
            headerShown: true,
            headerTitle: () => null,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0, // iOS 그림자 제거
              elevation: 0, // Android 그림자 제거
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ marginRight: 20 }}>
                  <AntDesign name="warning" size={24} color={Colors.mainColor} />
                </View>
                <View>
                  <TopOption todayScreen={true} />
                </View>
              </View>
            ),
            tabBarLabel: '오늘',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused
                  ? require('./assets/BottomTab/Today2.png')
                  : require('./assets/BottomTab/Today.png')}
                style={{ width: 25, height: 25 }}
              />
            )
          }}
        >
          {() => (
            <SafeAreaView style={styles.screen}>
              <TodayScreen
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="관리함"
          options={{
            headerShown: true,
            headerTitle: () => null,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0, // iOS 그림자 제거
              elevation: 0, // Android 그림자 제거
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <View style={{ marginRight: 20 }}>
                  <AntDesign name="warning" size={24} color={Colors.mainColor} />
                </View>
                <View>
                  <TopOption todayScreen={false} />
                </View>
              </View>
            ),
            tabBarLabel: '관리함',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused
                  ? require('./assets/BottomTab/ManagementBox2.png')
                  : require('./assets/BottomTab/ManagementBox.png')}
                style={{ width: 25, height: 25 }}
              />
            )
          }}
        >
          {() => (
            <SafeAreaView style={styles.screen}>
              <ManagementBoxScreen
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="검색"
          options={{
            headerShown: true,
            headerTitle: () => null,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0, // iOS 그림자 제거
              elevation: 0, // Android 그림자 제거
            },
            tabBarLabel: '검색',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused
                  ? require('./assets/BottomTab/Search2.png')
                  : require('./assets/BottomTab/Search.png')}
                style={{ width: 25, height: 25 }}
              />
            )
          }}
        >
          {() => (
            <SafeAreaView style={styles.screen}>
              <SearchScreen
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="목록"
          options={{
            headerShown: true,
            headerTitle: () => null,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f9f9f2',
              borderBottomWidth: 0,
              shadowOpacity: 0, // iOS 그림자 제거
              elevation: 0, // Android 그림자 제거
            },
            headerLeft: () => (
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <TouchableOpacity
                  onPress={ProductivityHandler}
                >
                  <AntDesign name="user" size={24} color={Colors.mainColor} />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                >
                  <AntDesign name="warning" size={24} color={Colors.mainColor} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={AlarmHandler}
                  style={{ marginRight: 20 }}
                >
                  <Feather name="bell" size={24} color={Colors.mainColor} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={SettingHandler}
                  style={{ marginRight: 10 }}
                >
                  <Ionicons name="settings-outline" size={24} color={Colors.mainColor} />
                </TouchableOpacity>
              </View>
            ),
            tabBarLabel: '목록',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused
                  ? require('./assets/BottomTab/List2.png')
                  : require('./assets/BottomTab/List.png')}
                style={{ width: 25, height: 25 }}
              />
            )
          }}
        >
          {() => (
            <SafeAreaView style={styles.screen2}>
              <ListScreenView startScheduleAddButtonHandler={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        {noViewScreen && (<BottomTab.Screen
          name="다음"
          options={{
            headerTitleAlign: 'center',
            tabBarLabel: '다음',
            tabBarIcon: ({ focused }) => (
              <AntDesign name="calendar" size={25} color={focused ? Colors.mainColor : 'black'} />
            ),
            headerLeft: () => {
              {
                // 바텀 탭 내비게이션에 포함된 것이 아닌 목록 화면에서 클릭한 다음 화면일 경우 뒤로가기 버튼 생성
              }
            },
            headerRight: () => (
              <>
                {/* { 
                  pressed 
                    ? <TouchableOpacity>
                      <AntDesign name="warning" size={24} color={Colors.mainColor} />
                    </TouchableOpacity>
                    : undefined
                } */}
                <View style={{ flexDirection: 'row', margin: 10 }}>
                  <TouchableOpacity
                    style={{ marginRight: 20 }}
                  >
                    <AntDesign name="warning" size={24} color={Colors.mainColor} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 10 }}>
                    <SimpleLineIcons name="options" size={24} color={Colors.mainColor} />
                  </TouchableOpacity>
                </View>
              </>
            )
          }}
        >
          {() => (
            <SafeAreaView style={styles.screen}>
              <UpComing
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        )}
        {viewScreen && (<BottomTab.Screen
          name="필터 & 라벨"
          options={{
            headerShown: true,
            headerTitle: () => null,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              shadowOpacity: 0, // iOS 그림자 제거
              elevation: 0, // Android 그림자 제거
            },
            tabBarLabel: '필터 & 라벨',
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused
                  ? require('./assets/BottomTab/filter_label.png')
                  : require('./assets/BottomTab/Today.png')
                }
                style={{ width: 24, height: 24 }} />
            ),
            headerLeft: () => {
              {
                // 바텀 탭 내비게이션에 포함된 것이 아닌 목록 화면에서 클릭한 필터 & 라벨 화면일 경우 뒤로가기 버튼 생성
              }
            },
          }}
        >
          {() => (
            <SafeAreaView style={styles.screen}>
              <FilterAndLabel
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        )}
      </BottomTab.Navigator>
      <ScheduleInput
        visible={modalIsVisible}
        onAddSchedule={addScheduleHandler}
        offSchedule={endScheduleAddButtonHandler}
      />
    </>
  )
}

function ListScreenView({ startScheduleAddButtonHandler }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ListScreen'
        options={{
          headerShown: false,
          statusBarColor: Platform.OS === 'android' ? '#f9f9f2' : undefined
        }}
      >
        {() => (
          <>
            <ListScreen />
            <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
          </>
        )}
      </Stack.Screen>
      <Stack.Screen
        name='Productivity'
        component={Productivity}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='Alarm'
        component={Alarm}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='SettingView'
        component={SettingView}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='Project'
        component={Project}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  )
}

function NavigationView() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Navigation'
        component={Navigation}
        options={{
          title: '내비게이션',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerRight: () => (
            <TouchableOpacity>
              <Text style={{ color: Colors.mainColor, fontSize: 18 }}>편집</Text>
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name='TabBar'
        component={TabBar}
        options={{
          title: '탭바',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

function SettingView() {
  function link() {
    Linking.openURL('https://google.com');
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Setting'
        component={Setting}
        options={{
          title: '설정',
          headerShown: false,
          presentation: 'modal',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined
        }}
      />
      <Stack.Screen
        name='Account'
        component={Account}
        options={{
          title: '계정',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='General'
        component={General}
        options={{
          title: '일반',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Theme'
        component={Theme}
        options={{
          title: '테마',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerRight: () => (
            <TouchableOpacity onPress={link}>
              <Feather name="help-circle" size={24} color={Colors.mainColor} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name='AppIcon'
        component={AppIcon}
        options={{
          title: '앱 아이콘',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='NavigationView'
        component={NavigationView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='QuickAdd'
        component={QuickAdd}
        options={{
          title: '빠른 추가',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Productivity2'
        component={Productivity2}
        options={{
          title: '생산성',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Alarm2'
        component={Alarm2}
        options={{
          title: '알림',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Siri'
        component={Siri}
        options={{
          title: 'Siri',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='HelpAndFeedback'
        component={HelpAndFeedback}
        options={{
          title: '도움말 및 피드백',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Introduction'
        component={Introduction}
        options={{
          title: '소개',
          statusBarColor: Platform.OS === 'android' ? 'rgb(242, 242, 242)' : undefined,
          headerStyle: {
            backgroundColor: 'rgb(242, 242, 242)',
          },
          headerTintColor: Colors.mainColor,
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='NewUpdate'
        component={NewUpdate}
        options={{
          title: '새 업데이트',
        }}
      />
      <Stack.Screen
        name='Synchronization'
        component={Synchronization}
        options={{
          title: '동기화',
        }}
      />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MainOverview'
            component={MainOverview}
            options={{
              headerShown: false,
              statusBarStyle: Platform.OS === 'android' ? 'dark' : undefined
            }}
          />
          <Stack.Screen
            name="다음"
            options={{
              headerTitleAlign: 'center',
              tabBarLabel: '다음',
              tabBarIcon: ({ focused }) => (
                <AntDesign name="calendar" size={25} color={focused ? Colors.mainColor : 'black'} />
              ),
              headerLeft: () => {
                {
                  // 바텀 탭 내비게이션에 포함된 것이 아닌 목록 화면에서 클릭한 다음 화면일 경우 뒤로가기 버튼 생성
                }
              },
              headerRight: () => (
                <>
                  {/* { 
                  pressed 
                    ? <TouchableOpacity>
                      <AntDesign name="warning" size={24} color={Colors.mainColor} />
                    </TouchableOpacity>
                    : undefined
                } */}
                  <View style={{ flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity
                      style={{ marginRight: 20 }}
                    >
                      <AntDesign name="warning" size={24} color={Colors.mainColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 10 }}>
                      <SimpleLineIcons name="options" size={24} color={Colors.mainColor} />
                    </TouchableOpacity>
                  </View>
                </>
              )
            }}
          >
            {() => (
              <SafeAreaView style={styles.screen}>
                <UpComing
                  // courseSchedules={courseSchedules}
                  // setCourseSchedules={setCourseSchedules}
                />
                {/* <ScheduleAddButton onModal={startScheduleAddButtonHandler} /> */}
              </SafeAreaView>
            )}
          </Stack.Screen>
          <Stack.Screen
            name='ScheduleInformation'
            component={ScheduleInformation}
            options={{
              headerShown: false,
              presentation: 'modal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#f9f9f2',
  },
  TopOption: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 12 : 64,
    right: 10,
    zIndex: 1,
  },
});