import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
  Modal,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

var { width } = Dimensions.get("window");

function ListItem(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              underlayColor="#E8E8E8"
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                alignSelf: "flex-end",
                position: "absolute",
                top: 5,
                right: 10,
              }}
            >
              <Icon name="close" size={20} />
            </TouchableOpacity>
            <Button
              title="Edit"
              onPress={() => [
                props.navigation.navigate("ProductForm"),
                setModalVisible(false),
              ]}
            />
            <Button
              title="Delete"
              // Delete
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[
          styles.container,
          { backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro" },
        ]}
        onPress={() => {
          props.navigation.navigate("Product Detail");
        }}
        onLongPress={() => setModalVisible(true)}
      >
        <Image
          source={{
            uri: props.image
              ? props.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.item}>{props.brand}</Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {props.name}
        </Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {props.category.name}
        </Text>
        <Text style={styles.item}>$ {props.price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: width,
    padding: 5,
  },
  image: {
    borderRadius: 50,
    width: width / 6,
    margin: 2,
    height: 20,
  },
  item: {
    flexWrap: "wrap",
    width: width / 6,
    margin: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    borderRadius: 20,
    backgroundColor: "#000",
    margin: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ListItem;
