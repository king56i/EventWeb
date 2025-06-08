import UserForm from "@components/admin/users/UserForm"
import styles from "@scss/admin/Form/form.module.scss"
import { useParams } from "react-router-dom";
export default function CreateEditUser(){
    const {id} = useParams();
return(
    <>
        <div className={styles.formContainer}>
            <span className={styles.formTitle}>{id ? "Sửa":"Thêm"} User</span>
            <UserForm/>
        </div>
    </>
)
}