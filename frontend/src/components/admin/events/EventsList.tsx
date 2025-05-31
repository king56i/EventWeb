import axios from "axios"
import { useEffect, useState } from "react"
import EventsItem from "./EventsItem";
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
export default function EventsList(){
    const [events,setEvents] = useState<Event[]>([]);
    useEffect(()=>{
        const fetchEvents = async ()=>{
            try {
                const res = await axios.get("http://localhost:8000/admin/events");
                setEvents(res.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchEvents();
    },[events])
    return (
    <>
        {events.map(event=> <EventsItem key={event.id} event={event} />)}
    </>
    )
}