import {User} from "./User";

export type Channel = {
    name: string;
    users: Array<User>;
    isShow: boolean;
}