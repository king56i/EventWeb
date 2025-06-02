import EventsTable from "@components/admin/events/EventsTable";
import "@css/admin/template/index/index.css"
import { Link } from "react-router-dom";
export default function TrashCan(){
    const headers = [
        {id:1,title:'Tiêu Đề'},
        {id:2,title:'Mô Tả'},
        {id:3,title:'Ngày Bắt Đầu'},
        {id:4,title:'Ngày Kết Thúc'},
        {id:5,title:'Địa Điểm'},
        {id:6,title:'Đơn Vị Tổ Chức'},
        {id:7,title:'Trạng Thái'}
    ];
    const url = `http://localhost:8000/api/admin/events/trashcan`;
    return <>
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
                            <li className="breadcrumb-item"><a >TrashCan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="tableContainer">
            <div className="cardHeader">
                <h2>Thùng Rác</h2>
                <button style={{opacity:0.5}} className="btn" id="soft-delete">
                    <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                        <path transform="translate(-2.5 -1.25)"
                            d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                            id="Fill"></path>
                    </svg>
                </button>
                <Link to="/admin/events/trashcan" className="bin-button">
                    🗑️
                </Link>
            </div>
            <EventsTable headers={headers} url={url} />
        </div>
    </>
}