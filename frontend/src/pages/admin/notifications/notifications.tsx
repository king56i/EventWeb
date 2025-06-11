import NotificationTable from "@components/admin/notifications/NotificactionTable";
import "@css/admin/template/index/index.css"
export default function NotificationsMN(){
    const headers = [
        {id:0,title:'Id'},
        {id:1,title:'Người Nhận'},
        {id:2,title:'Sự Kiện'},
        {id:3,title:'Nội Dung'},
        {id:3,title:'Loại'},
    ];
    return <>
        <div className="page-header">
            <div className="page-block">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="page-header-title">
                            <h5 className="m-b-10">Notifications</h5>
                        </div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a ><i className="feather icon-home"></i></a></li>
                            <li className="breadcrumb-item"><a >Notification</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="tableContainer">    
            <NotificationTable headers={headers}/>
        </div>
    </>
    
}