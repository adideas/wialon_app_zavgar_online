import { Item } from './Item'
import { Data } from '../../qx/event/type/Data'

export interface Retranslator extends Item {
  constructor(obj: Object, dataFlags: Number): Retranslator;

  changeConfig: Data;
  changeOperating: Data;
  changeStopTime: Data;
  changeUnits: Data;
  registerProperties(): void;
  remoteUpdateConfig(item: Object, val: Number): void;
  remoteUpdateOperating(item: Object, val: Number): void;
  remoteUpdateStopTime(item: Object, val: Number): void;
  remoteUpdateUnits(item: Object, val: Number): void;
  accessFlag(): any;
  dataFlag(): any;
  logMessageAction(): any;
  config(): Object;
  operating(): Boolean;
  stopTime(): number;
  units(): Object;
  getConfig(): Object;
  getOperating(): Boolean;
  getStatistics(callback: Function): void;
  getStopTime(): number;
  getUnits(): Object;
  isOperating(): Boolean;
  resetConfig(): void;
  resetOperating(): void;
  resetStopTime(): void;
  resetUnits(): void;
  setConfig(value: Object): Object;
  setOperating(value: Boolean): Boolean;
  setStopTime(value: number): number;
  setUnits(value: Object): Object;
  toggleOperating(): Boolean;
  updateConfig(config: Object, callback: Function): void;
  updateOperating(params: Object, callback: Function): void;
  updateOperatingWithTimeout(operate: Boolean, timeout: number, modeTime: Boolean, callback: Function): void;
  updateUnits(units: Array, callback: Function): void;
  initConfig(value: Object): Object;
  initOperating(value: Boolean): Boolean;
  initStopTime(value: number): number;
  initUnits(value: Object): Object;
}
