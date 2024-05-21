import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";
import { database } from "../../config/firebaseconfig";
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

export default function Item({ navigation }) {
  const [item, setItem] = useState([]);

  async function deleteItem(id) {
    try {
      console.log(`Trying to delete document with id ${id}`);
      const itemRef = doc(database, "item", id);
      await deleteDoc(itemRef);
      console.log(`Document with id ${id} deleted`);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, "item"), (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setItem(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                style={styles.deleteItem}
                onPress={() => deleteItem(item.id)}
              >
                <FontAwesome
                  name="star"
                  size={23}
                  color="#82B9EC"
                />
              </TouchableOpacity>
              <Text
                style={styles.descriptionItem}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  });
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewItem}
        onPress={() => navigation.navigate('NewItem')}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
