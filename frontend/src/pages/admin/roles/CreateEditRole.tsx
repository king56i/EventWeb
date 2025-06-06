import RoleForm from "@components/admin/roles/RoleForm"
import styles from "@scss/admin/Form/form.module.scss"
import { useParams } from "react-router-dom";
export default function CreateEditRole(){
    const {id} = useParams();
return(
    <>
        <div className={styles.formContainer}>
            <span className={styles.formTitle}>{id ? "Sửa":"Thêm"} Role</span>
            <RoleForm/>
        </div>
    </>
)
}