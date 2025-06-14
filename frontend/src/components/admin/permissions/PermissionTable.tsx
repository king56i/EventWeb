import { useContext, useEffect, useState } from "react"
import type { HeaderType, PermissionType, } from "@src/types/listsType";
import { ManageContext } from "@src/context/ManageContext";
import { Link } from "react-router-dom";
import styles from "@scss/admin/Table/table.module.scss"
import { handleAction } from "@src/utils/manage-actions";
import PermissionItem from "./PermissionItem";
import PermissionServices from "@src/services/api-permissions";
export default function PermissionsTable({headers}:{headers:HeaderType[]}){
    const [permissions,setPermissions] = useState<PermissionType[]>([]);
    const {checkBoxes,handleItemsSuccess,dispatch} = useContext(ManageContext);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = await PermissionServices.getPermissions();
                setPermissions(res?.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[]);
    return (
    <>
    <div className="cardHeader">
        <h2>Permissions</h2>
        <Link to="/admin/permissions/add" className="btn-add">Thêm Quyền Lợi</Link>
        <button className={`${checkBoxes.length > 0 ? styles.activeXoa:styles.disabled} ${styles.Nut}`} {...(checkBoxes.length > 0 ? {} : { disabled: true })} onClick={()=>handleAction('xoaPerms',checkBoxes,permissions,setPermissions,dispatch,handleItemsSuccess)} >
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
                        <input type="checkbox" onClick={(e:any)=>dispatch({type:e.target.checked ? "addAll":"removeAll",payload: permissions.map(item => item.id)})}/>
                        <div className="checkmark"></div>
                    </label>
                </th>               
                {headers.map(item => <th key={item.id}>{item.title}</th>)}
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {permissions.map(item=> <PermissionItem key={item.id} permissions={permissions} setPermissions={setPermissions} item={item}/>)}
        </tbody>
    </table>
    
    </>
    )
}