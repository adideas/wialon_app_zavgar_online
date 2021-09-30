import Object from '../../core/Object'

export interface Data extends Object {
  constructor(): Data;
  clone(embryo: Data): Data;
  getData(): any;
  getOldData(): any;
  init(data: any, old: any, cancelable: Boolean): Data;
}
