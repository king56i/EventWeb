import axios from "axios"
import { useEffect, useState } from "react"
import EventItem from "./EventItem";

import type { EventType } from "@src/types/listsType";
export default function EventsList(){
    const [events,setEvents] = useState<EventType[]>([]);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = await axios.get(`http://localhost:8000/api/admin/events`);
                setEvents(res.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[events])
    return (
    <>
        {events.map(item=> <EventItem key={item.id} item={item} />)}
    </>
    )
}