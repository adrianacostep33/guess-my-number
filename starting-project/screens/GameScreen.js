import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";

const GameScreen = ({}) => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher ot lower?</Text>
        {/* + - */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12,
  },
});
