import { Object } from '../../qx/core/Object'

export interface Uploader extends Object {
  constructor(): Uploader;
  getInstance(): Uploader;
  uploadFiles(files: Array, svc: String, params: Object, callback: Function, processResult: Boolean, timeout: number): Boolean;
  __onFileUploaded(event: any): void;
  __uploadCallback(params: any, event: any): void;
}
