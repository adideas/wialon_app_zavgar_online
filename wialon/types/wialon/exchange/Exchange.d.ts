export interface Exchange extends Object {
  getItemJson(itemId: number, callback: Function): void;
  getJsonExportUrl(object: Object, fileName: String): String;
  getMessagesExportUrl(layerName: String, format: String, compress: Boolean): String;
  getPOIsExportUrl(fileName: String, pois: Array, compress: Boolean): String;
  getZonesExportUrl(fileName: String, zones: Array, compress: Boolean): String;
  importCsv(files: Array, separator: String, callback: Function): void;
  importJson(files: Array, callback: Function): void;
  importPois(resourceId: Number, pois: Array, callback: Function): void;
  importXml(files: Array, callback: Function): void;
  importZones(resourceId: Number, zones: Array, callback: Function): void;
  uploadTachoFile(files: Array, outputFlag: any, callback: Function): void;
  __onImportResult(callback: any, code: any, result: any): void;
  msgExportFormat(): any;
}
