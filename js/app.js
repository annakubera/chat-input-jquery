var user = "Ania";
var messageData = [{
  user: "Pawel",
  text: "Hello"
}, {
  user: "Ania",
  text: "Czesc"
}, {
  user: "Ania",
  text: "Co tam?"
}, {
  user: "Pawel",
  text: "Nic! Wszystko spoko, jakoś leci... :)"
}];

renderMessages(messageData);

$("input").on("keypress", function(event) {
  if(event.keyCode === 13) {
    var text = event.target.value;
    
    sendMessage(text);
    renderMessage(text, user);
    scrollToBottom();
    $(this).val('');
  }
});

// Prints the content of var text to the console 
function sendMessage(text) {
  console.log("Wysyłam " + text);
}

// Renders into the messagePanel all the messages written by the user into the input 
function renderMessage(text, user) {
  var date = new Date();
  var year = date.getFullYear();
  
  $("#messageWrapper").append(
    "<div class='bubble'><p class='user'>" + user + "</p>" + 
    "<p class='text'>" + text + "</p>" +
    "<p class='date'>" + year + "</p></div>"
  ); 
}

// Scrolls all messages to the very last on bottom
function scrollToBottom() {
  var messageWrapperHeight = $("#messageWrapper").height(); 
  $("#messagePanel").scrollTop(messageWrapperHeight);
}

// (At the start of the page) Renders all messages from array of var messageData
function renderMessages() {
  messageData.forEach(function (message) {
    renderMessage(message.text, message.user);
  });
}
