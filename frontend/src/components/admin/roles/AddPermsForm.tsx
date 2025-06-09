import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styles from "@scss/admin/Form/form.module.scss";
import RoleServices from "@src/services/api-roles";
import PermissionServices from "@src/services/api-permissions";
import type { PermissionType } from "@src/types/listsType";
import Swal from "sweetalert2";
export default function AddPermsForm(){
    const { register, handleSubmit, formState: { errors },reset, } = useForm<{permissions:string[]}>();
    const [perms,setPerms] = useState<PermissionType[]|null>(null);
    const [rolePerms,setRolePerms] = useState<string[]|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPermissions = async()=>{
            const res = await PermissionServices.getPermissions();
            setPerms(res?.data.data);
        }
        fetchPermissions();
    },[])
    useEffect(()=>{
        if (!id) {
            return;
        }
        const fetchRolePerms = async (id:string)=>{
            const res = await RoleServices.getPerms(parseInt(id));
            setRolePerms(res?.data.rolePermissions.map(String));
        } 
        fetchRolePerms(id)

    },[id])
    useEffect(()=>{
        if (rolePerms&&perms) {
        reset({permissions:rolePerms});
    }
    },[rolePerms,reset]);
    const onSubmit = async (data:{permissions:string[]})=>{
        try {
            const res = id && await RoleServices.givePerms({id:parseInt(id),data});
            if (res&&res.data&&res?.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res.data.message}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            navigate('/admin/roles');
            }
        }catch(error){

        }
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {perms?.map(perm => 
                <label htmlFor={`permission-${perm.id}`} className={styles.labelText}>
                    <input 
                        type="checkbox" 
                        className={styles.inputField} 
                        id={`permission-${perm.id}`}
                        value = {perm.id}
                        {...register("permissions", { required: true })}
                    />
                    {perm.name}
                </label>
            )}
            {errors.permissions && <span>This field is required</span>}
            <button className={styles.formButton} type="submit">Xác Nhận</button>
        </form>
    )
}
