import React  from "react";
import {View, Text,TouchableOpacity,Image} from "react-native";
import { text, theme } from "../styles";

import {useNavigation} from "@react-navigation/native";
import { CompanyDetails } from "../pages";
import logoCompany from "../assets/logocompany.png";

interface CompanyProps{
    id: Number,
    razaoSocial: String,
    nomeFantasia: String,
    cnpj: String,
    endereco: String,
    numero: String,
    cidade: String,
    estado: String,
}


const CompanyCard: React.FC <CompanyProps>= ({id,razaoSocial,nomeFantasia,cnpj,endereco,numero,cidade,estado}) => {
    const navigation = useNavigation();
   return(
    <TouchableOpacity  style = {theme.companyCard} onPress={() => navigation.navigate("CompanyDetails"as never,{id} as never)}>
          <View style = {theme.companyImageContainer}>
                            <Image source={logoCompany} style={theme.mhome} />
                        </View>
        <View  style = {theme.companyDescription}> 
        
            <Text style = {text.companyName}> {razaoSocial} </Text>

            <View>
                <Text style = {text.companycnpj}> Cnpj: {cnpj}</Text>
            </View>

        </View>
        
    </TouchableOpacity>
    )
};

export default CompanyCard;