import React from "react"
import { ScrollView } from "react-native";
import {theme} from "../styles";
import {CompanyCard, SearchInput} from '../components'

const companys = [
    {
    id: 1,
    name: "COCA COLA DO BRASIL",
    cnpj: "45.856.587/0001-58",
    },
    {
        id: 2,
        name: "AMBEV CERVEJARIA",
        cnpj: "45.856.587/0001-58",
        },
        {
            id: 3,
            name: "COMPANIA DE BEBIDA DAS AMERICAS",
            cnpj: "45.856.587/0001-58",
            },
            {
                id: 4,
                name: "PNEUBRAS  BRASIL",
                cnpj: "45.856.587/0001-58",
                },
                {
                    id: 5,
                    name: "VITARELLA ",
                    cnpj: "45.856.587/0001-58",
                    },
                
                    {
                        id: 6,
                        name: "ARMANDO NOGUEIRA",
                        cnpj: "45.856.587/0001-58",
                        },
                
                        {
                            id: 7,
                            name: "SKOL PUROMALTE",
                            cnpj: "45.856.587/0001-58",
                            },
                
                            {
                                id: 8,
                                name: "NEW YORK SA",
                                cnpj: "45.856.587/0001-58",
                                },
                                
                
];




const Company: React.FC =()=>{

    return(
        <ScrollView contentContainerStyle = {theme.scrollContainer}>

            <SearchInput/>
            {companys.map(companys => (
                  <CompanyCard { ... companys} />

                    
                ))}
           
        </ScrollView>

    );



};


export default Company;