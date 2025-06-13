import axios from "@src/utils/axios-customize";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { EventInputs } from "@src/types/formsType";
import type { EventType, OrganizerType } from "@src/types/listsType";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import EventServices from "@src/services/api-events";
import OrganizerServices from "@src/services/api-organizers";
import styles from "@scss/admin/Form/form.module.scss";
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
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
            if (value instanceof FileList) {
                Array.from(value).forEach((file, index) => {
                    formData.append(`${key}[]`, file);
                });
            } else if (typeof value === 'boolean' || typeof value === 'number') {
                formData.append(key, String(value));
            } else {
                formData.append(key, value);
            }
        });
            const  res = id ? await EventServices.updateEvent({id:parseInt(id),data}): await EventServices.addEvent(formData);
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
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className={styles.inputGroup}>
                <label htmlFor="title" className={styles.labelText}>Tiêu Đề:</label>
                <input placeholder="Nhập tiêu đề..." className={styles.inputField} type="text" {...register("title",{required:true})} />
                {errors.title && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="description" className={styles.labelText}>Mô Tả:</label>
                <input placeholder="Nhập mô tả..." className={styles.inputField} type="text" {...register("description",{required:true})} />
                {errors.description && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="start_date" className={styles.labelText}>Ngày Bắt Đầu:</label>
                <input placeholder="" className={styles.inputField} type="datetime-local" {...register("start_date",{required:true})} />
                {errors.start_date && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="end_date" className={styles.labelText}>Ngày Kết Thúc:</label>
                <input className={styles.inputField} type="datetime-local" {...register("end_date",{required:true})} />
                {errors.end_date && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="location" className={styles.labelText}>Địa Điểm:</label>
                <input placeholder="Nhập địa điểm tổ chức...." className={styles.inputField} type="text" {...register("location",{required:true})} />
                {errors.location && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="organizers_id" className={styles.labelText}>Tổ Chức:</label>
                <select className={styles.inputField} {...register("organizers_id", { required: true })}>
                    <option value="">-- Chọn tổ chức --</option>
                    {organizers.map(org => (
                    <option key={org.id} value={org.id}>
                        {org.name}
                    </option>
                    ))}
                </select>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="banner" className={styles.labelText}>Banner:</label>
                <input type="file" className={styles.inputField} {...register("banner", { required: true })} />
            </div>
            {errors.banner && <span>This field is required</span>} 
            <div className={styles.inputGroup}>
                <label htmlFor="thumbnail" className={styles.labelText}>Thumbnail:</label>
                <input type="file" className={styles.inputField} {...register("thumbnail", { required: true })} />
            </div>
            {errors.thumbnail && <span>This field is required</span>} 
            <div className={styles.inputGroup}>
                <label htmlFor="images" className={styles.labelText}>Hình Ảnh:</label>
                <input type="file" multiple className={styles.inputField} {...register("images", { required: true })} />
            </div>
            {errors.images && <span>This field is required</span>} 
            <div className={styles.inputGroup}>
                <label className={styles.labelText}>Sự kiện nổi bật?</label>
                <div>
                    <label>
                    <input
                        type="radio"
                        value="1"
                        {...register("is_featured", { required: true })}
                    />
                    Có
                    </label>
                    <label style={{ marginLeft: "1rem" }}>
                    <input
                        type="radio"
                        value="0"
                        {...register("is_featured", { required: true })}
                    />
                    Không
                    </label>
                </div>
            </div>
            {errors.is_featured && <span>Vui lòng chọn!</span>}

            {errors.organizers_id && <span>This field is required</span>}
            <div className={styles.inputGroup}>
                <label htmlFor="status" className={styles.labelText}>Trạng Thái:</label>
                <select className={styles.inputField} {...register("status", { required: true })}>
                    <option value="">-- Chọn trạng thái --</option>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="cancelled">Cancelled</option>
                </select>
            </div>
            {errors.status && <span>This field is required</span>} 
            <button className={styles.formButton} type="submit">{id ? "Sửa":"Thêm"}</button>
        </form>
    )
}
