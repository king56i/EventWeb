type EventType = {
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
type OrganizerType = {
    id: number;
    name: string;
    contact_info: string;
    description: string;
    created_at: string;
    updated_at: string;
}
type HeaderType = {
    id:number,
    title:string
}
type RoleType = {
    id:number,
    name:string,
    guard_name:string
}
export type {OrganizerType,EventType,HeaderType,RoleType}