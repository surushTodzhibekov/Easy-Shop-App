import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Button } from "react-native";
import { Container } from "native-base";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import baseURL from "../../assets/common/baseUrl";
import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";

function UserProfile(props) {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    if (
      context.stateUser.isAuthenticated === false ||
      context.stateUser.isAuthenticated === null
    ) {
      props.navigation.navigate("Login");
    }

    AsyncStorage.getItem("jwt")
      .then((res) => {
        // making API call to get users
        axios
          .get(`${baseURL}users/${context.stateUser.user.userId}`, {
            // Pass authorization token to make this call because goals is backend
            headers: { Authorization: `Bearer ${res}` },
          })
          .then((user) => {
            setUserProfile(user.data);
          });
      })
      .catch((error) => console.log(error));

    return () => {
      setUserProfile();
    };
  }, [context.stateUser.isAuthenticated]);

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <Text style={{ fontSize: 30, color: "#000" }}>
          {userProfile ? userProfile.name : ""}
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ margin: 10 }}>
            Email: {userProfile ? userProfile.email : ""}
          </Text>
          <Text style={{ margin: 10 }}>
            Phone: {userProfile ? userProfile.phone : ""}
          </Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <Button
            title="Sign Out"
            onPress={() => [
              AsyncStorage.removeItem("jwt"),
              logoutUser(context.dispatch),
            ]}
          />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default UserProfile;
