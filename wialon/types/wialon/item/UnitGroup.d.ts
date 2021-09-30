import { Item } from './Item'
import { Data } from '../../qx/event/type/Data'

export interface UnitGroup extends Item {
  constructor(obj: Object, dataFlags: Number): UnitGroup;
  changeUnits: Data;
  checkUnit(group: Object, unit: Object): Boolean;
  registerProperties(): void;
  remoteUpdateUnits(item: Object, val: Object): void;
  logMessageAction(): any;
  units(): Array;
  getUnits(): Array;
  resetUnits(): void;
  setUnits(value: Array): Array;
  updateUnits(units: Array, callback: Function): void;
  initUnits(value: Array): Array;
}
