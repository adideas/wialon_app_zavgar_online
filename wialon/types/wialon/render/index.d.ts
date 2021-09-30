import { Layer } from './Layer'
import { MessagesLayer } from './MessagesLayer'
import { Renderer } from './Renderer'

export interface render {
  Layer: Layer;
  MessagesLayer: MessagesLayer;
  Renderer: Renderer;
}
