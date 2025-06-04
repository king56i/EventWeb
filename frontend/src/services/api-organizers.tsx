import Swal from 'sweetalert2';
import {apiPost,apiGet,apiPut,apiDelete} from './api-action';
const OrganizerServices = {
    getOrganizers: async ()=>{
        return await apiGet({url:`https://localhost:8000/admin/organizers`,options:{}});
    }
    

}
export default OrganizerServices;