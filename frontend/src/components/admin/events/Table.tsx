import List from "./List";
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
                </tr>
            </thead>
            <tbody>
                <List/>
            </tbody>
        </table>
    </>
}