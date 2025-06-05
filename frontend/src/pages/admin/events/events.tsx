import EventsTable from "@components/admin/events/EventsTable";
import "@css/admin/template/index/index.css"
import { EventModeContext } from "@src/context/event/EventModeContext";
export default function EventsMN(){
    const headers = [
        {id:1,title:'Tiêu Đề'},
        {id:2,title:'Mô Tả'},
        {id:3,title:'Ngày Bắt Đầu'},
        {id:4,title:'Ngày Kết Thúc'},
        {id:5,title:'Địa Điểm'},
        {id:6,title:'Đơn Vị Tổ Chức'},
        {id:7,title:'Trạng Thái'}
    ];
    return <>
        <EventModeContext value="active">
            <div className="page-header">
                <div className="page-block">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Events</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a ><i className="feather icon-home"></i></a></li>
                                <li className="breadcrumb-item"><a >Events</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tableContainer">    
                <EventsTable headers={headers}/>
            </div>
        </EventModeContext>
    </>
    
}