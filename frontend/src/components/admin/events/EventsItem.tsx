type EventItemProps = {
    event:{
        id: number;
        title: string;
        description: string;
        start_date: string; // ISO format datetime từ API, nên dùng string
        end_date: string;
        location: string;
        organizers_id: number;
        status: "draft" | "published" | "cancelled";
        created_at: string;
        updated_at: string;
    }
};
export default function EventsItem({event}:EventItemProps){
    return <li>
        {event.title}
    </li>
}