import { User } from "./User";
import { Message } from "./Message";

export interface State {
  users: Array<User>;
  messages: Array<Message>;
}
