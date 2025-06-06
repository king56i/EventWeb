type EventInputs = {
    title:string,
    description:string,
    start_date:string,
    end_date:string,
    location:string,
    organizers_id:number,
    status:"draft" | "published" | "cancelled"
}
type OrganizerInputs = {
    name:string,
    contact_info:string,
    description:string,
}
type RoleInputs = {
    name:string,
    guard_name:string
}
export type { EventInputs, OrganizerInputs, RoleInputs}