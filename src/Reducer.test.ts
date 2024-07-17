import { User } from "./User";
import { Message } from "./Message";
import { configureStore } from "./Store";
import { reducer } from "./Reducer";
import { ActionType } from "./Action";

describe("Проверка reducer", () => {
  const users: Array<User> = new Array<User>();
  const messages: Array<Message> = new Array<Message>();
  const store = configureStore(reducer, { users: [], messages: [] });

  beforeEach(() => {
    users.push({
      login: "user1",
      password: "password1",
      username: "USER1",
      surname: "SURNAME1",
      lastname: "LASTNAME1",
      birthday: new Date("22.01.1989").getTime(),
    });
    users.push({
      login: "user2",
      password: "password2",
      username: "USER2",
      surname: "SURNAME2",
      lastname: "LASTNAME2",
      birthday: new Date("11.10.1995").getTime(),
    });

    messages.push({ id: "1", userId: "user1", text: "text1" });
    messages.push({ id: "2", userId: "user2", text: "text2" });
    messages.push({ id: "3", userId: "user1", text: "text3" });
  });

  test("Проверка SHOW_MESSAGES", () => {
    store.dispatch({ type: ActionType.SHOW_MESSAGES, payload: messages });
    const expectState = {
      users: [],
      messages: [
        { id: "1", userId: "user1", text: "text1" },
        { id: "2", userId: "user2", text: "text2" },
        { id: "3", userId: "user1", text: "text3" },
      ],
    };

    expect(store.getState()).toEqual(expectState);
  });

  test("Проверка SHOW_NEW_MESSAGE", () => {
    const store = configureStore(reducer, { users: [], messages: messages });
    store.dispatch({
      type: ActionType.SHOW_NEW_MESSAGE,
      payload: { id: "4", userId: "user1", text: "new message" },
    });
    const expectState = {
      users: [],
      messages: [
        { id: "1", userId: "user1", text: "text1" },
        { id: "2", userId: "user2", text: "text2" },
        { id: "3", userId: "user1", text: "text3" },
        { id: "4", userId: "user1", text: "new message" },
      ],
    };

    expect(store.getState()).toEqual(expectState);
  });

  test("Проверка SEND_MESSAGE", () => {
    const store = configureStore(reducer, { users: [], messages: messages });
    store.dispatch({
      type: ActionType.SEND_MESSAGE,
      payload: { id: "4", userId: "user1", text: "new message" },
    });
    const expectState = {
      users: [],
      messages: [
        { id: "1", userId: "user1", text: "text1" },
        { id: "2", userId: "user2", text: "text2" },
        { id: "3", userId: "user1", text: "text3" },
        { id: "4", userId: "user1", text: "new message" },
      ],
    };

    expect(store.getState()).toEqual(expectState);
  });

  test("Проверка DELETE_MESSAGE", () => {
    const store = configureStore(reducer, { users: [], messages: messages });
    store.dispatch({
      type: ActionType.DELETE_MESSAGE,
      payload: { id: "2", userId: "user2", text: "text2" },
    });
    const expectState = {
      users: [],
      messages: [
        { id: "1", userId: "user1", text: "text1" },
        { id: "3", userId: "user1", text: "text3" },
      ],
    };

    expect(store.getState()).toEqual(expectState);
  });

  test("Проверка GET_USERS", () => {
    const store = configureStore(reducer, { users: [], messages: [] });
    store.dispatch({ type: ActionType.GET_USERS, payload: users });
    const expectState = {
      users: [
        {
          login: "user1",
          password: "password1",
          username: "USER1",
          surname: "SURNAME1",
          lastname: "LASTNAME1",
          birthday: new Date("22.01.1989").getTime(),
        },
        {
          login: "user2",
          password: "password2",
          username: "USER2",
          surname: "SURNAME2",
          lastname: "LASTNAME2",
          birthday: new Date("11.10.1995").getTime(),
        },
      ],
      messages: [],
    };

    expect(store.getState()).toEqual(expectState);
  });
});
