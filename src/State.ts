import {User} from "./User";
import {Message} from "./Message";
import {Channel} from "./Channel";

interface Workspace {
    id: string;
    channels: Array<Channel>;
    users: Array<User>;
}

export interface State {
    currentWorkspace: string;
    currentChannel: string;
    currentUser: string;
    users: Array<User>;
    messages: Array<Message>;
    channels: Array<Channel>;
    workspaces: Array<Workspace>
}

