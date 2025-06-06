import Swal from 'sweetalert2';
import {apiPost,apiGet,apiPut,apiDelete} from './api-action';
import type { OrganizerInputs } from '@src/types/formsType';
const OrganizerServices = {
    getOrganizers: async ()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/organizers`,options:{}});
    },
    updateOrganizer:async ({id,data}:{id:number,data:OrganizerInputs})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/organizers/${id}`,data});
    },
    addOrganizer:async (data:OrganizerInputs)=>{
        return await apiPost({url:`http://localhost:8000/api/admin/organizers`,data});
    },
    deleteOrganizer:async (id:number)=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa tổ chức này không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/organizers/${id}`});
            }catch(error){
                console.log("Lỗi delete organizer"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    },
    deleteOrganizers: async (organizers:number[])=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa những tổ chức đã chọn không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        });
        if(result.isConfirmed){
            try{
                return await apiPost({url:`http://localhost:8000/api/admin/organizers/delete-organizers`,data:{organizers}});
            }catch(error){
                console.log("Lỗi delete organizers"+error);
            }

        }else{
            Swal.fire('Từ chối xóa','','info')
        }
    }
    

}
export default OrganizerServices;