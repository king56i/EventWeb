import AddPermsForm from "@components/admin/roles/AddPermsForm"
import styles from "@scss/admin/Form/form.module.scss";

export default function AddPermsToRole(){
    return(
        <div className={styles.formContainer}>
            <span className={styles.formTitle}>Thêm Quyền Vào Vai Trò</span>
            <AddPermsForm/>
        </div>
    )
}