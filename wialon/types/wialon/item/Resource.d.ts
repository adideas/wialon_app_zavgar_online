import { Item } from './Item'

export interface Resource extends Item {
  constructor(): Resource;
  registerProperties(): void;
  accessFlag(): any;
  dataFlag(): any;
  jobFlags(): any;
  logMessageAction(): any;
  remoteOptimizeFlag(): any;
  getEmailTemplate(callback: Function): void;
  getOrdersNotification(callback: Function): void;
  saveTachoData(driver: any, guid: any, outputFlag: any, callback: Function): void;
  updateEmailTemplate(subject: any, body: any, flags: any, callback: Function): void;
  updateOrdersNotification(params: Object, callback: Function): void;
}
