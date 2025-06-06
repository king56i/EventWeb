import { useContext, useEffect, useState } from "react"
import type { HeaderType, OrganizerType } from "@src/types/listsType";
import OrganizerServices from "@src/services/api-organizers";
import { ManageContext } from "@src/context/ManageContext";
import { Link } from "react-router-dom";
import styles from "@scss/admin/Table/table.module.scss"
import { handleAction } from "@src/utils/manage-actions";
import OrganizerItem from "./OrganizerItem";
export default function OrganizersTable({headers}:{headers:HeaderType[]}){
    const [organizers,setOrganizers] = useState<OrganizerType[]>([]);
    const {checkBoxes,handleItemsSuccess,dispatch} = useContext(ManageContext);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = await OrganizerServices.getOrganizers();
                setOrganizers(res?.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[]);
    return (
    <>
    <div className="cardHeader">
        <h2>Organizers</h2>
        <Link to="/admin/organizers/add" className="btn-add">Thêm Tổ Chức</Link>
        <button className={`${checkBoxes.length > 0 ? styles.activeXoa:styles.disabled} ${styles.Nut}`} {...(checkBoxes.length > 0 ? {} : { disabled: true })} onClick={()=>handleAction('xoaOrganizers',checkBoxes,organizers,setOrganizers,dispatch,handleItemsSuccess)} >
            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                <path
                    {...(checkBoxes.length > 0 ? {fill:"white"}:{fill:"rgb(175, 171, 171)"})}
                    transform="translate(-2.5 -1.25)"
                    d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                    id="Fill">
                </path>
            </svg>
            Xóa
        </button>
    </div>
    <table className="table">
        <thead>
            <tr>     
                <th>
                    <label className="container">
                        <input type="checkbox" onClick={(e:any)=>dispatch({type:e.target.checked ? "addAll":"removeAll",payload: organizers.map(item => item.id)})}/>
                        <div className="checkmark"></div>
                    </label>
                </th>               
                {headers.map(item => <th {...(item.title === "Thông Tin Liên Hệ"|| item.title === "Mô Tả" ? { colSpan: 2 } : {})} key={item.id}>{item.title}</th>)}
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {organizers.map(item=> <OrganizerItem key={item.id} organizers={organizers} setOrganizers={setOrganizers} item={item}/>)}
        </tbody>
    </table>
    
    </>
    )
}