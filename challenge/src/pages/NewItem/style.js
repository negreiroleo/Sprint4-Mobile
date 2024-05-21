import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    label: {
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#82B9EC",
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#82B9EC",
        marginLeft: "auto",
        marginRight: "auto",
    },
    buttonNewItem: {
        width: "60%",
        position: "absolute",
        bottom: 30,
        left: 20,
        width: 60,
        height: 60,
        backgroundColor: "#82B9EC",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    iconButton: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
    },
});

export default styles;
