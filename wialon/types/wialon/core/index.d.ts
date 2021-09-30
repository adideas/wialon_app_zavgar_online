import { Errors } from './Errors'
import { MessagesLoader } from './MessagesLoader'
import { NodeHttp } from './NodeHttp'
import { PostMessage } from './PostMessage'
import { Remote } from './Remote'
import { Session } from './Session'
import { Uploader } from './Uploader'

export interface core {
  Errors: Errors;
  MessagesLoader: MessagesLoader;
  NodeHttp: NodeHttp;
  PostMessage: PostMessage;
  Remote: Remote;
  Session: Session;
  Uploader: Uploader
}
