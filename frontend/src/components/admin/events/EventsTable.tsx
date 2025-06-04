import { useEffect, useReducer, useState } from "react"
import EventItem from "./EventItem";
import type { EventType, HeaderType } from "@src/types/listsType";
import Swal from "sweetalert2";
import { useEventMode } from "@src/context/EventModeContext";
import EventServices from "@src/services/api-events";
export default function EventsTable({headers}:{headers:HeaderType[]}){
    const [events,setEvents] = useState<EventType[]>([]);
    const reducer = (state:number[],action:{type:string,payload:number|number[]})=>{
        switch (action.type){
            case "add":
                return typeof action.payload==="number" ? [...state,action.payload] : state;
            case "remote":
                return typeof action.payload==="number" ?  state.filter(item=>item!== action.payload):state;
            case "addAdd":
                return Array.isArray(action.payload) ? action.payload as number[]:state;
            case "removeAll":
                return [];
            default:
                return state;
        }
    }
    const [checkBoxes,dispatch] = useReducer(reducer,[]);
    const mode = useEventMode();
    console.log(checkBoxes);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = mode ==="active"? await EventServices.getEvents():await EventServices.eventTrash();
                setEvents(res?.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[checkBoxes])
    function handleSuccess(deletedId: number,res:{data:any}){
        setEvents(events.filter(event => event.id !== deletedId));
        if (res.data.success) {
            Swal.fire({
                title: 'Success!',
                text: `${res.data.message}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    }
    return (
    <>
    <table className="table">
        <thead>
            <tr>     
                <th>
                    <label className="container">
                        <input type="checkbox" onClick={(e:any)=>dispatch({type:e.target.checked ? "addAll":"removeAll",payload: events.map(item => item.id)})}/>
                        <div className="checkmark"></div>
                    </label>
                </th>               
                {headers.map(item => <th {...(item.title === "Tiêu Đề" ? { colSpan: 2 } : {})} key={item.id}>{item.title}</th>)}
                <th {...mode == "trash" ? { colSpan: 2 } : {}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {events.map(item=> <EventItem key={item.id} checkBoxes={checkBoxes} dispatch={dispatch} item={item} onSuccess={handleSuccess}/>)}
        </tbody>
    </table>
    
    </>
    )
}