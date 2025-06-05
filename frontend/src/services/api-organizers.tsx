import Swal from 'sweetalert2';
import {apiPost,apiGet,apiPut,apiDelete} from './api-action';
const OrganizerServices = {
    getOrganizers: async ()=>{
        return await apiGet({url:`http://localhost:8000/api/admin/organizers`,options:{}});
    }
    

}
export default OrganizerServices;