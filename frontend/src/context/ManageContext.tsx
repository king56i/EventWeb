import { createContext, useReducer, type ReactNode } from "react";
import Swal from "sweetalert2";
interface ManageContextType {
    checkBoxes: number[];
    dispatch: React.Dispatch<any>;
    handleSuccess:any
    handleEvsSuccess:any
}
interface ManageProviderProps {
    children: ReactNode;
}
const defaultContextValue: ManageContextType = {
    checkBoxes: [],
    dispatch: () => {},
    handleSuccess:()=>{},
    handleEvsSuccess:()=>{}
};
const reducer = (state:number[],action:{type:string,payload:number|number[]})=>{
    switch (action.type){
        case "add":
            return typeof action.payload==="number" ? [...state,action.payload] : state;
        case "remote":
            return typeof action.payload==="number" ?  state.filter(item=>item!== action.payload):state;
        case "addAll":
            return Array.isArray(action.payload) ? action.payload as number[]: state;
        case "removeAll":
            return [];
        default:
            return state;
    }
}
function handleSuccess(deletedId:number,res:{data:any},list:any,setList:any){
    setList(list.filter((item:any)=>  item.id !== deletedId));
    if (res.data.success) {
        Swal.fire({
            title: 'Success!',
            text: `${res.data.message}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
}
function handleEvsSuccess(deletedIds:number[],res:{data:any},list:any,setList:any){
    setList(list.filter((item:any)=> !deletedIds.includes(item.id)));
    if (res.data.success) {
        Swal.fire({
            title: 'Success!',
            text: `${res.data.message}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
}
const ManageContext = createContext<ManageContextType>(defaultContextValue);
const ManageProvider = ({children}:ManageProviderProps)=>{
    const [checkBoxes,dispatch] = useReducer(reducer,[]);
    return (
        <ManageContext.Provider value={{checkBoxes,dispatch,handleSuccess,handleEvsSuccess}}>
            {children}
        </ManageContext.Provider>

    )
}
export {ManageProvider,ManageContext}