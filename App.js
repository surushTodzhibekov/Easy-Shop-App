import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./Navigators/Main";

import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
