import React, {useState} from "react";
import { useNavigation,useRoute } from "@react-navigation/native";

import {View,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { nav } from "../styles";




const NavBar: React.FC = () =>{
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any){
        if(path){
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }


    return(
        <TouchableOpacity activeOpacity={0.8} style={nav.drawer}> 
            <Text  style={nav.drawer} onPress={() => navigation.navigate("Home")} >HOME</Text>
            <Text style={nav.drawer}  onPress={() => navigation.navigate("Cadastro")} >CADASTRO</Text>

            
        </TouchableOpacity>


    );
};


export default NavBar;