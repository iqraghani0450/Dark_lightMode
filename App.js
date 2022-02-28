import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function App() {
  const [boolean, tryBoolean] = useState(true);
  const changeBool = () => {if (boolean==true) {tryBoolean(false)} else {tryBoolean(true)}};
  return (
    <View style={boolean==true?styles.containerLight:styles.containerDark}>
      <Text style={boolean==true?styles.black:styles.white} >{boolean==true?"Enable":"Disable"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => changeBool()}><Text style={boolean==true?styles.black:styles.white}>{boolean==true?"Disable":"Enable"}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
  button: {
    height:"10%",
    width:"30%",
    margin: 100,
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
});
