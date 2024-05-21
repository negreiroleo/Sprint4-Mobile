import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,  // Adiciona espaçamento vertical para uma melhor aparência
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  deleteItem: {
    marginRight: 10,  // Adiciona espaçamento entre o ícone e o texto
  },
  descriptionItem: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 50,
    color: "#282828b5",
  },
  buttonNewItem: {
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
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default styles;
