import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

let data = require("../../assets/data/products.json");

function ProductContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <Text>Product items</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          horizontal
          data={products}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Text>{item.brand}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProductContainer;
