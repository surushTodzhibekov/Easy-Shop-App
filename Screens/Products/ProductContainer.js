import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ProductList from "./ProductList";

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
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductList key={item.id} item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProductContainer;
