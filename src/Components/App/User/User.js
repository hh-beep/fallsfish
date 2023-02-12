import React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";





const style = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
  },
  ContainerText: {
    fontSize: 30,
    color: "#072D16"
  }
})





const User = () => {
  return (
    <View style={  style.Container  }>
      <Text style={  style.ContainerText  }>User page!</Text>
    </View>
  )
}

export default User;