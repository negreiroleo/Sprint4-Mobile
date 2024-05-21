import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Item from "./src/pages/Item/";
import NewItem from "./src/pages/NewItem";
import Details from "./src/pages/Details";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Item">
        <Stack.Screen 
        name="Item" 
        component={Item} 
        options={{
          headerTintColor: '#82B9EC',
        }}
        />
        <Stack.Screen 
        name="NewItem" 
        component={NewItem} 
        options={{
          headerTintColor: '#82B9EC',
        }}
        />
        <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{
          headerTintColor: '#82B9EC',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}