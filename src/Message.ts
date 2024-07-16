import {Channel} from "./Channel";

export type Message = {
    text: string;
    userId: string;
    channel: Channel;
}