type EventInputs = {
    title:string,
    description:string,
    start_date:string,
    end_date:string,
    location:string,
    banner:FileList,
    thumbnail:FileList,
    images:FileList,
    is_featured:'1'|'0',
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
type PermissionInputs = {
    name:string,
    guard_name:string
}
type UserInputs = {
    name:string,
    email:string,
    password:string,
    roles:string[]
}
type NotificationInputs = {
    user_id:string,
    events_id:number,
    password:string,
    roles:string[]
}

export type { EventInputs, OrganizerInputs, RoleInputs,PermissionInputs,UserInputs, NotificationInputs }