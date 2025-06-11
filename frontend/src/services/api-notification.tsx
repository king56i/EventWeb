import { apiDelete, apiGet, apiPost, apiPut } from "./api-action";
import Swal from "sweetalert2";
const NotificationServices ={
    getNotifications: async ()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/notifications`,options:{}});
    },
    deleteUser:async (id:number)=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa thông báo này không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/notifications/${id}`});
            }catch(error){
                console.log("Lỗi delete user"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    deleteNotifications: async (notifications:number[])=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa những thông báo đã chọn không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiPost({url:`http://localhost:8000/api/admin/notifications/delete-notifications`,data:{notifications}});
            }catch(error){
                console.log("Lỗi delete notifications"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    getRoles: async()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/roles/`});
    },
    givePerms: async({id,data}:{id:number,data:{roles:string[]}})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/notifications/${id}/add-roles-to-user`,data});
    }
    
}
export default NotificationServices