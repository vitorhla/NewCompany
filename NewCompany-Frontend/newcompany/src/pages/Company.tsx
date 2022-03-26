import React from 'react'
import { ScrollView } from 'react-native';
import {CardCompany} from '../components';
import {theme} from "../styles";

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
                name: "empresa A",
                cnpj: "45.856.587/0001-58",
                },
                {
                    id: 5,
                    name: "empresa A",
                    cnpj: "45.856.587/0001-58",
                    },
                    {
                        id: 6,
                        name: "empresa A",
                        cnpj: "45.856.587/0001-58",
                        },
                        {
                            id: 7,
                            name: "empresa A",
                            cnpj: "45.856.587/0001-58",
                            },
                            {
                                id: 8,
                                name: "empresa A",
                                cnpj: "45.856.587/0001-58",
                                },
                                {
                                    id: 9,
                                    name: "empresa A",
                                    cnpj: "45.856.587/0001-58",
                                    },
                                    {
                                        id: 10,
                                        name: "empresa A",
                                        cnpj: "45.856.587/0001-58",
                                        },
                                        {
                                            id: 11,
                                            name: "empresa A",
                                            cnpj: "45.856.587/0001-58",
                                            },
                                            {
                                                id: 12,
                                                name: "empresa A",
                                                cnpj: "45.856.587/0001-58",
                                                },
                                                {
                                                    id: 13,
                                                    name: "empresa A",
                                                    cnpj: "45.856.587/0001-58",
                                                    },
                                                    {
                                                        id: 14,
                                                        name: "empresa A",
                                                        cnpj: "45.856.587/0001-58",
                                                        },
                                                        {
                                                            id: 15,
                                                            name: "empresa A",
                                                            cnpj: "45.856.587/0001-58",
                                                            },
                                                            {
                                                                id: 16,
                                                                name: "empresa A",
                                                                cnpj: "45.856.587/0001-58",
                                                                },
                                                                {
                                                                    id: 17,
                                                                    name: "empresa A",
                                                                    cnpj: "45.856.587/0001-58",
                                                                    },
                                                                    {
                                                                        id: 18,
                                                                        name: "empresa A",
                                                                        cnpj: "45.856.587/0001-58",
                                                                        },
                                                                        {
                                                                            id: 19,
                                                                            name: "empresa A",
                                                                            cnpj: "45.856.587/0001-58",
                                                                            },
                                                                            {
                                                                                id: 20,
                                                                                name: "empresa A",
                                                                                cnpj: "45.856.587/0001-58",
                                                                                },
];




const Company: React.FC =()=>{

    return(
        <ScrollView contentContainerStyle = {theme.scrollContainer}>
            {companys.map(companys => (
                    <CardCompany {... companys}/>

                    
                ))}
        </ScrollView>

    );



};


export default Company;