import { Object } from '../../qx/core/Object'

export interface Layer extends Object {
  constructor(data: Object): Layer;
  enabled(): Boolean;
  getBounds(): Array;
  getEnabled(): Boolean;
  getName(): String;
  isEnabled(): Boolean;
  resetEnabled(): void;
  setEnabled(value: Boolean): Boolean;
  toggleEnabled(): Boolean;
  initEnabled(value: Boolean): Boolean;
}
