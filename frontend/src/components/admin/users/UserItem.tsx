import { ManageContext } from "@src/context/ManageContext";
import type { UserType } from "@src/types/listsType";
import { handleAction } from "@src/utils/manage-actions";
import truncateText from "@src/utils/truncateText";
import { useContext } from "react";
import { Link } from "react-router-dom";
type UserItemProps = {
    item:UserType,
    users:UserType[],
    setUsers:any
};
export default function UserItem({item,users,setUsers}:UserItemProps){
    const {checkBoxes,dispatch,handleItemsSuccess} = useContext(ManageContext);
    return <tr>
        <td>
            <label className="container">
                <input type="checkbox" className="delete-checkbox" checked={checkBoxes.includes(item.id)} onChange={(e:any)=>dispatch({type:e.target.checked ? "add":"remove",payload:item.id})}/>
                <div className="checkmark"></div>
            </label>
        </td>
        <td>{item.id}</td>
        <td>{truncateText(item.name,25)}</td>
        <td>{truncateText(item.email,50)}</td>
        <td>{[...item.roles]}</td>
        <td>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <Link to={`/admin/users/${item.id}`} className="btn-edit">Sửa</Link>
                <button onClick={()=>handleAction('xoaUser',item.id,users,setUsers,dispatch,handleItemsSuccess)} className="btn-delete">Xóa</button>
            </div>
        </td>
    </tr>
}