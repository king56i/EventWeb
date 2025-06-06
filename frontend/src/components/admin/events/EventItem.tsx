import { ManageContext } from "@src/context/ManageContext";
import { useEventMode } from "@src/context/event/EventModeContext";
import type { EventType } from "@src/types/listsType";
import { handleAction } from "@src/utils/manage-actions";
import truncateText from "@src/utils/truncateText";
import { useContext } from "react";
import { Link } from "react-router-dom";
type EventItemProps = {
    item:EventType,
    events:EventType[],
    setEvents:any
};
export default function EventItem({item,events,setEvents}:EventItemProps){
    const mode = useEventMode();
    const {checkBoxes,dispatch,handleItemsSuccess} = useContext(ManageContext);
    return <tr>
        <td>
            <label className="container">
                <input type="checkbox" className="delete-checkbox" checked={checkBoxes.includes(item.id)} onChange={(e:any)=>dispatch({type:e.target.checked ? "add":"remove",payload:item.id})}/>
                <div className="checkmark"></div>
            </label>
        </td>
        <td colSpan={2}>{truncateText(item.title,40)}</td>
        <td>{truncateText(item.description,20)}</td>
        <td>{truncateText(item.start_date)}</td>
        <td>{truncateText(item.end_date)}</td>
        <td>{truncateText(item.location,15)}</td>
        <td>{truncateText(item.organizer.name,15)}</td>
        <td>{truncateText(item.status)}</td> 
        {mode=="active" ? <td>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <Link to={`/admin/events/${item.id}`} className="btn-edit">Sửa</Link>
                <button onClick={()=>handleAction('xoaMemEV',item.id,events,setEvents,dispatch,handleItemsSuccess)} className="btn-delete">Xóa</button>
            </div>
        </td>
        :<td colSpan={2}>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <button onClick={()=>handleAction('phucHoiEV',item.id,events,setEvents,dispatch,handleItemsSuccess)} style={{backgroundColor:"#2ecc71"}} className="btn-edit">Phục Hồi</button>
                <button onClick={()=>handleAction('xoaVVEV',item.id,events,setEvents,dispatch,handleItemsSuccess)} className="btn-delete">Xóa Vĩnh Viễn</button>
            </div>
        </td>
        }
    </tr>
}