import React  from "react";
import {View, Text,TouchableOpacity} from "react-native";
import { text, theme } from "../styles";


interface CompanyProps{
    id: number,
    razaoSocial: string,
    nomeFantasia: string,
    cnpj: string,
    endereco: string,
    numero: string,
    cidade: string,
    estado:string,
}


const CompanyCard: React.FC <CompanyProps>= ({id,razaoSocial,nomeFantasia,cnpj,endereco,numero,cidade,estado}) => {
   return(
    <TouchableOpacity  style = {theme.companyCard}>
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