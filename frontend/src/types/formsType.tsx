type EventInputs = {
    title:string,
    description:string,
    start_date:string,
    end_date:string,
    location:string,
    organizers_id:number,
    status:"draft" | "published" | "cancelled"
}
export type { EventInputs}