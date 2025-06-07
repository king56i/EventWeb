import type { RoleInputs } from "@src/types/formsType";
import { apiDelete, apiGet, apiPost, apiPut } from "./api-action";
import Swal from "sweetalert2";

const RoleServices ={
    getRoles: async ()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/roles`,options:{}});
    },
    updateRole:async ({id,data}:{id:number,data:RoleInputs})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/roles/${id}`,data});
    },
    addRole:async (data:RoleInputs)=>{
        return await apiPost({url:`http://localhost:8000/api/admin/roles`,data});
    },
    deleteRole:async (id:number)=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa vai trò này không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/roles/${id}`});
            }catch(error){
                console.log("Lỗi delete role"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    deleteRoles: async (roles:number[])=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa những vai trò đã chọn không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiPost({url:`http://localhost:8000/api/admin/roles/delete-roles`,data:{roles}});
            }catch(error){
                console.log("Lỗi delete roles"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    getPerms: async(id:number)=>{
        return await apiGet({url:`http://localhost:8000/api/admin/roles/${id}/add-perms-to-role`});
    },
    givePerms: async({id,data}:{id:number,data:{permissions:string[]}})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/roles/${id}/add-perms-to-role`,data});
    }
    
}
export default RoleServices