type EventType = {
    id: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    banner: string;
    thumbnail:string;
    images:string[];
    is_featured:'1'|'0';
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
type PermissionType = {
    id:number,
    name:string,
    guard_name:string
}
type UserType = {
    id:number,
    name:string,
    email:string,
    password:string,
    roles:string[]
}
type NotificationType = {
    id:number,
    receiver:any,
    event:any,
    message:string,
    type:string
}
type TicketType = {
    id:number,
    event:EventType,
    ticket_type:string,
    price:number,
    quantity_available:number,
    quantity_sold:number,
    status:'active'|'inactive',
    created_at:string,
    updated_at:string,
}
export type {OrganizerType,EventType,HeaderType,RoleType,PermissionType,UserType,NotificationType,TicketType}