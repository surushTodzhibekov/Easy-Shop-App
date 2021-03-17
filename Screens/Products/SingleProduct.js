import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Button,
} from "react-native";
import { Container, Left, Right, H1 } from "native-base";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

function SingleProduct(props) {
  const [item, setItem] = useState(props.route.params.item);
  const [availability, setAvailability] = useState(null);

  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.image
                ? item.image
                : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
            }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.name}</H1>
          <Text style={styles.contentText}>{item.brand}</Text>
        </View>
        {/** TODO: description, Rich Description, availability */}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.price}>{item.price}</Text>
        </Left>
        <Right>
          <Button title="Add" onPress={() => props.addItemToCart(item)} />
        </Right>
      </View>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  imageContainer: {
    backgroundColor: "white",
    margin: 0,
    padding: 0,
  },
  image: {
    width: "100%",
    height: 250,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
  },
  price: {
    fontSize: 24,
    color: "red",
    margin: 20,
  },
});

export default connect(null, mapDispatchToProps)(SingleProduct);
