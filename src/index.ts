import "./view/styles.css";
import {getMessagesList, sendMessage} from "./messagesApi.js"
import {Message} from "./Message";
import {configureStore} from "./Store";
import {reducer} from "./Reducer";
import {ActionType} from "./Action";
import {State} from "./State";


async function loadMessage(): Promise<Array<Message>> {
    return await getMessagesList() as Promise<Array<Message>>;
}

// https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json?orderBy=%22date%22&limitToLast=20

function viewMessages() {
    const messages = loadMessage();
    messages.then((success) => {
        console.log(success);
        (success as Array<Message>).forEach((m) => {
            let messDiv = document.createElement("div");
            messDiv.classList.add("container");
            messDiv.innerHTML = `
                <div class="name">${m.name}</div>
                <div class="text"><p>${m.text}</p></div>
                <div class="time-right time">${m.date}</div>
            `;
        document.querySelector('section').append(messDiv);})
    });
    // store.dispatch({ type: ActionType.SHOW_MESSAGES, payload: success as Array<Message> })
}

function submitMessage() {
    const username = (document.querySelector('#username') as HTMLInputElement).value;
    const text = (document.querySelector('.message') as HTMLTextAreaElement).value;
    const date = new Date(Date.now()).getTime();
    const message: Message = {
        name: username,
        text: text,
        date: date
    };
    store.dispatch({ type: ActionType.SEND_MESSAGE, payload: message })
    // sendMessage(message);
}


function render(state: State) {
        state.messages.forEach((m) => {
            let messDiv = document.createElement("div");
            messDiv.classList.add("container");
            messDiv.innerHTML = `
                <div class="name">${m.name}</div>
                <div class="text"><p>${m.text}</p></div>
                <div class="time-right time">${m.date}</div>
            `;
            document.querySelector('section').append(messDiv);
        });
            //
            // store.dispatch({ type: ActionType.SHOW_MESSAGES, payload: success as Array<Message> })
            // // console.log(store.getState());

}


document.querySelector('.show').addEventListener("click", viewMessages);
document.querySelector('.send').addEventListener("click", submitMessage);

const store = configureStore(reducer, {users: [], messages: []});
store.subscribe(() => render(store.getState()));
