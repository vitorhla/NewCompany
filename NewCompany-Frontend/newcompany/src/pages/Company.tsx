import React,{useState,useEffect}from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import {theme} from "../styles";
import {CompanyCard, SearchInput} from '../components'
import { api } from "../services";

const Company: React.FC =()=>{
    const [search,setSearch] = useState("");
    const [companys, setCompanys] = useState([]);
    const [loading,setLoading] = useState(false);

    async function fillCompanys(){
        setLoading(true)
        const res = await api.get(`/company?page=0&linesPerPage=12&direction=ASC&orderBy=razaoSocial`);
        setCompanys(res.data.content);
        setLoading(false);
    }

    useEffect(()=>{
        fillCompanys();
    },[]);



    const data = 
        search.length > 0
        ?   companys.filter((companys) =>
                companys.razaoSocial.toLowerCase().includes(search.toLowerCase())
            ) 
        : companys;


        return(
        <ScrollView contentContainerStyle = {theme.scrollContainer}>

            <SearchInput placeholder = "Nome da Empresa" search={search} /*falta so esse*/ setSearch={setSearch}/>
            
            {  loading ?( 
                 <ActivityIndicator size= "large"/>
                 ):
            
            (data.map( (companys) => (
                  <CompanyCard { ... companys} key={companys.id}/>
                  )))}
           
        </ScrollView>

    );



};


export default Company;