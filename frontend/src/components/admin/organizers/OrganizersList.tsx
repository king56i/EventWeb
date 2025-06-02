import axios from "axios"
import { useEffect, useState } from "react"
import OrganizerItem from "./OrganizerItem";

import type { OrganizerType } from "@src/types/listsType";
export default function OrganizersList(){
    const [organizers,setOrganizers] = useState<OrganizerType[]>([]);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = await axios.get(`http://localhost:8000/api/admin/organizers`);
                setOrganizers(res.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[])
    return (
    <>
        {organizers.map(item=> <OrganizerItem key={item.id} item={item} />)}
    </>
    )
}