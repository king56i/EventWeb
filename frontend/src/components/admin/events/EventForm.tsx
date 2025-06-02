import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { EventInputs } from "@src/types/formsType";
import type { EventType, OrganizerType } from "@src/types/listsType";
import { useNavigate, useParams } from "react-router-dom";
export default function EventForm(){
    const { register, handleSubmit, formState: { errors },reset } = useForm<EventInputs>();
    const [organizers, setOrganizers] = useState<OrganizerType[]>([]);
    const [event,setEvent] = useState<EventType|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    if (id && id.trim() !== ""){
        useEffect(()=>{
            const fetchEvent = async()=>{
                try{
                    const resEve = await axios.get(
                        `http://localhost:8000/api/admin/events/${id}/edit/`
                    );
                    setEvent(resEve.data.data);
                    
                } catch (error){
                    console.error("Lỗi khi gọi API:", error);
                }
            }
            fetchEvent();
        },[id])
    }
    const onSubmit = async(data:EventInputs)=> {
        try {
            if (id) {
                const res = await axios.put(`http://localhost:8000/api/admin/events/${id}`, data);
                console.log("Cập nhật thành công:");
            } else {
                const res = await axios.post(`http://localhost:8000/api/admin/events`, data);
                console.log("Tạo mới thành công:");
            }
            navigate('/admin/events');
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    }
    
    useEffect(() => {
        if (event) {
        reset({...event,organizers_id:event.organizer.id});
        }
    }, [event, reset]);
    useEffect(()=>{

        const fetchOrganizers = async ()=>{
            try {
                const resOrga = await axios.get(`http://localhost:8000/api/admin/events/create`);
                setOrganizers(resOrga.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchOrganizers();
    },[])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("title",{required:true})} />
            {errors.title && <span>This field is required</span>}
            <input type="text" {...register("description",{required:true})} />
            {errors.description && <span>This field is required</span>}
            <input type="datetime-local" {...register("start_date",{required:true})} />
            {errors.start_date && <span>This field is required</span>}
            <input type="datetime-local" {...register("end_date",{required:true})} />
            {errors.end_date && <span>This field is required</span>}
            <input type="text" {...register("location",{required:true})} />
            {errors.end_date && <span>This field is required</span>}
            <select {...register("organizers_id", { required: true })}>
                <option value="">-- Chọn tổ chức --</option>
                {organizers.map(org => (
                <option key={org.id} value={org.id}>
                    {org.name}
                </option>
                ))}
            </select>
            {errors.organizers_id && <span>This field is required</span>}
            <select {...register("status", { required: true })}>
                <option value="">-- Chọn trạng thái --</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="cancelled">Cancelled</option>
            </select>
            {errors.status && <span>This field is required</span>} 
            <button type="submit">Submit</button>
        </form>
    )
}