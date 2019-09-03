import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Picker
} from "react-native";

class App extends Component {
  state = {
    imageUrl: undefined,
    tag: "cat"
  };

  fetchGif = () => {
    const API = `https://api.giphy.com/v1/gifs/random?api_key=1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV&tag=${this.state.tag}&rating=PG`;

    fetch(API)
      .then(response => response.json())
      .then(result => {
        console.log({state: this.state});
        this.setState(state => ({...state, imageUrl: result.data.image_url}));
      })
      .catch(error => console.log(error));
  };

  // first mounted
  componentDidMount() {
    this.fetchGif();
  }

  // when state changes
  componentDidUpdate(_, prevState) {
    if (prevState.tag !== this.state.tag) {
      this.fetchGif();
    }
  }

  handleClick = () => {
    this.fetchGif();
  };

  render() {
    const {imageUrl, tag} = this.state;
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

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={this.handleClick}>
          <Text style={styles.text}>New GIF Please</Text>
        </TouchableOpacity>
        <Picker
          style={styles.picker}
          selectedValue={tag}
          onValueChange={(itemValue, itemIndex) =>
            this.setState(state => ({...state, tag: itemValue}))
          }>
          <Picker.Item label="Cats" value="cat" />
          <Picker.Item label="Dogs" value="dog" />
          <Picker.Item label="Bunnies" value="bunny" />
        </Picker>
      </View>
    );
  }
}

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
    backgroundColor: "#FFB6C1",
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

export default App;
