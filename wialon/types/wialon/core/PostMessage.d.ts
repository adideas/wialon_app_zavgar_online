import { Object } from '../../qx/core/Object'

export interface PostMessage extends Object {
  constructor(url: String): PostMessage;
  send(url: String, params: Map, success: Function, error: Function, timeout: number): void;
  supportAsync(): Boolean;
  __frameLoaded(): void;
  __recieveMessage(event: Object): void;
  __timeout(id: number): void;
  __urlEncodeData(data: Object): String;
}
