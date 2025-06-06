import OrganizersTable from "@components/admin/organizers/OrganizerTable";
import "@css/admin/template/index/index.css"
export default function OrganizersMN(){
    const headers = [
        {id:1,title:'Tên'},
        {id:2,title:'Thông Tin Liên Hệ'},
        {id:3,title:'Mô Tả'},
    ];
    return <>
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Organizers</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a ><i className="feather icon-home"></i></a></li>
                            <li className="breadcrumb-item"><a >Organizer</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="tableContainer">    
            <OrganizersTable headers={headers}/>
        </div>
    </>
    
}