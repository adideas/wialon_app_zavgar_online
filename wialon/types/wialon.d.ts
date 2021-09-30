import { core } from './wialon/core'
import { exchange } from './wialon/exchange'
import { item } from './wialon/item'
import { render } from './wialon/render'
import { report } from './wialon/report'

export interface wialon {
  core: core;
  exchange: exchange;
  item: item;
  render: render;
  report: report;
}
