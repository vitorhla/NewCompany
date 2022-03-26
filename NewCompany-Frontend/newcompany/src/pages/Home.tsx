import React from 'react'
import { View,Text,TouchableOpacity, Image } from 'react-native';
import {text, theme} from '../styles';

 import mhome from '../assets/mhome.png';
 import arrow from '../assets/arrow.png';
 import { useNavigation } from '@react-navigation/native';
const Home: React.FC =({})=>{
    const navigation =  useNavigation();

    return(
        <View style = {theme.container}>

            <View style= {theme.card}>
                <Image source={mhome} style={theme.mhome}/>
            

                <View style={theme.textContainer}>
                    <Text style = {text.bold}>Conheça as melhores empresas</Text>
                    <Text style = {text.regular}>  Ajudaremos você a encontrar as melhores empresa disponíveis no mercado   </Text>
                </View>
                            <TouchableOpacity 
                            style = {theme.primaryButton} 
                            activeOpacity ={0.8}
                            onPress={() => navigation.navigate("Company")}>
                                 <Text style={text.primaryText}>CLIQUE PARA INICIAR </Text>
                                <View style={theme.arrowContainer}>
                                    <Image source = {arrow} />
                                </View>
                             </TouchableOpacity>
            

            
            </View>
        </View>


    
      
    );



};


export default Home;