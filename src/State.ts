import {User} from "./User";
import {Message} from "./Message";
import {Channel} from "./Channel";

export interface State {
    users: Array<User>;
    messages: Array<Message>;
    channels: Array<Channel>;
}

