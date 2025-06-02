import EventsList from "./EventsList";
export function Table(){
    return <>
    
        <table className="table">
            <thead>
                <tr>                    
                    <th>Tiêu Đề</th>
                    <th>Mô tả</th>
                    <th>Ngày Bắt Đầu</th>
                    <th>Ngày Kết Thúc</th>
                    <th>Địa Điểm</th>
                    <th>Đơn Vị Tổ Chức</th>
                    <th>Trạng Thái</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                <EventsList/>
            </tbody>
        </table>
    </>
}