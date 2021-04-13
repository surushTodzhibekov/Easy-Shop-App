import React, { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import { Header, Input, Item } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";

import baseURL from "../../assets/common/baseUrl";
import ListItem from "./ListItem";

var { height, width } = Dimensions.get("window");

const ListHeader = () => {
  return (
    <View elevation={1} style={styles.listHeader}>
      <View style={styles.listItem}></View>
      <View style={styles.listItem}>
        <Text style={{ fontWeight: "bold" }}>Brand</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={{ fontWeight: "bold" }}>Name</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={{ fontWeight: "bold" }}>Category</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={{ fontWeight: "bold" }}>Price</Text>
      </View>
    </View>
  );
};

function Products(props) {
  const [productList, setProductList] = useState();
  const [productFilter, setProductFilter] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);

  //Now that we have our variables set, we can have our API call to the
  //server so we can get our data and
  useFocusEffect(
    useCallback(() => {
      // Get Token
      AsyncStorage.getItem("jwt")
        .then((res) => {
          setToken(res);
        })
        .catch((error) => console.log(error));
      // Another API call
      axios.get(`${baseURL}products`).then((res) => {
        setProductList(res.data);
        setProductFilter(res.data);
        setLoading(false);
      });

      return () => {
        setProductList();
        setProductFilter();
        setLoading(true);
      };
    }, [])
  );

  // Searching
  const searchProduct = (text) => {
    if (text == "") {
      setProductFilter(productList);
    }
    setProductFilter(
      productList.filter((i) =>
        i.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Header searchBar rounded>
          <Item style={{ padding: 5 }}>
            <Icon name="search" />
            <Input
              placeholder="Search"
              onChangeText={(text) => searchProduct(text)}
            />
          </Item>
        </Header>
      </View>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={productFilter}
          ListHeaderComponent={ListHeader}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ListItem {...item} navigation={props.navigation} index={index} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  listHeader: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "gainsboro",
  },
  listItem: {
    margin: 3,
    width: width / 6,
  },
  spinner: {
    height: height / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Products;
