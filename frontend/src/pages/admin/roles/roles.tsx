import RolesTable from "@components/admin/roles/RoleTable";
import "@css/admin/template/index/index.css"
export default function RolesMN(){
    const headers = [
        {id:1,title:'Tên'},
        {id:2,title:'Guard_name'},
    ];
    return <>
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Roles</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a ><i className="feather icon-home"></i></a></li>
                            <li className="breadcrumb-item"><a >Role</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="tableContainer">    
            <RolesTable headers={headers}/>
        </div>
    </>
    
}