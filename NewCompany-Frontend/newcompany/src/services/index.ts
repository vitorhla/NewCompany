import axios from 'axios'

export const api = axios.create({
    baseURL:"http://localhost:8080",
});


export async function  createCompany(data:object){

const res = api.post(`/company`,data);

return res;
};
    

