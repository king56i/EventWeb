import type { OrganizerType } from "@src/types/listsType";
import truncateText from "@src/utils/truncateText";

type EventItemProps = {
    item:OrganizerType
};
export default function OrganizerItem({item}:EventItemProps){
    return <tr>
        <td>{truncateText(item.name,100)}</td>
        <td>{truncateText(item.contact_info,100)}</td>
        <td>{truncateText(item.description,100)}</td>
    </tr>
}