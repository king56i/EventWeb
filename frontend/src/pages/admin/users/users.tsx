import UserTable from "@components/admin/users/UserTable";
import "@css/admin/template/index/index.css"
export default function UsersMN(){
    const headers = [
        {id:0,title:'Id'},
        {id:1,title:'Tên'},
        {id:2,title:'Email'},
        {id:3,title:'Vai Trò'},
    ];
    return <>
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Users</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a ><i className="feather icon-home"></i></a></li>
                            <li className="breadcrumb-item"><a >User</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="tableContainer">    
            <UserTable headers={headers}/>
        </div>
    </>
    
}