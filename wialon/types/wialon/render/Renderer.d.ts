import { Object } from '../../qx/core/Object'
import { Data } from '../../qx/event/type/Data'
import { Layer } from './Layer'

export interface Renderer extends Object {
  constructor(): Renderer;
  changeVersion: Data;
  Hittest(): any;
  MarkerFlag(): any;
  OptionalFlag(): any;
  PoiFlag(): any;
  ZonesFlag(): any;
  reportResult(): Object;
  version(): number;
  createMessagesLayer(params: Object, callback: Function): void;
  createPoiLayer(layerName: String, pois: Array, flags: number, callback: Function): void;
  createZoneByTrack(params: Object, callback: Function): void;
  createZonesLayer(layerName: String, zones: Array, flags: number, callback: Function): void;
  enableLayer(layer: Layer, enable: Boolean, callback: Function): void;
  getLayers(): Array;
  getReportLayer(): Object;
  getReportResult(): Object;
  getTileUrl(x: number, y: number, z: number): String;
  getVersion(): number;
  hitTest(lat: number, lon: number, scale: number, radius: number, layerName: String, flags: number, callback: Function): void;
  removeAllLayers(callback: Function): void;
  removeLayer(layer: Layer, callback: Function): void;
  resetReportResult(): void;
  resetVersion(): void;
  setLocale(tzOffset: number, language: String, locale: Object, callback: Function): void;
  setReportResult(value: Object): Object;
  setVersion(value: number): number;
  initReportResult(value: Object): Object;
  initVersion(value: number): number;
  __applyReportResult(newReportResult: Object): void;
  __onAllLayersRemoved(callback: Function, code: number, result: Object): void;
  __onCreatedMessagesLayer(callback: Function, code: number, result: Object): void;
  __onCreatedSimpleLayer(callback: Function, code: number, result: Object): void;
  __onLayerEnabled(callback: Function, layer: any, code: number, result: Object): void;
  __onRemovedLayer(callback: Function, layer: any, code: number, result: Object): void;
}
