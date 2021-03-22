import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import {
  Container,
  Content,
  Radio,
  ListItem,
  Text,
  Right,
  Left,
  Picker,
  Header,
  Icon,
  Body,
  Title,
} from "native-base";

const methods = [
  { name: "Cash on Delivery", value: 1 },
  { name: "Bank on Transfer", value: 2 },
  { name: "Card on Payment", value: 3 },
];

const paymentMethod = [
  { name: "Wallet", value: 1 },
  { name: "Visa", value: 2 },
  { name: "Mastercard", value: 3 },
  { name: "Other", value: 4 },
];

function Payment(props) {
  const order = props.route.params;
  const [selected, setSelected] = useState();
  const [card, setCard] = useState();

  return (
    <Container>
      <Header>
        <Title>Choose your payment method</Title>
      </Header>
      <Content>
        {methods.map((item, index) => {
          return (
            <ListItem key={item.name} onPress={() => setSelected(item.value)}>
              <Left>
                <Text>{item.name}</Text>
              </Left>
              <Right>
                <Radio selected={selected == item.value} />
              </Right>
            </ListItem>
          );
        })}
        {selected == 3 ? (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            headerStyle={{ backgroundColor: "orange" }}
            headerBackButtonTextStyle={{ color: "#fff" }}
            headerTitleStyle={{ color: "#fff" }}
            selectedValue={card}
            onValueChange={(e) => setCard(e)}
          >
            {paymentMethod.map((c, index) => {
              return <Picker.Item key={c.name} label={c.name} value={c.name} />;
            })}
          </Picker>
        ) : null}
        <View style={{ marginTop: 60, alignSelf: "center" }}>
          <Button
            title="Confirm"
            onPress={() =>
              props.navigation.navigate("Confirm", { order: order })
            }
          />
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Payment;
