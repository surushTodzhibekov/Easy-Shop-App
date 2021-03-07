import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Container, Icon, Input, Item, Header } from "native-base";

import ProductList from "./ProductList";
import SearchedProducts from "./SearchedProducts";

let data = require("../../assets/data/products.json");

function ProductContainer(props) {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFocus(false);
    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFocus();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="md-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus == true ? <Icon name="ios-close" onPress={onBlur} /> : null}
        </Item>
      </Header>
      {focus == true ? (
        <SearchedProducts productsFiltered={productsFiltered} />
      ) : (
        <View style={styles.container}>
          <Text>Product items</Text>
          <View style={styles.listContainer}>
            <FlatList
              data={products}
              numColumns={2}
              keyExtractor={(item) => item.brand}
              renderItem={({ item }) => (
                <ProductList key={item.brand} item={item} />
              )}
            />
          </View>
        </View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default ProductContainer;
