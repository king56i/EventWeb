import type { PermissionInputs } from "@src/types/formsType";
import { apiDelete, apiGet, apiPost, apiPut } from "./api-action";
import Swal from "sweetalert2";

const PermissionServices = {
    getPermissions:async()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/permissions`});
    },
    addPermission:async(data:PermissionInputs)=>{
        return await apiPost({url:`http://localhost:8000/api/admin/permissions`,data});
    },
    updatePermission:async({id,data}:{id:number,data:PermissionInputs})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/permissions/${id}`,data})
    },
    deletePermission:async(id:number)=>{
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
                return await apiDelete({url:`http://localhost:8000/api/admin/permissions/${id}`});
            }catch(error){
                console.log("Lỗi delete permission"+error);
            }
        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    deletePermissions:async(perms:number[])=>{
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
                return await apiPost({url:`http://localhost:8000/api/admin/permissions/delete-permissions`,data:{perms}});
            }catch(error){
                console.log("Lỗi delete permissions"+error);
            }
        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    }
}
export default PermissionServices