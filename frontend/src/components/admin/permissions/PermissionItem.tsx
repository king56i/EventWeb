import { ManageContext } from "@src/context/ManageContext";
import type {  PermissionType } from "@src/types/listsType";
import { handleAction } from "@src/utils/manage-actions";
import truncateText from "@src/utils/truncateText";
import { useContext } from "react";
import { Link } from "react-router-dom";
type PermissionItemProps = {
    item:PermissionType,
    permissions:PermissionType[],
    setPermissions:any
};
export default function PermissionItem({item,permissions,setPermissions}:PermissionItemProps){
    const {checkBoxes,dispatch,handleItemsSuccess} = useContext(ManageContext);
    return <tr>
        <td>
            <label className="container">
                <input type="checkbox" className="delete-checkbox" checked={checkBoxes.includes(item.id)} onChange={(e:any)=>dispatch({type:e.target.checked ? "add":"remove",payload:item.id})}/>
                <div className="checkmark"></div>
            </label>
        </td>
        <td>{truncateText(item.name,50)}</td>
        <td>{truncateText(item.guard_name,50)}</td>
        <td>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <Link to={`/admin/permissions/${item.id}`} className="btn-edit">Sửa</Link>
                <button onClick={()=>handleAction('xoaPerm',item.id,permissions,setPermissions,dispatch,handleItemsSuccess)} className="btn-delete">Xóa</button>
            </div>
        </td>
    </tr>
}