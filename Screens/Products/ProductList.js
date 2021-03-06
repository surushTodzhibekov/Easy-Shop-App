import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import ProductCard from "./ProductCard";

var { width } = Dimensions.get("window");

function ProductList(props) {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={styles.container}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    backgroundColor: "gainsboro",
  },
});

export default ProductList;
