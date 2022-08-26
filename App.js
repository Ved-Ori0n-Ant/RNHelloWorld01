import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App= () =>  {
  //const onPress = () => {
  //
  //}
  return (
   <View style = {styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="red"/>
    {/* <TouchableOpacity onPress = {onPress}> */}
    <TouchableOpacity>
      <Text style = {styles.textStyle}>
        Hello World
      </Text>
   </TouchableOpacity>
   </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textStyle: {
    margin: 50,
    justifyContent: 'center',
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000ff"
  },
  touchStyle: {
    opacity: 1
  }
}) 

export default App;
