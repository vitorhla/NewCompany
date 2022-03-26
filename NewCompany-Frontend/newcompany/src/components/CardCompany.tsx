import React  from 'react'

import {View, Text,TouchableOpacity} from "react-native";
import { text, theme } from '../styles';

interface CompanyProps{
    id: number;
    name: String;
    cnpj: String;
}

const CardCompany: React.FC <CompanyProps>= ( {id,name,cnpj}) => {

    return(
    <TouchableOpacity  style = {theme.companyCard}>
        <View  style = {theme.companyDescription}> 
            <Text style = {text.companyName}> {name} </Text>
            <View>
                <Text style = {text.companycnpj}> Cnpj: {cnpj}</Text>
            </View>

        </View>
        
    </TouchableOpacity>
    );
};


export default CardCompany