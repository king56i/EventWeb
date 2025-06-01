import { Table } from "@components/admin/events/Table";
import "@css/admin/template/index/index.css"

type Event = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    organizer: {id:number,name:string,description:string,contact_info:string};
    status: "draft" | "published" | "cancelled";
    created_at: string;
    updated_at: string;
}
export default function EventsMN(){
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
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="tableContainer">
        <div className="cardHeader">
            <h2>Events</h2>
            <a href="" className="btn-add">Thêm Sự Kiện</a>
            <button style={{opacity:0.5}} className="btn" id="soft-delete">
                <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                    <path transform="translate(-2.5 -1.25)"
                        d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                        id="Fill"></path>
                </svg>
            </button>
            <a href="" className="bin-button">
                🗑️
            </a>
        </div>
        <Table/>
    </div>
    
    </>
}