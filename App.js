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
          statusBarColor: Platform.OS === 'android' ? '#f9f9f2' : undefined
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
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='General'
        component={General}
        options={{
          title: '일반',
        }}
      />
      <Stack.Screen
        name='Theme'
        component={Theme}
        options={{
          title: '테마',
        }}
      />
      <Stack.Screen
        name='AppIcon'
        component={AppIcon}
        options={{
          title: '앱 아이콘',
        }}
      />
      <Stack.Screen
        name='Navigation'
        component={Navigation}
        options={{
          title: '내비게이션',
        }}
      />
      <Stack.Screen
        name='QuickAdd'
        component={QuickAdd}
        options={{
          title: '빠른 추가',
        }}
      />
      <Stack.Screen
        name='Productivity2'
        component={Productivity2}
        options={{
          title: '생산성',
        }}
      />
      <Stack.Screen
        name='Alarm2'
        component={Alarm2}
        options={{
          title: '알림',
        }}
      />
      <Stack.Screen
        name='Siri'
        component={Siri}
        options={{
        }}
      />
      <Stack.Screen
        name='HelpAndFeedback'
        component={HelpAndFeedback}
        options={{
          title: '도움말 및 피드백',
        }}
      />
      <Stack.Screen
        name='Introduction'
        component={Introduction}
        options={{
          title: '소개',
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
          backgroundColor: 'rgb(242, 242, 242)'
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