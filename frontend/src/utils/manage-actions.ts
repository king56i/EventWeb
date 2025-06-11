import EventServices from "@src/services/api-events";
import NotificationServices from "@src/services/api-notification";
import OrganizerServices from "@src/services/api-organizers";
import PermissionServices from "@src/services/api-permissions";
import RoleServices from "@src/services/api-roles";
import UserServices from "@src/services/api-users";
import type { EventType, NotificationType, OrganizerType, PermissionType, RoleType, UserType } from "@src/types/listsType";
import type { Dispatch } from "react";


export async function handleAction<T extends EventType | OrganizerType | RoleType | PermissionType | UserType | NotificationType>(
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
      case "xoaRole":
        res= await RoleServices.deleteRole(ids[0]);
        break;
      case "xoaRoles":
        res = await RoleServices.deleteRoles(ids);
        break;
      case "xoaPerm":
        res= await PermissionServices.deletePermission(ids[0]);
        break;
      case "xoaPerms":
        res = await PermissionServices.deletePermissions(ids);
        break;
      case "xoaUser":
        res= await UserServices.deleteUser(ids[0]);
        break;
      case "xoaUsers":
        res = await UserServices.deleteUsers(ids);
        break;
      case "xoaNotifications":
        res = await NotificationServices.deleteNotifications(ids);
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