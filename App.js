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
              <ListScreen />
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
          <Stack.Screen
            name='Productivity'
            component={Productivity}
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
    top: Platform.OS === 'android' ? 32 : 64,
    right: 10,
    zIndex: 1,
  },
});