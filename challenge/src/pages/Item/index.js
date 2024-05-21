import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";



export default function Item() {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        
    }, []);



    return (
      <View>
        <Text> Page New Item</Text>
      </View>
    );
  }