import PermissionForm from "@components/admin/permissions/PermissionForm"
import styles from "@scss/admin/Form/form.module.scss"
import { useParams } from "react-router-dom";
export default function CreateEditPerm(){
    const {id} = useParams();
return(
    <>
        <div className={styles.formContainer}>
            <span className={styles.formTitle}>{id ? "Sửa":"Thêm"} Perm</span>
            <PermissionForm/>
        </div>
    </>
)
}