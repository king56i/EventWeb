import { useEventMode } from "@src/context/EventModeContext";
import EventServices from "@src/services/api-events";
import type { EventType } from "@src/types/listsType";
import truncateText from "@src/utils/truncateText";
import { Link } from "react-router-dom";
type EventItemProps = {
    item:EventType,
    onSuccess:any,
    dispatch:any,
    checkBoxes:number[]
};

export default function EventItem({item,onSuccess,dispatch,checkBoxes}:EventItemProps){
    const mode = useEventMode();
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
                <button onClick={async ()=>onSuccess(item.id,await EventServices.deleteEvent(item.id))} className="btn-delete">Xóa</button>
            </div>
        </td>
        :<td colSpan={2}>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <button onClick={async ()=>onSuccess(item.id,await EventServices.restoreEvent(item.id))} className="btn-edit">Phục Hồi</button>
                <button onClick={async ()=>onSuccess(item.id,await EventServices.forceDelete(item.id))} className="btn-delete">Xóa Vĩnh Viễn</button>
            </div>
        </td>
        }
    </tr>
}