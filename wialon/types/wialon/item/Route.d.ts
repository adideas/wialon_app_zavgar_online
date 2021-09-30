import {Item} from "./Item";
import {Data} from "../../qx/event/type/Data";

export interface Route extends Item {
  constructor(obj: Object, dataFlags: Number): Route;

  changeCheckPoints: Data;
  changeConfig: Data;

  registerProperties(): void;
  remoteUpdateCheckPoints(item: Object, val: Number): void;
  remoteUpdateConfig(item: Object, val: Number): void;

  accessFlag(): any;
  dataFlag(): any;
  logMessageAction(): any;
  roundFlag(): any;
  routePointFlag(): any;
  scheduleFlag(): any;
  states(): any;

  checkPoints(): Array;
  config(): Object;

  getCheckPoints(): Array;
  getConfig(): Object;
  getNextRoundTime(scheduleId: number, timeFrom: number, timeTo: number, callback: Function): void;
  getRouteRounds(timeFrom: number, timeTo: number, fullJson: number, callback: Function): void;
  loadRoundsHistory(timeFrom: number, timeTo: number, fullJson: number, callback: Function): void;
  resetCheckPoints(): void;
  resetConfig(): void;
  setCheckPoints(value: Array): Array;
  setConfig(value: Object): Object;
  updateCheckPoints(checkPoints: Object, callback: Function): void;
  updateConfig(config: Object, callback: Function): void;
  initCheckPoints(value: Array): Array;
  initConfig(value: Object): Object;
}
