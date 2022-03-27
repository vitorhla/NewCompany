import React, { useState,useEffect } from "react";

import logoCompany from "../assets/logocompany.png";
import { View,Text,ActivityIndicator,Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {api} from "../services";
import {theme, text} from "../styles";

import { useNavigation } from "@react-navigation/native";

const CompanyDetails = (
    
    {
    route:{
        params: {id},
    },
}

) => {

    const navigation = useNavigation();

    const [company,setCompany] = useState({
        id: null,
        razaoSocial: null,
        nomeFantasia: null,
        cnpj: null,
        endereco: null,
        numero: null,
        cidade: null,
        estado: null,
    });
    const[loading,setLoading] = useState(false);

    async function loadCompanyData(){
        setLoading(true);
        const res = await api.get(`company/${id}`);
        setCompany(res.data);
        setLoading(false);
    }

    useEffect(()=>{
        loadCompanyData();
    },[])


 return (
    <View style = {theme.detailContainer}>
        {loading ? <ActivityIndicator size= "large"/> : (
            <View style = {theme.detailCard}>

                    <TouchableOpacity  style = {theme.goBackList} onPress = {()=> navigation.goBack()}>  
                            <Text style = {text.goBackText}> Voltar</Text>
                    </TouchableOpacity> 

                        <View style = {theme.companyImageContainer}>
                            <Image source={logoCompany} style={theme.mhome} />
                        </View>


                    <View>
                            <Text style = {text.companySocial}> Razão Social: {company.razaoSocial} </Text>
                            <Text style = {text.companyFantasia}> Nome Fantasia:{company.nomeFantasia} </Text>
                            <Text > CNPJ: {company.cnpj} </Text>
                    </View>

                    <View>
                            <Text > Rua: {company.endereco} </Text>
                            <Text > Numero: {company.numero} </Text>
                            <Text > Cidade: {company.cidade} </Text>
                            <Text > Estado: {company.estado} </Text>
                    </View>
                    <TouchableOpacity  style = {theme.goBackList}>  
                            <Text style = {text.goBackText}> Editar</Text>
                    </TouchableOpacity> 


            </View>)
        }
        
    </View>
 );

};


export default CompanyDetails;