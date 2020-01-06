import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Picker } from "react-native";
import { AccessibleButton } from "./accessibility";
import { bold } from "ansi-colors";

const AppWithHooks = props => {
  const [tag, setTag] = useState("cat");
  const [imageUrl, setImageUrl] = useState(undefined);

  const fetchGif = () => {
    const API = `https://api.giphy.com/v1/gifs/random?api_key=1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV&tag=${tag}&rating=PG`;

    fetch(API)
      .then(response => response.json())
      .then(result => setImageUrl(result.data.image_url))
      // .then(result => result.data.title)
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchGif();
  }, [tag]);

  return (
    <View style={styles.container}>
      <Text accessible accessibilityRole={"header"} style={styles.header}>
        RANDOM GIF APP
      </Text>
      {imageUrl && (
        <Image
          accessible
          accessibilityLabel="Random cat, dog or bunny gif"
          accessibilityRole="image"
          style={styles.image}
          source={{
            uri: imageUrl
          }}
        />
      )}
      <AccessibleButton
        role={"button"}
        label="Press me for a new gif"
        hint="A new gif will show on every press"
        activeOpacity={0.5}
        style={styles.button}
        onPress={() => fetchGif()}
      >
        <Text accessibilityRole={"text"} style={styles.text}>
          New GIF Please
        </Text>
      </AccessibleButton>
      <Picker
        accessible
        accessibilityLabel="Select a new animal gif"
        accessibilityHint="Press and scroll to select"
        accessibilityRole="none"
        style={styles.picker}
        selectedValue={tag}
        onValueChange={itemValue => setTag(itemValue)}
      >
        <Picker.Item label="Cats" value="cat" />
        <Picker.Item label="Dogs" value="dog" />
        <Picker.Item label="Bunnies" value="bunny" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 30,
    height: 70,
    justifyContent: "center",
    marginBottom: 20,
    width: "70%"
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  header: {
    color: "#395D33",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 20
  },
  image: {
    borderRadius: 10,
    height: 380,
    marginBottom: 20,
    width: 380
  },
  picker: {
    height: 40,
    width: "50%"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default AppWithHooks;
