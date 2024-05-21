import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { database } from "../../config/firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";
import styles from "./style";

export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idItem = route.params.id;

    const editItem = async () => {
        try {
            const itemRef = doc(database, "item", idItem);
            await updateDoc(itemRef, {
                description: descriptionEdit,
            });
            console.log("Item atualizado com sucesso!");
            navigation.navigate("Item");
        } catch (error) {
            console.error("Erro ao atualizar item:", error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Adicione um Item"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.buttonNewItem}
                onPress={editItem}
            >
                <FontAwesome name="save" size={16} color="white" />
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
