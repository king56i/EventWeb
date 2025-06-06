import EventForm from "@components/admin/events/EventForm"
import styles from "@scss/admin/Form/form.module.scss"
import { useParams } from "react-router-dom";
export default function CreateEditEvent(){
    const {id} = useParams();
return(
    <>
        <div className={styles.formContainer}>
            <span className={styles.formTitle}>{id ? "Sửa":"Thêm"} Event</span>
            <EventForm/>
        </div>
    </>
)
}