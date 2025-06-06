import { ManageContext } from "@src/context/ManageContext";
import type { OrganizerType } from "@src/types/listsType";
import { handleAction } from "@src/utils/manage-actions";
import truncateText from "@src/utils/truncateText";
import { useContext } from "react";
import { Link } from "react-router-dom";
type OrganizerItemProps = {
    item:OrganizerType,
    organizers:OrganizerType[],
    setOrganizers:any
};
export default function OrganizerItem({item,organizers,setOrganizers}:OrganizerItemProps){
    const {checkBoxes,dispatch,handleItemsSuccess} = useContext(ManageContext);
    return <tr>
        <td>
            <label className="container">
                <input type="checkbox" className="delete-checkbox" checked={checkBoxes.includes(item.id)} onChange={(e:any)=>dispatch({type:e.target.checked ? "add":"remove",payload:item.id})}/>
                <div className="checkmark"></div>
            </label>
        </td>
        <td>{truncateText(item.name,50)}</td>
        <td colSpan={2}>{truncateText(item.contact_info,50)}</td>
        <td colSpan={2}>{truncateText(item.description,50)}</td>
        <td>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <Link to={`/admin/Organizers/${item.id}`} className="btn-edit">Sửa</Link>
                <button onClick={()=>handleAction('xoaOrganizer',item.id,organizers,setOrganizers,dispatch,handleItemsSuccess)} className="btn-delete">Xóa</button>
            </div>
        </td>
    </tr>
}