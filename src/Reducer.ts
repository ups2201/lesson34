import {Action, ActionType} from "./Action";
import {State} from "./State";
import {Message} from "./Message";
import {User} from "./User";

export function reducer1(state: State, action: { type: string; payload: Message }) {
    switch (action.type) {
        case ActionType.SHOW_NEW_MESSAGE: {
            const newState = structuredClone(state);
            newState.messages.push(action.payload);
            return newState;
        }
        case ActionType.DELETE_MESSAGE: {
            const newState = structuredClone(state);
            newState.messages = newState.messages.filter(message => message !== action.payload);
            return newState;
        }
    }
}

export function reducer2(state: State, action: { type: string; payload: Array<Message> }) {
    switch (action.type) {
        case ActionType.SHOW_MESSAGES: {
            const newState = structuredClone(state);
            newState.messages = action.payload;
            return newState;
        }
    }
}

export function reducer3(state: State, action: { type: string; payload: string }) {
    switch (action.type) {
        case ActionType.FIND_MESSAGE: {
            const newState = structuredClone(state);
            newState.messages = newState.messages.filter(message => message.text.includes(action.payload));
            return newState;
        }
    }
}

export function reducer4(state: State, action: { type: string; payload: Array<User> }) {
    switch (action.type) {
        case ActionType.GET_USERS: {
            const newState = structuredClone(state);
            newState.users = action.payload;
            return newState;
        }
    }
}