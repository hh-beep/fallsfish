import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";





const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#DBE2D1",
  },
  ContainerText: {
    fontSize: 100,
    color: "#072D16",
    marginVertical: 50,
  }
})





const Home = () => {
  return (
    <ScrollView style={  style.Container  }>
      <Text style={  style.ContainerText  }>Home page!</Text>
      <Text style={  style.ContainerText  }>Home page!</Text>
      <Text style={  style.ContainerText  }>Home page!</Text>
      <Text style={  style.ContainerText  }>Home page!</Text>
      <Text style={  style.ContainerText  }>Home page!</Text>
    </ScrollView>
  )
}

export default Home;