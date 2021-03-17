import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import CartIcon from "../Shared/CartIcon";

const Tab = createBottomTabNavigator();

function Main(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              size={30}
              color={color}
              style={{ position: "relative" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon
                name="shopping-cart"
                color={color}
                size={30}
                style={{ position: "relative" }}
              />
              <CartIcon />
            </View>
          ),
        }}
      />
      {/** Admin */}
      <Tab.Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
        }}
      />
      {/** User */}
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
