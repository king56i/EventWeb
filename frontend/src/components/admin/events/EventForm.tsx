import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { EventInputs } from "@src/types/formsType";
import type { EventType, OrganizerType } from "@src/types/listsType";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import EventServices from "@src/services/api-events";
import OrganizerServices from "@src/services/api-organizers";
export default function EventForm(){
    const { register, handleSubmit, formState: { errors },reset } = useForm<EventInputs>();
    const [organizers, setOrganizers] = useState<OrganizerType[]>([]);
    const [event,setEvent] = useState<EventType|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (id?.trim()) {
            axios.get(`http://localhost:8000/api/admin/events/${id}/edit/`)
            .then(res => setEvent(res.data.data))
            .catch(err => console.error("Lỗi khi gọi API:", err));
        }
    }, [id]);
    const onSubmit = async(data:EventInputs)=> {
        try {
            const  res = id ? await EventServices.updateEvent({id:parseInt(id),data}): await EventServices.addEvent(data);
            if (res?.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res.data.message}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
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
                const resOrga = await OrganizerServices.getOrganizers();
                setOrganizers(resOrga?.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchOrganizers();
    },[event])
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
