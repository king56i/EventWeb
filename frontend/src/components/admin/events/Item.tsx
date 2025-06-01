import type { EventType } from "@src/types/pagesType";

type EventItemProps = {
    item:EventType
};
export default function Item({item}:EventItemProps){
    function truncateText(text: string, maxLength = 25): string {
  if (!text) return "";
  return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
}
    return <tr>
        <td>{truncateText(item.title)}</td>
        <td>{truncateText(item.description)}</td>
        <td>{truncateText(item.start_date)}</td>
        <td>{truncateText(item.end_date)}</td>
        <td>{truncateText(item.location)}</td>
        <td>{truncateText(item.organizer.name)}</td>
        <td>{truncateText(item.status)}</td> 
    </tr>
}