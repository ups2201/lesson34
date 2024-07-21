import "./view/styles.css";
import {getMessagesList} from "./messagesApi.js"
import {Message} from "./Message";


async function loadMessage(): Promise<Array<Message>> {
    return await getMessagesList() as Promise<Array<Message>>;
}

// https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json?orderBy=%22date%22&limitToLast=20

function onButtonClick() {
    const messages = loadMessage();
    messages.then((success) => {
        console.log(success);
        (success as Array<Message>).forEach((m) => {
            let messDiv = document.createElement("div");
            messDiv.classList.add("container");
            messDiv.innerHTML = `
                <div class="name">${m.name}</div>
                <div class="text"><p>${m.message}</p></div>
                <div class="time-right time">${m.date}</div>
            `;
        document.querySelector('section').append(messDiv);})
    });
}

document.querySelector('.show').addEventListener("click", onButtonClick);

