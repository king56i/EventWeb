import OrganizersList from "./OrganizersList";
export function Table(){
    return <>
    
        <table className="table">
            <thead>
                <tr>                    
                    <th>Tên</th>
                    <th>Thông Tin Liên Hệ</th>
                    <th>Mô Tả</th>
                </tr>
            </thead>
            <tbody>
                <OrganizersList/>
            </tbody>
        </table>
    </>
}