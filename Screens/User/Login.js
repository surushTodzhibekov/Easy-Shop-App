import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";
import AuthGlobal from "../../Context/store/AuthGlobal";
import Error from "../../Shared/Error";
import { loginUser } from "../../Context/actions/Auth.actions";

function Login(props) {
  const context = useContext(AuthGlobal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (context.stateUser.isAuthenticated) {
      props.navigation.navigate("UserProfie");
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = { email, password };
    if (email === "") {
      setError("Please, fill email input");
    }
    if (password === "") {
      setError("Please, fill password input");
    } else {
      loginUser(user, context.dispatch);
    }
  };

  return (
    <FormContainer title="Login">
      {error ? <Error message={error} /> : null}
      <Input
        placeholder={"Enter Email"}
        name={"email"}
        id={"email"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {error ? <Error message={error} /> : null}
      <Input
        placeholder={"Enter password"}
        name={"password"}
        id={"password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        <Button title="Login" onPress={() => handleSubmit()} />
      </View>
      <View style={[styles.buttonGroup, { marginTop: 40 }]}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
        <Button
          title="Register"
          onPress={() => props.navigation.navigate("Register")}
        />
      </View>
    </FormContainer>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default Login;
