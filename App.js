import  * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from "./screens/Feed";
import CreateStory from './screens/CreateStory';
import {createBottomTabNavigator} from "@react-navigation/bootm-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
    screenOption={({route})=>({
      tabBarIcon:({focused,color,size})=>{
        let iconName;
        if(route.name === 'Feed'){
          iconName = focused ? 'book' : 'book-outline';
        }else{
          iconName = focused ? 'create' : 'create-outline';
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      }
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name ="Feed" component={Feed} options={{headerShown:false}}/>
      <Tab.Screen name ="CreateStory" component={CreateStory}/>
      
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
