import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Left, Right, Body, Thumbnail, ListItem, Text } from "native-base";

function CartItem(props) {
  const data = props.item.item.product;
  const [quantity, setQuantity] = useState(props.item.item.quantity);
  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.image
              ? data.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>$ {data.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  body: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
});

export default CartItem;
