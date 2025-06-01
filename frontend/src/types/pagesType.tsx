export type EventType = {
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
export type PageData = {
    events:EventType[],
    // organizers:OrganizerType[],
}