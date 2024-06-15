import { useState } from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import TodayScreen from './screens/TodayScreen';
import ManagementBoxScreen from "./screens/ManagementBoxScreen";
import SearchScreen from "./screens/SearchScreen";
import ListScreen from "./screens/ListScreen";
import Colors from './constants/colors';
import ScheduleInput from './components/schedule/ScheduleInput';
import ScheduleAddButton from './components/schedule/ScheduleAddButton';
import TopOption from './components/topOption/TopOption';
import ScheduleInformation from './screens/ScheduleInformation';
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

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function MainOverview() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseSchedules, setCourseSchedules] = useState([]);

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
          name="오늘 화면"
          options={{
            headerShown: false,
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
              <View style={styles.TopOption}>
                <TopOption todayScreen={true} />
              </View>
              <TodayScreen
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="관리함 화면"
          options={{
            headerShown: false,
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
              <View style={styles.TopOption}>
                <TopOption todayScreen={false} />
              </View>
              <ManagementBoxScreen
                courseSchedules={courseSchedules}
                setCourseSchedules={setCourseSchedules}
              />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="검색 화면"
          options={{
            headerShown: false,
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
          name="목록 화면"
          options={{
            headerShown: false,
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
              <ListScreenView />
              <ScheduleAddButton onModal={startScheduleAddButtonHandler} />
            </SafeAreaView>
          )}
        </BottomTab.Screen>
      </BottomTab.Navigator>
      <ScheduleInput
        visible={modalIsVisible}
        onAddSchedule={addScheduleHandler}
        offSchedule={endScheduleAddButtonHandler}
      />
    </>
  )
}

function ListScreenView() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ListScreen'
        component={ListScreen}
        options={{
          headerShown: false,
        }}
      />
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

function SettingView() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='설정'
        component={Setting}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name='계정'
        component={Account}
      />
      <Stack.Screen 
        name='일반'
        component={General}
      />
      <Stack.Screen 
        name='테마'
        component={Theme}
      />
      <Stack.Screen 
        name='앱 아이콘'
        component={AppIcon}
      />
      <Stack.Screen 
        name='내비게이션'
        component={Navigation}
      />
      <Stack.Screen 
        name='빠른 추가'
        component={QuickAdd}
      />
      <Stack.Screen 
        name='생산성'
        component={Productivity2}
      />
      <Stack.Screen 
        name='알림'
        component={Alarm2}
      />
      <Stack.Screen 
        name='Siri'
        component={Siri}
      />
      <Stack.Screen 
        name='도움말 및 피드백'
        component={HelpAndFeedback}
      />
      <Stack.Screen 
        name='소개'
        component={Introduction}
      />
      <Stack.Screen 
        name='새 업데이트'
        component={NewUpdate}
      />
      <Stack.Screen 
        name='동기화'
        component={Synchronization}
      />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style='black' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MainOverview'
            component={MainOverview}
            options={{
              headerShown: false
            }}
          />
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
    top: Platform.OS === 'android' ? 48 : 64,
    right: 10,
    zIndex: 1,
  },
});