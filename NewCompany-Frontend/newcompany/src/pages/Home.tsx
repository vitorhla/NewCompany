import React from 'react'
import { View,Text,TouchableOpacity, Image } from 'react-native';
import {theme} from '../styles';

 import mhome from '../assets/mhome.png';
const Home: React.FC =({navigation})=>{

    return(
        <View style = {theme.container}>
            <View style= {theme.card}>
            <Image source={mhome} style={theme.mhome}/>
            </View>

            

    
        </View>
    );



};


export default Home;