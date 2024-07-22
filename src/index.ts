import "./view/styles.css";
import { getMessagesList, sendMessage } from "./messagesApi.js";
import { Message } from "./Message";
import { configureStore } from "./Store";
import { reducer } from "./Reducer";
import { ActionType } from "./Action";
import { State } from "./State";

async function loadMessage(): Promise<Array<Message>> {
  return (await getMessagesList()) as Promise<Array<Message>>;
}

// https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json?orderBy=%22date%22&limitToLast=20

function viewMessages() {
  const messages = loadMessage();
  messages.then((success) => {
    console.log(success);
    store.dispatch({ type: ActionType.SHOW_MESSAGES, payload: success });
    render(store.getState());
  });
}

function submitMessage() {
  const username = (document.querySelector("#username") as HTMLInputElement)
    .value;
  const text = (document.querySelector(".message") as HTMLTextAreaElement)
    .value;
  const date = new Date(Date.now()).getTime();
  const message: Message = {
    name: username,
    text: text,
    date: date,
  };
  store.dispatch({ type: ActionType.SEND_MESSAGE, payload: message });
  sendMessage(message);
  document.querySelector("textarea").value = "";
}

function render(state: State) {
  console.log(state);
  document.querySelector(".messages").remove();
  const messagesDiv = document.createElement("div");
  messagesDiv.classList.add("messages");
  document.querySelector("section div").append(messagesDiv);

  state.messages.forEach((m) => {
    const messDiv = document.createElement("div");
    messDiv.classList.add("container");
    const date = formatDate(new Date(m.date));
    if (m.name === store.getState().currentUsername) {
      messDiv.classList.add("darker");
      messDiv.innerHTML = `
                <div class="name-left">${m.name}</div>
                <div class="text">${m.text}</div>
                <div class="time-right time">${date}</div>
            `;
    } else {
      messDiv.innerHTML = `
            <div class="name-right">${m.name}</div>
            <div class="text">${m.text}</div>
            <div class="time-left time">${date}</div>
        `;
    }
    messagesDiv.append(messDiv);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

setInterval(() => {
  viewMessages();
}, 3000);

function formatDate(date: Date) {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

document.querySelector(".send").addEventListener("click", submitMessage);

const store = configureStore(reducer, {
  users: [],
  messages: [],
  currentUsername: "ups2201",
});
store.subscribe(() => render(store.getState()));

document.querySelectorAll(".smile").forEach((smile) => {
  smile.addEventListener("click", (event) => {
    document.querySelector("textarea").value += (
      event.target as HTMLTextAreaElement
    ).textContent;
  });
});
