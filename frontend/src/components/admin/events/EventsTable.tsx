import { useContext, useEffect, useState } from "react"
import EventItem from "./EventItem";
import type { EventType, HeaderType } from "@src/types/listsType";
import { useEventMode } from "@src/context/event/EventModeContext";
import EventServices from "@src/services/api-events";
import { ManageContext } from "@src/context/ManageContext";
import { Link } from "react-router-dom";
import restore from "@images/admin/events/restore.png"
import styles from "@scss/admin/Table/table.module.scss"
import { handleAction } from "@src/utils/manage-actions";
export default function EventsTable({headers}:{headers:HeaderType[]}){
    const [events,setEvents] = useState<EventType[]>([]);
    const {checkBoxes,handleItemsSuccess,dispatch} = useContext(ManageContext);
    const mode = useEventMode();
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = mode ==="active"? await EventServices.getEvents():await EventServices.eventTrash();
                setEvents(res?.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[]);
    return (
    <>
    <div className="cardHeader">
        <h2>{mode ==="active"?"Events":"Thùng rác"}</h2>
        {mode==="active"?<Link to="/admin/events/add" className="btn-add">Thêm Sự Kiện</Link>:''}
        <button className={`${checkBoxes.length > 0 ? styles.activeXoa:styles.disabled} ${styles.Nut}`} {...(checkBoxes.length > 0 ? {} : { disabled: true })} onClick={()=>handleAction(mode==='active'?'xoaMemEVS':'xoaVVEVS',checkBoxes,events,setEvents,dispatch,handleItemsSuccess)} >
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
        {mode === "active" ?
            <Link to="/admin/events/trashcan" className="bin-button">
                🗑️
            </Link>:
        <>
            <button onClick={()=>handleAction('phucHoiEVS',checkBoxes,events,setEvents,dispatch,handleItemsSuccess)} className={`${checkBoxes.length > 0 ? styles.activePhucHoi:styles.disabled} ${styles.Nut}`} {...(checkBoxes.length > 0 ? {} : { disabled: true })}>
                <img src={restore} style={{width:"20px"}} alt="" />
                Phục Hồi
            </button>
            <Link to="/admin/events/" className="bin-button">
                <span className="mobile-menu"></span>
            </Link>
        </>
        }
        
    </div>
    <table className="table">
        <thead>
            <tr>     
                <th>
                    <label className="container">
                        <input type="checkbox" onClick={(e:any)=>dispatch({type:e.target.checked ? "addAll":"removeAll",payload: events.map(item => item.id)})}/>
                        <div className="checkmark"></div>
                    </label>
                </th>               
                {headers.map(item => <th {...(item.title === "Tiêu Đề" ? { colSpan: 2 } : {})} key={item.id}>{item.title}</th>)}
                <th {...mode == "trash" ? { colSpan: 2 } : {}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {events.map(item=> <EventItem key={item.id} events={events} setEvents={setEvents} item={item}/>)}
        </tbody>
    </table>
    
    </>
    )
}