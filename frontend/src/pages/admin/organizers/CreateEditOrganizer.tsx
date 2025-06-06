import OrganizerForm from "@components/admin/organizers/OrganizerForm"
import styles from "@scss/admin/Form/form.module.scss"
import { useParams } from "react-router-dom";
export default function CreateEditOrganizer(){
    const {id} = useParams();
return(
    <>
        <div className={styles.formContainer}>
            <span className={styles.formTitle}>{id ? "Sửa":"Thêm"} Organizer</span>
            <OrganizerForm/>
        </div>
    </>
)
}