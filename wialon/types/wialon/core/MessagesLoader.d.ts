import { Object } from '../../qx/core/Object'

export interface MessagesLoader extends Object {
  packedFiltration: any;
  constructor (): MessagesLoader;
  deleteMessage (msgIndex: number, callback: Function): any;
  getMessageFile (msgIndex: number, fileName: string): string;
  getMessages (indexFrom: number, indexTo: number, callback: Function): any;
  getPackedMessages (itemId: number, timeFrom: number, timeTo: number, filtrationFlags: number, callback: Function): any;
  loadInterval (itemId: number, timeFrom: number, timeTo: number, flags: number, flagsMask: number, loadCount: number, callback: Function): any;
  loadLast(itemId: number, lastTime: number, lastCount: number, flags: number, flagsMask: number, loadCount: number, callback: Function): any;
  unload(callback: Function): any;
}
