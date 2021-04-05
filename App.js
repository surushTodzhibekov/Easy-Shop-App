import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

import Main from "./Navigators/Main";
import Header from "./Shared/Header";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
import Auth from "./Context/store/Auth";

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
