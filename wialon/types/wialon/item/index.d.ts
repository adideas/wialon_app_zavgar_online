import { Item } from './Item'
import { PluginsManager } from './PluginsManager'
import { Resource } from './Resource'
import { Retranslator } from './Retranslator'
import { Route } from './Route'
import { Unit } from './Unit'
import { UnitGroup } from './UnitGroup'
import { User } from './User'

export interface item {
  Item: Item;
  PluginsManager: PluginsManager;
  Resource: Resource;
  Retranslator: Retranslator;
  Route: Route;
  Unit: Unit;
  UnitGroup: UnitGroup;
  User: User;
}
