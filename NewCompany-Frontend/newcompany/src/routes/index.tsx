import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, Company, CompanyDetails, } from "../pages";
import { colors, nav } from "../styles";
import {Text} from "react-native";
import {NavBar} from "../components";
import FormCompany from "../pages/FormCompany";



const HeaderText: React.FC = ()=> <Text style = {nav.leftText}   > New Company</Text>



const Stack = createNativeStackNavigator();
const  Routes: React.FC = ()=>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerTitle: "",
            headerStyle:{
                backgroundColor: colors.primary
            },
            headerLeft: () => <HeaderText/>,
            headerRight: () => <NavBar/>,
            
        }}
        >
        
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Company" component={Company}/>
        <Stack.Screen name = "CompanyDetails" component={CompanyDetails}/> 
        <Stack.Screen name = "Cadastro" component={FormCompany}/>
        </Stack.Navigator>

    );
};


export default Routes;