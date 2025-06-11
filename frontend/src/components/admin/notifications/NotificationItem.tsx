import { ManageContext } from "@src/context/ManageContext";
import type { NotificationType } from "@src/types/listsType";
import { handleAction } from "@src/utils/manage-actions";
import truncateText from "@src/utils/truncateText";
import { useContext } from "react";
type UserItemProps = {
    item:NotificationType,
    notifications:NotificationType[],
    setNotifications:any
};
export default function NotificationItem({item,notifications,setNotifications}:UserItemProps){
    const {checkBoxes,dispatch,handleItemsSuccess} = useContext(ManageContext);
    return <tr>
        <td>
            <label className="container">
                <input type="checkbox" className="delete-checkbox" checked={checkBoxes.includes(item.id)} onChange={(e:any)=>dispatch({type:e.target.checked ? "add":"remove",payload:item.id})}/>
                <div className="checkmark"></div>
            </label>
        </td>
        <td>{item.id}</td>
        <td>{truncateText(item.receiver.name,25)}</td>
        <td>{truncateText(item.event.name,50)}</td>
        <td>{truncateText(item.message,50)}</td>
        <td>{truncateText(item.type,50)}</td>
        <td>
            <div style={{display:"flex",justifyContent:"space-evenly"}} >
                <button onClick={()=>handleAction('xoaNotification',item.id,notifications,setNotifications,dispatch,handleItemsSuccess)} className="btn-delete">Xóa</button>
            </div>
        </td>
    </tr>
}