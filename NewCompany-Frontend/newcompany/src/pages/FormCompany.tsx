import React,{useState} from "react";
import {View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    Alert,
    ActivityIndicator} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { theme,text } from "../styles";
import { useNavigation } from "@react-navigation/native";
import Company from "./Company";
import { api, createCompany } from "../services";

interface FormProductProps{

}

const FormCompany: React.FC<FormProductProps> = (props)=>{
    
    const navigation = useNavigation();
    const[loading,setLoading] = useState(false);
    const[edit,setEdit] = useState(false);

    const[company,setCompany] = useState({
        
        razaoSocial: "",
        nomeFantasia: "",
        cnpj: "",
        endereco: "",
        numero: "",
        cidade: "",
        estado: "",
    });

        function handleSave(){
            setLoading(true);
            const data = {
                ... company
            };

            console.warn(data);
            try{
                 createCompany(data);
                console.warn('produto salvo')
            }catch(res){
                console.warn('erro ao salvar');
            }
            setLoading(false);
        };

     





    return(

        <View style = {theme.formContainer}>
                {loading? (<ActivityIndicator size="large"/>
                ) :(  
                    
                    <View style = {theme.formCard0}>
                    <View style = {theme.formCard1}>
                    <TouchableOpacity onPress = {()=> navigation.goBack()}> 
                    <Text style = {theme.goBackTextform} >VOLTAR</Text>
                    </TouchableOpacity>

                    <View style = {theme.formCard2}>
                    
                    <TextInput 
                    placeholder="Razao social"  
                    style={theme.formInput}
                    value = {company.razaoSocial}
                    onChangeText={(e)=>setCompany({... company, razaoSocial:e})}
                    />

                    <TextInput 
                    placeholder="Nome Fantasia" 
                    style={theme.formInput}
                    value = {company.nomeFantasia}
                    onChangeText={(e)=>setCompany({... company, nomeFantasia:e})}
                    />

                    <TextInput 
                    placeholder="CNPJ" 
                    style={theme.formInput}
                    value = {company.cnpj}
                    onChangeText={(e)=>setCompany({... company, cnpj:e})}
                    />

                    <TextInput
                     placeholder="Endereco"
                      style={theme.formInput}
                      value = {company.endereco}
                      onChangeText={(e)=>setCompany({... company, endereco:e})}
                      />

                        <TextInput
                     placeholder="Numero"
                      style={theme.formInput}
                      value = {company.numero}
                      onChangeText={(e)=>setCompany({... company, numero:e})}
                      />

                    <TextInput
                     placeholder="Cidade" 
                     style={theme.formInput}
                     value = {company.cidade}
                      onChangeText={(e)=>setCompany({... company, cidade:e})}
                     />

                    <TextInput 
                    placeholder="Estado" 
                    style={theme.formInput} 
                    value = {company.estado}
                      onChangeText={(e)=>setCompany({... company, estado:e})}
                     />

                   <View style = {theme.butonform}>

                   <TouchableOpacity style = {theme.cancelform}   onPress={() => navigation.navigate("Company")}>
                        <Text style = {text.cancelform}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style = {theme.saveform}
                     onPress = {()=>handleSave()} 
                     
                     >
                        <Text style = {text.saveform} >Salvar</Text>
                    </TouchableOpacity>



                    </View>

                </View>



                    </View>


                   
                    </View>


               

            
                )}





            
        </View>
    )



}




export default FormCompany;