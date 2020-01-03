import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Picker } from "react-native";
import { AccessibleButton } from "./accessibility";

const AppWithHooks = props => {
  // default state values, setState names
  const [tag, setTag] = useState("cat");
  const [imageUrl, setImageUrl] = useState(undefined);

  const fetchGif = () => {
    const API = `https://api.giphy.com/v1/gifs/random?api_key=1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV&tag=${tag}&rating=PG`;

    fetch(API)
      .then(response => response.json())
      .then(result => setImageUrl(result.data.image_url))
      .catch(error => console.log(error));
  };

  // doing all the things (lifecycle methods)
  // 1st parameter is inital render
  // array is setting the state when tag changes
  useEffect(() => {
    fetchGif();
  }, [tag]);

  return (
    <View style={styles.container}>
      {imageUrl && (
        <Image
          style={styles.image}
          source={{
            uri: imageUrl
          }}
        />
      )}

      <AccessibleButton
        label="Tap me!"
        hint="Clicks for a new gif"
        activeOpacity={0.5}
        style={styles.button}
        onPress={() => fetchGif()}
      >
        <Text style={styles.text}>New GIF Please</Text>
      </AccessibleButton>
      <Picker
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    height: 70,
    width: "80%",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  image: {
    height: 380,
    width: 380,
    marginBottom: 20,
    borderRadius: 10
  },
  picker: {
    height: 50,
    width: "75%"
  }
});

export default AppWithHooks;
