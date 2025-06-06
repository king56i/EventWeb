import EventServices from "@src/services/api-events";
import OrganizerServices from "@src/services/api-organizers";
import type { EventType, OrganizerType } from "@src/types/listsType";
import type { Dispatch } from "react";


export async function handleAction<T extends EventType | OrganizerType>(
  action: string,
  checkBoxes: number|number[], 
  list: T[], 
  setList: React.Dispatch<React.SetStateAction<T[]>>, 
  dispatch: Dispatch<any>,
  handleListSuccess: (checkBoxes: number|number[], res: any, list: T[], setList: React.Dispatch<React.SetStateAction<T[]>>) => void
) {
  let res;
  try {
    const ids: number[]= Array.isArray(checkBoxes)? checkBoxes : [checkBoxes];
    switch (action) {
      case "xoaMemEV":
        res = await EventServices.deleteEvent(ids[0]);
        break;
      case "phucHoiEV":
        res = await EventServices.restoreEvent(ids[0]);
        break;
      case "xoaVVEV":
        res = await EventServices.forceDelete(ids[0]);
        break;
      case "xoaMemEVS":
        res = await EventServices.deleteEvents(ids);
        break;
      case "phucHoiEVS":
        res = await EventServices.restoreEvents(ids);
        break;
      case "xoaVVEVS":
        res = await EventServices.deleteForeverEvents(ids);
        break;
      case "xoaOrganizer":
        res= await OrganizerServices.deleteOrganizer(ids[0]);
        break;
      case "xoaOrganizers":
        res = await OrganizerServices.deleteOrganizers(ids);
        break;
      default:
        throw new Error("Hành động không hợp lệ");
    }

    if (res?.data?.success) {
      handleListSuccess(ids, res, list, setList);
      dispatch({ type: "removeAll" });
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  }
}