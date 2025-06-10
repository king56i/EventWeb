import { useForm } from "react-hook-form"
import styles from '@scss/admin/Form/form.module.scss';
import { apiPost } from "@src/services/api-action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import '@scss/user/template/backgroundContainer.scss';
export default function Register(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm<{name:string,email:string,password:string}>();
    async function onSubmit(data:{name:string,email:string,password:string}){
        try{
            const res = await apiPost({url:'http://localhost:8000/api/register',data});
            console.log(res);
            Swal.fire({
                title:'Register',
                text:'Đăng ký thành công!',
                icon:'success',
                confirmButtonText: 'OK'
            });
            navigate('/login');
        }catch(error){
            console.error('Lỗi đăng ký:', error);
        }
    }
    return (
        <div className="background-container" style={{height:'100vh'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name" className={styles.labelText}>Name:</label>
                    <input placeholder="Nhập tên..." className={styles.inputField} type="text" {...register("name",{required:true})} />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.labelText}>Email:</label>
                    <input placeholder="Nhập email..." className={styles.inputField} type="email" {...register("email",{required:true})} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.labelText}>Mật Khẩu:</label>
                    <input placeholder="Nhập mật khẩu..." className={styles.inputField} type="password" {...register("password",{required:true})} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <button className={styles.formButton} type="submit">Đăng Nhâp</button>
            </form>
        </div>
    )
}