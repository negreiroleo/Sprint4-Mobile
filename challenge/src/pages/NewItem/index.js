import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { database } from "../../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function NewItem({ navigation }) {
    const [description, setDescription] = useState(null);

    const addItem = async () => {
        console.log("Tentando adicionar item:", description);
        
        if (!description || description.trim() === "") {
            console.warn("Por favor, insira uma descrição.");
            return;
        }

        try {
            console.log("Tentando acessar coleção 'item'...");
            const itemCollection = collection(database, "item");

            console.log("Adicionando item ao banco de dados...");
            const newItemRef = await addDoc(itemCollection, {
                description: description,
                status: false,
            });

            console.log("Item adicionado com sucesso! Document ID:", newItemRef.id);
            navigation.navigate("Item");
        } catch (error) {
            console.error("Erro ao adicionar item:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Adicione um Item"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.buttonNewItem}
                onPress={addItem}
            >
                <FontAwesome name="save" size={16} color="white" />
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}
