export interface Object extends Object {
  constructor(): Object;
  addListener(type: String, listener: Function, self: Object, capture: Boolean): String;
  addListenerOnce(type: String, listener: Function, self: Object, capture: Boolean): String;
  assert(condition: any, msg: String): void;
  assertArgumentsCount(args: arguments, minCount: number, maxCount: number, msg: String): void;
  assertArray(value: any, msg: String): void;
  assertArrayEquals(expected: Array, found: Array, msg: String): void;
  assertBoolean(value: any, msg: String): void;
  assertCssColor(expected: String, value: String, msg: String): void;
  assertElement(value: any, msg: String): void;
  assertEquals(expected: any, found: any, msg: String): void;
  assertEventFired(obj: Object, event: String, invokeFunc: Function, listener: Function, msg: String): void;
  assertEventNotFired(obj: Object, event: String, invokeFunc: Function, msg: String): void;
  assertException(callback: Function, exception: Error, ): void;
  assertFalse(value: Boolean, msg: String): void;
  assertFunction(value: any, msg: String): void;
  assertIdentical(expected: any, found: any, msg: String): void;
  assertInArray(value: any, array: Array, msg: String): void;
  assertInRange(value: any, min: Number, max: Number, msg: String): void;
  assertInstance(value: any, clazz: any, msg: String): void;
  assertnumber(value: any, msg: String): void;
  assertInterface(value: any, iface: any, msg: String): void;
  assertJsonEquals(expected: any, found: any, msg: String): void;
  assertKeyInMap(value: any, map: Map, msg: String): void;
  assertMap(value: any, msg: String): void;
  assertMatch(str: String, re: RegExp, msg: String): void;
  assertNotEquals(expected: any, found: any, msg: String): void;
  assertNotIdentical(expected: any, found: any, msg: String): void;
  assertNotNull(value: any, msg: String): void;
  assertNotUndefined(value: any, msg: String): void;
  assertNull(value: any, msg: String): void;
  assertNumber(value: any, msg: String): void;
  assertObject(value: any, msg: String): void;
  assertPositivenumber(value: any, msg: String): void;
  assertPositiveNumber(value: any, msg: String): void;
  assertQxObject(value: any, msg: String): void;
  assertQxWidget(value: any, msg: String): void;
  assertRegExp(value: any, msg: String): void;
  assertString(value: any, msg: String): void;
  assertTrue(value: Boolean, msg: String): void;
  assertType(value: any, type: String, msg: String): void;
  assertUndefined(value: any, msg: String): void;
  base(args: arguments, anyargs: any): any;
  bind(sourcePropertyChain: String, targetObject: Object, targetProperty: String, options: Map): any;
  clone(): Object;
  debug(anyargs: any): void;
  dispatchEvent(evt: Event): Boolean;
  dispose(): void;
  error(anyargs: any): void;
  fail(msg: String, compact: Boolean): void;
  fireDataEvent(type: String, data: any, oldData: any, cancelable: Boolean): Boolean;
  fireEvent(type: String, clazz: any, args: Array): Boolean;
  fireNonBubblingEvent(type: String, clazz: any, args: Array): Boolean;
  get(prop: String): any;
  getBindings(): Array;
  getUserData(key: String): Object;
  hasListener(type: String, capture: Boolean): Boolean;
  info(anyargs: any): void;
  isDisposed(): Boolean;
  removeAllBindings(): void;
  removeBinding(id: any): void;
  removeListener(type: String, listener: Function, self: Object, capture: Boolean): Boolean;
  removeListenerById(id: String): Boolean;
  removeRelatedBindings(relatedObject: Object): void;
  reset(prop: String): void;
  self(args: arguments): any;
  set(): Object;
  setUserData(key: String, value: Object): void;
  toHashCode(): number;
  toString(): String;
  trace(): void;
  warn(anyargs: any): void;
  _disposeArray(field: String): void;
  _disposeMap(field: String): void;
  _disposeObjects(anyargs: arguments): void;
  _disposeSingletonObjects(anyargs: arguments): void;
  __logMessage(level: String, anyargs: arguments): void;
}
