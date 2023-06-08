var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatcontainer = document.getElementById("chatContainer");

var user = { message: "" };

function SendMessage(userMessage) {
  var messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";
  messageElement.innerHTML =
    "<span> Yo: </span>" + "<span>" + userMessage + "</span>";
  chatcontainer.appendChild(messageElement);
}

function chatResponse(userMessage) {
  var chatbotmessage = "";
  fetch('http://127.0.0.1:3000/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ pregunta: userMessage })
  })
    .then(response => response.json())
    .then(data => {
      chatbotmessage = data.respuesta; 
      var messageElement = document.createElement("div");
      messageElement.style.textAlign = "left";
      messageElement.style.margin = "10px";
      messageElement.innerHTML =
        "<span> ChatBot: </span>" + "<span>" + chatbotmessage + "</span>";
      chatcontainer.scrollTop = chatcontainer.scrollHeight;
      
      messageElement.animate(
        [
          { easing: "ease-in", opacity: 0.4 },
          { opacity: 1 },
          { direction: 1000 },
        ],
        {
          duration: 1000,
          fill: "forwards",
        }
      );

      setTimeout(() => {
        chatcontainer.appendChild(messageElement);
      }, 1000);
    })
    .catch(error => {
      console.error("Error en la solicitud al chatbot:", error);
    });
}

sendBtn.addEventListener("click", function (e) {
  var userMessage = textbox.value;

  if (userMessage == "") {
    textbox.placeholder = "Ingrese texto...";
  } else {
    let userMessageText = userMessage.trim();
    user.message = userMessageText;
    textbox.value = "";
    SendMessage(userMessageText);
    chatResponse(userMessageText);
  }
});
