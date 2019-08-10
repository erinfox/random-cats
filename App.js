import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function App() {
  handleClick = () => {
    // alert("Button clicked!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={this.handleClick}>
        <Text>Click for Cats</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 70,
    width: "80%",
    alignItems: "center",
    backgroundColor: "#FFB6C1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {}
});
