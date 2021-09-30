import { Object } from '../../qx/core/Object'

export interface ReportResult extends Object {
  constructor(data: Object): ReportResult;
  chartFlag(): any;
  exportFormat(): any;
  layer(): Object;
  getAttachments(): Array;
  getChartUrl(attachmentIndex: number, action: number, width: number, height: number, autoScaleY: Boolean, pixelFrom: number, pixelTo: number, flags: number): String;
  getExportUrl(format: String, parameters: Object): String;
  getLayer(): Object;
  getLayerData(): Object;
  getMapUrl(width: number, height: number): String;
  getMessages(indexFrom: number, indexTo: number, callback: Function): void;
  getPhotoUrl(attachmentIndex: number, border: number): String;
  getRowDetail(tableIndex: number, rowIndex: number, callback: Function): void;
  getStatistics(): Array;
  getTableRows(tableIndex: number, indexFrom: number, indexTo: number, callback: Function): void;
  getTables(): Array;
  getVideoUrl(attachmentIndex: number, callback: Function): void;
  hitTestChart(params: any, callback: Function): void;
  isEmpty(): Boolean;
  isRendered(): Boolean;
  renderJSON(attachmentIndex: number, width: number, useCrop: number, cropBegin: any, cropEnd: any, callback: Function): String;
  resetLayer(): void;
  selectRows(tableIndex: number, config: Object, callback: Function): void;
  setLayer(value: Object): Object;
  initLayer(value: Object): Object;
}
