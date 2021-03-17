import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  Container,
  Right,
  Left,
  Thumbnail,
  H1,
  Body,
  ListItem,
  Text,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";

import * as actions from "../../Redux/Actions/cartActions";
import CartItem from "./CartItem";

var { width, heigth } = Dimensions.get("window");

function Cart(props) {
  var total = 0;
  props.cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });
  return (
    <>
      {props.cartItems.length > 0 ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
          <SwipeListView
            data={props.cartItems}
            keyExtractor={(item, index) => index._id}
            renderItem={(data) => <CartItem item={data} />}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  onPress={() => props.removeFromCart(data.item)}
                  style={styles.hiddenButton}
                >
                  <Icon name="trash" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            rightOpenValue={-75}
            stopLeftSwipe={75}
          />
          <View style={styles.bottomContainer}>
            <Left>
              <Text style={styles.price}>$ {total}</Text>
            </Left>
            <Right>
              <Button title="Clear" onPress={() => props.clearCart()} />
            </Right>
            <Right>
              <Button
                title="Checkout"
                onPress={() => props.navigation.navigate("Checkout")}
              />
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>You product cart is empty</Text>
          <Text>Add product to your cart to get started</Text>
        </Container>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    height: heigth,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
  },
  price: {
    fontSize: 18,
    color: "red",
    margin: 20,
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
