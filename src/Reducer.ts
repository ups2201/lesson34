import { Action, ActionType } from "./Action";
import { State } from "./State";
import { Message } from "./Message";
import { User } from "./User";

export type Reducer<State, Action> = (state: State, action: Action) => State;

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.SHOW_MESSAGES: {
      const newState = structuredClone(state);
      const messages = action.payload as Array<Message>;
      newState.messages = messages;
      return newState;
    }
    case ActionType.SHOW_NEW_MESSAGE: {
      const newState = structuredClone(state);
      const message = action.payload as Message;
      newState.messages.push(message);
      return newState;
    }
    case ActionType.SEND_MESSAGE: {
      const newState = structuredClone(state);
      const message = action.payload as Message;
      newState.messages.push(message);
      return newState;
    }
    case ActionType.DELETE_MESSAGE: {
      const newState = structuredClone(state);
      const message = action.payload as Message;
      newState.messages = newState.messages.filter((mes) => mes !== message);
      return newState;
    }
    case ActionType.FIND_MESSAGE: {
      const newState = structuredClone(state);
      const findText = action.payload as string;
      newState.messages = newState.messages.filter((message) =>
        message.text.includes(findText),
      );
      return newState;
    }
    case ActionType.GET_USERS: {
      const newState = structuredClone(state);
      const users = action.payload as Array<User>;
      newState.users = users;
      return newState;
    }
    default:
      return state;
  }
}
