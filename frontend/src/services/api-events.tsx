import Swal from "sweetalert2";
import { apiGet,apiDelete,apiPost,apiPut } from "./api-action";
import type { EventInputs } from "@src/types/formsType";
const EventServices = {
    getEvents: async()=>{
        return await apiGet({url:'http://localhost:8000/api/admin/events',options:{}});
    },
    deleteEvent:async(id:number)=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa sự kiện này không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        })
        if (result.isConfirmed) {
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/events/${id}`})
            }catch(error){
                console.log("Lỗi delete event"+error);
            }
        }else {
            Swal.fire('Từ chối xóa', '', 'info');
        }
    },
    restoreEvent:async (id:number) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Bạn có muốn phục hồi sự kiện này không ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Phục hồi!',
            cancelButtonText: 'Hủy',
        })
        if (result.isConfirmed) {
            try{
                return await apiPost({url:`http://localhost:8000/api/admin/events/trashcan/${id}`});
            }catch(error){
                console.log("Lỗi phục hồi event"+error);
            }
        } else {
        Swal.fire('Từ chối phục hồi', '', 'info');
        }
    },
    updateEvent: async ({id,data}:{id:number,data:EventInputs})=>{
        return await apiPut({url:`http://localhost:8000/api/admin/events/${id}`,data});
    },
    addEvent: async (data:EventInputs)=>{
        return await apiPost({url:`http://localhost:8000/api/admin/events`,data})
    },
    forceDelete: async (id:number) =>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa vĩnh viễn sự kiện này không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa luôn!',
            cancelButtonText: 'Hủy',
        })
        if (result?.isConfirmed) {
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/events/trashcan/${id}`})
            }catch(error){
                console.log("Lỗi xóa vĩnh viễn"+error);
            }
        } else {
        Swal.fire('Từ chối xóa vĩnh viễn', '', 'info');
        }
    },
    eventTrash: async ()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/events/trashcan`,options:{}});
    },
    deleteEvents: async (events:number[])=>{
        const result = await Swal.fire({
            title: 'Bạn chắc chứ?',
            text: 'Bạn có muốn xóa những sự kiện đã chọn không ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa!',
            cancelButtonText: 'Hủy',
        })
        if (result.isConfirmed) {
            try{
                return await apiDelete({url:`http://localhost:8000/api/admin/events/delete-events`,data:{events}})
            }catch(error){
                console.log("Lỗi delete events"+error);
            }
        }else {
            Swal.fire('Từ chối xóa', '', 'info');
        }
    }
}
export default EventServices;