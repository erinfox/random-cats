import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";

class App extends Component {
  state = {
    gif: undefined
  };

  // pull out api call
  // allow people to pick category
  // make cat default

  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV&tag=cat&rating=PG"
    )
      .then(response => response.json())
      .then(result => {
        this.setState({gif: result.data.image_url});
      })
      .catch(error => console.log(error));
  }

  handleClick = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV&tag=cat&rating=PG"
    )
      .then(response => response.json())
      .then(result => {
        this.setState({gif: result.data.image_url});
      })
      .catch(error => console.log(error));
  };

  render() {
    const {gif} = this.state;
    console.log(gif);
    return (
      <View style={styles.container}>
        {gif && (
          <Image
            style={styles.image}
            source={{
              uri: gif
            }}
          />
        )}

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={this.handleClick}>
          <Text style={styles.text}>Click for Cats</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  image: {
    height: 380,
    width: 380,
    marginBottom: 50,
    borderRadius: 10
  }
});

export default App;

// 1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV
// https://developers.giphy.com/explorer
