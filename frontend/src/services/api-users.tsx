import type { UserInputs } from "@src/types/formsType";
import { apiDelete, apiGet, apiPost, apiPut } from "./api-action";
import Swal from "sweetalert2";

const UserServices ={
    getUsers: async ()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/users`,options:{}});
    },
    updateUser:async ({id,data}:{id:number,data:UserInputs})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/users/${id}`,data});
    },
    addUser:async (data:UserInputs)=>{
        return await apiPost({url:`http://localhost:8000/api/admin/users`,data});
    },
    deleteUser:async (id:number)=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa người dùng này không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/users/${id}`});
            }catch(error){
                console.log("Lỗi delete user"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    deleteUsers: async (users:number[])=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa những người dùng đã chọn không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiPost({url:`http://localhost:8000/api/admin/users/delete-users`,data:{users}});
            }catch(error){
                console.log("Lỗi delete users"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    getRoles: async()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/roles/`});
    },
    givePerms: async({id,data}:{id:number,data:{roles:string[]}})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/users/${id}/add-roles-to-user`,data});
    }
    
}
export default UserServices