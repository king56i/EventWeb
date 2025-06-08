import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { UserInputs } from "@src/types/formsType";
import type { UserType } from "@src/types/listsType";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UserServices from "@src/services/api-users";
import styles from "@scss/admin/Form/form.module.scss";
export default function UserForm(){
    const { register, handleSubmit, formState: { errors },reset,watch } = useForm<UserInputs>();
    const [user,setUser] = useState<UserType|null>(null);
    const [userRoles,setUserRoles] = useState<string[]>([]);
    const [roles,setRoles] = useState<string[]|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (id?.trim()) {
            axios.get(`http://localhost:8000/api/admin/users/${id}/edit/`)
            .then(res =>{
                    setUser(res.data.user) 
                    setUserRoles(res.data.userRoles.map(String))
                }
            )
            .catch(err => console.error("Lỗi khi gọi API:", err));
        }
    }, [id]);
    useEffect(()=>{
        const fetchRoles = async ()=>{
            try {
                const res = await UserServices.getRoles();
                setRoles(res?.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchRoles();
    },[])
    useEffect(() => {
        if (user) {
        reset({...user,roles:userRoles});
        }
    }, [user,roles,userRoles, reset]);
    const onSubmit = async(data:UserInputs)=> {
        try {
            const  res = id ? await UserServices.updateUser({id:parseInt(id),data}): await UserServices.addUser(data);
            if (res?.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res.data.message}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            }
            navigate('/admin/users');
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
                <label htmlFor="email" className={styles.labelText}>Email:</label>
                <input placeholder="Nhập email..." className={styles.inputField} type="email" {...register("email",{required:true})} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.labelText}>Password:</label>
                <input placeholder="Nhập password..." className={styles.inputField} type="password" {...register("password",{required:true})} />
                {errors.name && <span>This field is required</span>}
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor={`roles`} className={styles.labelText}></label>
                <select multiple {...register("roles",{required:true})}>
                    <option value="#">Chọn vai trò</option>
                    {roles?.map((item:any)=>
                            <option key={item.id} value={item.id} id={`role-${item.id}`} >{item.name}</option>
                        )
                    }
                </select>
                {errors.name && <span>This field is required</span>}
            </div>
            <button className={styles.formButton} type="submit">{id ? "Sửa":"Thêm"}</button>
        </form>
    )
}
