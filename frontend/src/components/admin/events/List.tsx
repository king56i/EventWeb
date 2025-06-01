import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Item from "./Item";
import { pageContext } from "@src/context/pageContext";
import type { PageData } from "@src/types/pagesType";
export default function List(){
    const { page } = useContext<>(pageContext);
    const [list,setList] = useState<PageData[typeof page]>([]);
    useEffect(()=>{
        const fetchList = async ()=>{
            try {
                const res = await axios.get(`http://localhost:8000/admin/${page}`);
                setList(res.data.data);
            } catch (error) {
                console.error("Lỗi khi gọi API:", error);
            }
        }
        fetchList();
    },[page])
    return (
    <>
        {list.map(item=> <Item key={item.id} item={item} />)}
    </>
    )
}