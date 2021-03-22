import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Button,
} from "react-native";
import { Left, Right, Container, Thumbnail, ListItem, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";

var { height, width } = Dimensions.get("window");

function Confirm(props) {
  const confirmOrder = () => {
    setTimeout(() => {
      props.clearCart(), props.navigation.navigate("Cart");
    }, 500);
  };

  const confirm = props.route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {confirm ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping To:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {confirm.order.order.ShippingAddress1}</Text>
              <Text>Address2: {confirm.order.order.ShippingAddress2}</Text>
              <Text>City: {confirm.order.order.City}</Text>
              <Text>Zip Code: {confirm.order.order.zip}</Text>
              <Text>Country: {confirm.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {confirm.order.order.orderItems.map((x) => {
              return (
                <ListItem style={styles.listItem} key={x.product.name} avatar>
                  <Left>
                    <Thumbnail source={{ uri: x.product.image }} />
                  </Left>
                  <Body style={styles.body}>
                    <Left>
                      <Text>{x.product.name}</Text>
                    </Left>
                    <Right>
                      <Text>${x.product.price}</Text>
                    </Right>
                  </Body>
                </ListItem>
              );
            })}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title="Place order" onPress={confirmOrder} />
        </View>
      </View>
    </ScrollView>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  container: {
    height: height,
    alignContent: "center",
    padding: 8,
    backgroundColor: "#fff",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 8,
    alignSelf: "center",
  },
  listItem: {
    width: width / 1.4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  body: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default connect(null, mapDispatchToProps)(Confirm);
