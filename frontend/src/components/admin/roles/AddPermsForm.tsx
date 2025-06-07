import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import styles from "@scss/admin/Form/form.module.scss";
import RoleServices from "@src/services/api-roles";
import { PermissionServices } from "@src/services/api-permissions";
import type { PermissionType } from "@src/types/listsType";
import Swal from "sweetalert2";
export default function AddPermsForm(){
    const { register, handleSubmit, formState: { errors },reset } = useForm<{permission:number[]}>();
    const [perms,setPerms] = useState<PermissionType[]|null>(null);
    const [rolePerms,setRolePerms] = useState<{permission:number[]}|null>(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchPermissions = async()=>{
            const res = await PermissionServices.getPermissions();
            res&&res.data&&setPerms(res?.data.data);
        }
        fetchPermissions();
    },[])
    useEffect(()=>{
        if (!id) {
            return;
        }
        const fetchRolePerms = async (id:string)=>{
            const res = await RoleServices.getPerms(parseInt(id));
            setRolePerms(res?.data.data.rolePermissions);
        } 
        fetchRolePerms(id)
    },[id])
    useEffect(()=>{
        if (rolePerms && rolePerms.permission) {
        reset({ permission: rolePerms.permission });
    }
    },[rolePerms,reset]);
    const onSubmit = async (data:{permission:number[]})=>{
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
                <div className={styles.inputGroup}>
                    <label htmlFor="permission[]" className={styles.labelText}>
                        <input type="checkbox" className={styles.inputField}   defaultChecked={rolePerms?.permission?.includes(perm.id)} {...register("permission",{required:true})} />
                        {perm.name}
                    </label>
                </div>
            )}
            {errors.permission && <span>This field is required</span>}
        </form>
    )
}
