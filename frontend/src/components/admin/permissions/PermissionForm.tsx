import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { PermissionInputs } from "@src/types/formsType";
import type { PermissionType } from "@src/types/listsType";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PermissionServices from "@src/services/api-permissions";
import styles from "@scss/admin/Form/form.module.scss";
export default function PermissionForm(){
    const { register, handleSubmit, formState: { errors },reset } = useForm<PermissionInputs>();
    const [permission,setPermission] = useState<PermissionType|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (id?.trim()) {
            axios.get(`http://localhost:8000/api/admin/permissions/${id}/edit/`)
            .then(res => setPermission(res.data.data))
            .catch(err => console.error("Lỗi khi gọi API:", err));
        }
    }, [id]);
    useEffect(() => {
        if (permission) {
        reset(permission);
        }
    }, [permission, reset]);
    const onSubmit = async(data:PermissionInputs)=> {
        try {
            const  res = id ? await PermissionServices.updatePermission({id:parseInt(id),data}): await PermissionServices.addPermission(data);
            if (res?.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res.data.message}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            }
            navigate('/admin/permissions');
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
                <label htmlFor="guard_name" className={styles.labelText}>Guard:</label>
                <select className={styles.inputField} {...register("guard_name", { required: true })}>
                    <option value="">-- Chọn guard --</option>
                    <option value="web">Web</option>
                    <option value="api">Api</option>
                </select>
            </div>
            {errors.guard_name && <span>This field is required</span>} 
            <button className={styles.formButton} type="submit">{id ? "Sửa":"Thêm"}</button>
        </form>
    )
}
