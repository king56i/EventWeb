type EventItemProps = {
    event:{
        id: number;
        title: string;
        description: string;
        start_date: string; // ISO format datetime từ API, nên dùng string
        end_date: string;
        location: string;
        organizer: {id:number,name:string,contact_info:string,description:string};
        status: "draft" | "published" | "cancelled";
        created_at: string;
        updated_at: string;
    }
};
export default function EventsItem({event}:EventItemProps){
    return <tr>
        <td>{event.title}</td>
        <td>{event.description}</td>
        <td>{event.start_date}</td>
        <td>{event.end_date}</td>
        <td>{event.location}</td>
        <td>{event.organizer.name}</td>
        <td>{event.location}</td> 
    </tr>
}