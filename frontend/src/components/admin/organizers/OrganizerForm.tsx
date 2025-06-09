import axios from "@src/utils/axios-customize";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { OrganizerInputs } from "@src/types/formsType";
import type { OrganizerType } from "@src/types/listsType";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import OrganizerServices from "@src/services/api-organizers";
import styles from "@scss/admin/Form/form.module.scss";
export default function OrganizerForm(){
    const { register, handleSubmit, formState: { errors },reset } = useForm<OrganizerInputs>();
    const [organizer,setOrganizer] = useState<OrganizerType|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (id?.trim()) {
            axios.get(`http://localhost:8000/api/admin/organizers/${id}/edit/`)
            .then(res => setOrganizer(res.data.data))
            .catch(err => console.error("Lỗi khi gọi API:", err));
        }
    }, [id]);
    useEffect(() => {
        if (organizer) {
        reset(organizer);
        }
    }, [organizer, reset]);
    const onSubmit = async(data:OrganizerInputs)=> {
        try {
            const  res = id ? await OrganizerServices.updateOrganizer({id:parseInt(id),data}): await OrganizerServices.addOrganizer(data);
            if (res?.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res.data.message}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            }
            navigate('/admin/organizers');
        } catch (error) {
            console.error("Lỗi khi gọi API:", error);
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.labelText}>Tên:</label>
                <input placeholder="Nhập tên..." className={styles.inputField} type="text" {...register("name",{required:true})} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="contact_info" className={styles.labelText}>Thông Tin Liên Hệ:</label>
                <input placeholder="Nhập thông tin liên hệ..." className={styles.inputField} type="text" {...register("contact_info",{required:true})} />
                {errors.contact_info && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="description" className={styles.labelText}>Mô Tả:</label>
                <input placeholder="Nhập mô tả...." className={styles.inputField} type="text" {...register("description",{required:true})} />
                {errors.description && <span>This field is required</span>}
            </div>
            <button className={styles.formButton} type="submit">{id ? "Sửa":"Thêm"}</button>
        </form>
    )
}
