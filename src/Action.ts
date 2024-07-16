export interface Action<ActionType = any> {
    type: ActionType;
    payload?: any;
}

export enum ActionType {
    SHOW_MESSAGES = "SHOW_MESSAGES",
    SHOW_NEW_MESSAGE = "SHOW_NEW_MESSAGE",
    SEND_MESSAGE = "SEND_MESSAGE",
    DELETE_MESSAGE = "DELETE_MESSAGE",
    GET_USERS = "GET_USERS",
    FIND_MESSAGE = "FIND_MESSAGE"
}