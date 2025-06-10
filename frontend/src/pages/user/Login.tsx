import { useForm } from "react-hook-form"
import styles from '@scss/admin/Form/form.module.scss';
import { apiPost } from "@src/services/api-action";
import '@scss/user/template/backgroundContainer.scss';
import Swal from "sweetalert2";
export default function Login(){
    const {register,handleSubmit,formState:{errors}}=useForm<{email:string,password:string}>();
    async function onSubmit(data:{email:string,password:string}){
        try{
            const res = await apiPost({url:'http://localhost:8000/api/login',data});
            localStorage.setItem('token', res?.data.token);
            console.log(res);
            Swal.fire({
                title:'Login',
                text:'Đăng nhập thành công!',
                icon:'success',
                confirmButtonText: 'OK'
            });
        }catch(error){
            console.error('Lỗi đăng nhập:', error);
        }
    }
    return (
        <div className={`background-container`}>
            <div className={styles.formContainer} style={{backgroundColor:'#6c757d',color:'white'}}>
                <span className={styles.formTitle} style={{color:'white'}}> Đăng Nhập</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.labelText}>Email:</label>
                        <input placeholder="Nhập email..." className={styles.inputField} type="text" {...register("email",{required:true})} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.labelText}>Mật Khẩu:</label>
                        <input placeholder="Nhập password..." className={styles.inputField} type="password" {...register("password",{required:true})} />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <button className={styles.formButton} style={{backgroundColor:'black'}} type="submit">Đăng Nhâp</button>
                </form>
            </div>
        </div>
    )
}