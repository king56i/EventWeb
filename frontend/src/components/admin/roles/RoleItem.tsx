import { ManageContext } from "@src/context/ManageContext";
import type { RoleType } from "@src/types/listsType";
import { handleAction } from "@src/utils/manage-actions";
import truncateText from "@src/utils/truncateText";
import { useContext } from "react";
import { Link } from "react-router-dom";
type RoleItemProps = {
    item:RoleType,
    roles:RoleType[],
    setRoles:any
};
export default function RoleItem({item,roles,setRoles}:RoleItemProps){
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
                <Link to={`/admin/roles/${item.id}/add-perms-to-role/`} className="btn-edit">Thêm Quyền Vào Vai Trò</Link>
                <Link to={`/admin/roles/${item.id}`} className="btn-edit">Sửa</Link>
                <button onClick={()=>handleAction('xoaRole',item.id,roles,setRoles,dispatch,handleItemsSuccess)} className="btn-delete">Xóa</button>
            </div>
        </td>
    </tr>
}