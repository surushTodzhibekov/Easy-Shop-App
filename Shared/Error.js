import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Error(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.center}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    margin: 10,
  },
  center: {
    color: "red",
  },
});

export default Error;
