import { Layer } from './Layer'

export interface MessagesLayer extends Layer {
  constructor(data: Object): MessagesLayer;
  deleteMessage(unitIndex: number, msgIndex: number, callback: Function): void;
  getFirstPoint(unitIndex: number): Object;
  getLastPoint(unitIndex: number): Object;
  getMaxSpeed(unitIndex: number): number;
  getMessageImageUrl(unitIndex: number, msgIndex: number, nocache: Number): String;
  getMessages(unitIndex: number, indexFrom: number, indexTo: number, callback: Function): void;
  getMessagesCount(unitIndex: number): number;
  getMileage(unitIndex: number): Double;
  getUnitId(unitIndex: number): number;
  getUnitsCount(): number;
  hitTest(params: any, callback: Function): void;
}
