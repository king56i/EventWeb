import type { EventType } from "@src/types/listsType";
import truncateText from "@src/utils/truncateText";
import axios from "axios";
import { Link } from "react-router-dom";
type EventItemProps = {
    item:EventType,
    onDeleteSuccess:any
};

export default function EventItem({item,onDeleteSuccess}:EventItemProps){
    function handleDelete(){
        try{
            axios.delete(`http://localhost:8000/api/admin/events/${item.id}`)
            onDeleteSuccess(item.id);
        }catch(error){
            console.log("Lỗi delete"+error);
        }
    }
    return <tr>
        <td>{truncateText(item.title)}</td>
        <td>{truncateText(item.description)}</td>
        <td>{truncateText(item.start_date)}</td>
        <td>{truncateText(item.end_date)}</td>
        <td>{truncateText(item.location)}</td>
        <td>{truncateText(item.organizer.name)}</td>
        <td>{truncateText(item.status)}</td> 
        <td>
            <Link to={`/admin/events/${item.id}`} className="btn-edit">Sửa</Link>
            <button onClick={handleDelete} className="btn-delete">Xóa</button>
        </td> 
    </tr>
}