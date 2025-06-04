import axios from "axios"

const apiGet = async ({url,options}:{url:string,options?:object})=>{
    try{
        const response = await axios.get(url,{...options});
        return response;
    }catch(error){
        console.log("Lỗi api khi Get",error);
    }
}
const apiPost = async ({url,data}:{url:string,data?:any})=>{
    try{
        const response = await axios.post(url,data);
        return response;
    }catch(error){
        console.log("Lỗi api khi Post",error);
    }
}
const apiDelete = async ({url,data}:{url:string,data?:any})=>{
    try{
        const response = await axios.delete(url,data);
        return response;
    }catch(error){
        console.log("Lỗi api khi Delete",error);
    }
}
const apiPut = async ({url,data}:{url:string,data?:any})=>{
    try{
        const response = await axios.put(url,data);
        return response;
    }catch(error){
        console.log("Lỗi api khi Put",error);
    }
}
export {apiGet,apiDelete,apiPost,apiPut}