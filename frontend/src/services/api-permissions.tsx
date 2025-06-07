import { apiGet } from "./api-action";

const PermissionServices = {
    getPermissions:async()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/permissions`});
    }
}
export {PermissionServices}