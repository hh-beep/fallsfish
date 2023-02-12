/*  Basics Imports */
import React, {
  useState,
  useEffect
} from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';

/*  Async Storage */
import AsyncStorage from '@react-native-async-storage/async-storage';

/*  Image  */
const Logo =  require("../../Images/Logo.png");





const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCEB"
  },
  ContainerImage: {
    height: 300,
    width: 300,
  }
})





const Load = ({  navigation: {  navigate  }  }) => {


  useEffect(() => {
    async function detectFirstTime() {
      var firstVar = await AsyncStorage.getItem("isFirstTime")

      if (firstVar !== null) {
        //await AsyncStorage.removeItem("isFirstTime") 
        navigate("AppRoutes")
      }
      else {
        await AsyncStorage.setItem("isFirstTime", "нет")     
        navigate("First")
      }
    }


    detectFirstTime()
  }, [])


  return (
    <View style={  style.Container  }>
      <Image source={  Logo  } style={  style.ContainerImage  }/>
    </View>
  )
}

export default Load;