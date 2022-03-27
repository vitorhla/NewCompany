import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import {Home, Company, CompanyDetails} from "../pages";




const  Routes: React.FC = ()=>{

    return(
        <Stack.Navigator
        screenOptions={{
            headerTitle: "",
        }}
        >
        
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Company" component={Company}/>
        <Stack.Screen name = "CompanyDetails" component={CompanyDetails}/>
        
        </Stack.Navigator>

    );
};


export default Routes;