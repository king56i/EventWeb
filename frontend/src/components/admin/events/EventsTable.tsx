import axios from "axios"
import { useEffect, useState } from "react"
import EventItem from "./EventItem";

import type { EventType, HeaderType } from "@src/types/listsType";
export default function EventsTable({headers,url}:{headers:HeaderType[],url:string}){
    const [events,setEvents] = useState<EventType[]>([]);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = await axios.get(url);
                setEvents(res.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[])
    function handleDeleteSuccess(deletedId: number){
        setEvents(events.filter(event => event.id !== deletedId));
    }
    return (
    <>
    <table className="table">
        <thead>
            <tr>                    
                {headers.map(item => <th key={item.id}>{item.title}</th>)}
                <th colSpan={2}>Action</th>
            </tr>
        </thead>
        <tbody>
            {events.map(item=> <EventItem key={item.id} item={item} onDeleteSuccess={handleDeleteSuccess}/>)}
        </tbody>
    </table>
    
    </>
    )
}