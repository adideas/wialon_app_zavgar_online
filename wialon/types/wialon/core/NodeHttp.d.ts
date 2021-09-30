import { Object } from '../../qx/core/Object'

export interface NodeHttp extends Object {
  constructor(url: String): NodeHttp;
  send(url: String, params: Map, success: Function, error: Function, timeout: number): void;
  supportAsync(): Boolean;
  __postMessage(counter: number): void;
  __recieveMessage(counter: number): void;
  __recieveMessagePart(counter: number, data: String): void;
  __timeout(counter: number): void;
  __urlEncodeData(data: Object): String;
}
