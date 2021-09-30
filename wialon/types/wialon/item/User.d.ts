import { Item } from './Item'
import { Data } from '../../qx/event/type/Data'

export interface User extends Item {
  constructor(obj: Object, dataFlags: Number): User;
  changeHostsMask: Data;
  changeLoginDate: Data;
  changeUserFlags: Data;
  userAccessChanged: Data;
  defaultDataFlags(): number;
  registerProperties(): void;
  remoteUpdateAcl(item: Object, val: Object): void;
  remoteUpdateHostsMask(item: Object, val: String): void;
  remoteUpdateLoginDate(item: Object, val: String): void;
  remoteUpdateUserFlags(item: Object, val: Number): void;
  accessDataFlag(): any;
  accessFlag(): any;
  dataFlag(): any;
  logMessageAction(): any;
  userFlag(): any;
  hostsMask(): String;
  loginDate(): number;
  userFlags(): number;
  getHostsMask(): String;
  getItemsAccess(params: Object, callback: Function): void;
  getLocale(callback: Function): void;
  getLoginDate(): number;
  getUserFlags(): number;
  resetHostsMask(): void;
  resetLoginDate(): void;
  resetUserFlags(): void;
  sendPushMessage(appName: String, message: String, params: Object, ttl: number, callback: Function): void;
  setHostsMask(value: String): String;
  setLoginDate(value: number): number;
  setUserFlags(value: number): number;
  updateHostsMask(hostsMask: String, callback: Function): void;
  updateItemAccess(item: Item, accessMask: number, callback: Function): void;
  updateLocale(locale: Object, callback: Function): void;
  updatePassword(oldPassword: String, newPassword: String, callback: Function): void;
  updateUserFlags(flags: number, flagsMask: number, callback: Function): void;
  initHostsMask(value: String): String;
  initLoginDate(value: number): number;
  initUserFlags(value: number): number;
}
