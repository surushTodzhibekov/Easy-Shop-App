import React from "react";
import { View, StyleSheet } from "react-native";
import { Badge, Text } from "native-base";
import { connect } from "react-redux";

function CartIcon(props) {
  return (
    <>
      {props.cartItems.length ? (
        <Badge style={styles.badge}>
          <Text style={styles.text}>{props.cartItems.length}</Text>
        </Badge>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  badge: {
    flex: 1,
    width: 25,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: -4,
    right: -15,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    width: 100,
  },
});

export default connect(mapStateToProps)(CartIcon);
