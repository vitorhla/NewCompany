import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () =>{
return(

  <View style = {styles.container}>

    <Text style = {styles.h1}>Teste</Text>
  </View>
)

};
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#069',
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  h1:{fontSize:20,
  fontWeight:"700",
  color:"#fff"




}
  });
export default App;