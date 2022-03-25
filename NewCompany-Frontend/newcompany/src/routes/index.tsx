import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import {Home, Company} from '../pages'




const  Routes: React.FC = ()=>{

    return(
        <Stack.Navigator>
        
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Company" component={Company}/>

        
        </Stack.Navigator>

    );
};


export default Routes;