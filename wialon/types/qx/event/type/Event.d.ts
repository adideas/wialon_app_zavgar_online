import Object from '../../core/Object'

export interface Event extends Object {
  constructor(): Event;
  AT_TARGET(): any;
  BUBBLING_PHASE(): any;
  CAPTURING_PHASE(): any;
  clone(embryo: Event): Event;
  getBubbles(): Boolean;
  getCurrentTarget(): Element;
  getDefaultPrevented(): Boolean;
  getEventPhase(): number;
  getOriginalTarget(): Element;
  getPropagationStopped(): Boolean;
  getRelatedTarget(): Element;
  getTarget(): Element;
  getTimeStamp(): number;
  getType(): String;
  init(canBubble: Boolean, cancelable: Boolean): Event;
  isCancelable(): Boolean;
  preventDefault(): void;
  setBubbles(bubbles: Boolean): void;
  setCancelable(cancelable: Boolean): void;
  setCurrentTarget(currentTarget: Element): void;
  setEventPhase(eventPhase: number): void;
  setOriginalTarget(originalTarget: Element): void;
  setRelatedTarget(relatedTarget: Element): void;
  setTarget(target: Element): void;
  setType(type: String): void;
  stop(): void;
  stopPropagation(): void;
}
