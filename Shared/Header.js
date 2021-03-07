import React from "react";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";

function Header(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
    //marginTop: 80, // need to delete
  },
});

export default Header;
