import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "../Screens/Admin/Categories";
import Products from "../Screens/Admin/Products";
import Orders from "../Screens/Admin/Orders";
import ProductForm from "../Screens/Admin/ProductForm";

const Stack = createStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ title: "Products" }}
      />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ProductForm" component={ProductForm} />
    </Stack.Navigator>
  );
};

export default function AdminNavigator() {
  return <AdminStack />;
}
