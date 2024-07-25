const config = {
  firebaseBaseUrl: "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",
  firebaseCollection: "messages.json",
};

export async function getMessagesList() {
  return fetch(
    `${config.firebaseBaseUrl}/${config.firebaseCollection}?orderBy=%22date%22&limitToLast=20`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  )
    .then((response) => response.json())
    .then((data) =>
      Object.values(data).map((el) => ({
        ...el,
        date: new Date(el.date),
      })),
    );
}

export async function sendMessage(data) {
  return fetch(`${config.firebaseBaseUrl}/${config.firebaseCollection}`, {
    method: "POST",
    body: JSON.stringify({
      ...data,
      date: new Date(),
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

function observeWithXHR(cb) {
  // https://firebase.google.com/docs/reference/rest/database#section-streaming
  const xhr = new XMLHttpRequest();
  let lastResponseLength = 0;

  xhr.addEventListener("progress", () => {
    // console.log("xhr body", xhr.response);
    const body = xhr.response.substr(lastResponseLength);
    lastResponseLength = xhr.response.length;

    const eventType = body.match(/event: (.+)/)[1];
    const data = JSON.parse(body.match(/data: (.+)/)[1]);

    if (eventType === "put") {
      cb(data.data);
    }
  });

  xhr.open(
    "POST",
    `${config.firebaseBaseUrl}/${config.firebaseCollection}`,
    true,
  );
  xhr.setRequestHeader("Accept", "text/event-stream");

  xhr.send();
}

function observeWithEventSource(cb) {
  // https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource
  const evtSource = new EventSource(
    `${config.firebaseBaseUrl}/${config.firebaseCollection}`,
  );

  evtSource.addEventListener("put", (ev) => cb(JSON.parse(ev.data).data));
}

window.sendMessage = sendMessage;
window.getMessagesList = getMessagesList;
window.observeWithXHR = observeWithXHR;
window.observeWithEventSource = observeWithEventSource;
