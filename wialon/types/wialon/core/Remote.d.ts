import { Object } from '../../qx/core/Object'

export interface Remote extends Object {
  BatchFlag: any;
  constructor(): Remote;
  getInstance(): Remote;
  ajaxRequest(url: String, params: Map, callback: Function, timeout: number, service: String): any;
  createFullUrl(url: String): String;
  finishBatch(callback: Function, owner: String, flags: number): void;
  getTimeout(): number;
  jsonRequest(url: String, params: Map, callback: Function, timeout: number, cbname: String): void;
}
