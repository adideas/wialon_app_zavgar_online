import { Object } from '../../qx/core/Object'
import { Event } from '../../qx/event/type/Event'
import { Data } from '../../qx/event/type/Data'
import { User } from '../item/User'
import { Item } from '../item/Item'
import { MessagesLoader } from './MessagesLoader'
import { Renderer } from '../render/Renderer'

export interface Session extends Object {
  /* constructor(): Session; */

  featuresUpdated: Event;
  fileUploaded: Data;
  invalidSession: Event;
  serverUpdated: Event;

  getInstance(): Session;

  exportDataFlag: any;

  checkAccessors(params: Object, callback: Function): any;
  checkFeature(feature: String): number;
  checkItemsBilling(items: Array<String>, serviceName: String, accessFlags: number, callback: Function): any;
  createAuthHash(callback: Function): any;
  createResource(creator: User, name: String, dataFlags: number, skipCreatorCheck: number, callback: Function): any;
  createRetranslator(creator: User, name:String, config: Object, dataFlags: number, callback: Function): any;
  createRoute(creator: User, name: String, dataFlags: number, callback: Function): any;
  createUnit(creator: User, name: String, hwTypeId: number, dataFlags: number, callback: Function): any;
  createUnitGroup(creator: User, name: String, dataFlags: number, callback: Function): any;
  createUser(creator: User, name: String, password: String, dataFlags: number, callback: Function): any;
  deleteItem(item: Item, callback: Function): any;
  duplicate(oldSid: number, operateAs: String, continueCurrentSession: Boolean, callback: Function): any;
  etAccountData(fullInfo: Boolean, callback: Function): any;
  getAccountsData(accounts: Array<any>, format: number, callback: Function): void;
  getAjaxVersion(): String;
  getAuthUser(): String;
  getBaseGisUrl(gisType: String): String;
  getBaseUrl(): String;
  getCurrUser(): Object;
  getEvtPollInterval(): number;
  getExportListUrl(parameters: Object): String;
  getFeatures(): Object;
  getFirmwareLibrary(mask: String, callback: Function): void;
  getHiddenLogin(): Boolean;
  getHwCommands(deviceTypeId: Number, unitId: Number, callback: Function): any;
  getHwCommandTemplates(params: Object, callback: Function): any;
  getHwTypes(params: Object, callback: Function): any;
  getIconsLibrary(type: String, flags: number, callback: Function): void;
  getId(): String;
  getItem(itemId: number): Item;
  getItems(itemsType: String): Array<Item>;
  getJsVersion(): String;
  getLibraryFile(path: String): String;
  getMessagesLoader(): MessagesLoader;
  getRenderer(): Renderer;
  getReportTables(callback: Function): any;
  getServerTime(): number;
  getToken(): Object;
  getVersion(): String;
  initSession(baseUrl: String, appDns: String, sessionFlags: number, checkService: any, version: String): Boolean;
  isInitialized(): Boolean;
  isLocal(): Boolean;
  listChangeAccount(params: Object, callback: Function): any;
  listTokens(params: Object, callback: Function): any;
  loadLibrary(libName: String): Boolean;
  login(user: String, password: String, operateAs: String, callback: Function): any;
  loginAuthHash(authHash: String, operateAs: String, callback: Function): any;
  loginToken(token: String, operateAs: String, callback: Function): any;
  logout(callback: Function): any;
  parseSessionData(sessionData: Object): Boolean;
  readLibraryFile(path: String, callback: Function): void;
  registerConstructor(typeName: String, func: Function): void;
  registerProperty(propName: String, func: Function): void;
  resetPasswordPerform(user: String, code: String, callback: Function): any;
  resetPasswordRequest(user: String, email: String, emailFrom: String, url: String, callback: Function): any;
  searchItem(): any;
  searchItems(searchSpec: Object, forceRefresh: number, dataFlags: number, indexFrom: number, indexTo: number, callback: Function, timeout: Number): any;
  sendSms(phoneNumber: String, smsText: String, callback: Function): any;
  setBaseUrl(baseUrl: String): void;
  setEvtPollInterval(evtPollInterval: number): void;
  setLoginHash(loginHash: String): void;
  updateDataFlags(spec: Object, callback: Function): any;
  updateItem(item: Item, itemData: Object): void;
  updateToken(callMode: String, token: Object, callback: Function): any;
  _onItemDeleted(item: Item): void;
  __cleanupSession(sid: String): Boolean;
  __constructItem(itemData: Object, flags: Object): Item;
  __eventsResponse(sid: String, code: number, result: Object): void;
  __onDataFlagsUpdated(callback: Function, code: number, result: Array<Item>): void;
  __onDeleteItem(callback: Function, itemId: number, code: number): void;
  __onLoginResult(callback: Function, code: number, result: Object): void;
  __onSearchItemResult(callback: Function, code: number, result: Object): any;
  __onSearchItemsResult(callback: Function, code: number, result: Object): any;
  __PollEvents(): void;
  __registerItem(item: Item): void;
  __removeItem(item: Item): void;
}
