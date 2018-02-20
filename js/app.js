var user = window.prompt("Hello! What's your name?");
var messageData = [{
  user: "Pawel",
  text: "Hello",
  date: "16 Feb 2018"
}, {
  user: "Ania",
  text: "Czesc",
  date: "17 Mar 2018"
}, {
  user: "Ania",
  text: "Co tam?",
  date: "18 Apr 2018"
}, {
  user: "Pawel",
  text: "Nic! Wszystko spoko, jakoś leci... :)",
  date: "19 May 2018"
}];
 
renderMessages(messageData);

 
$("input").on("keypress", function(event) {
  if(event.keyCode === 13) {
    var text = event.target.value;
    
    sendMessage(text);
    renderMessage(text, user);
    scrollToBottom();
    $(this).val('');
    removeMessage();
  }
});


 
// Prints the content of var text to the console 
function sendMessage(text) {
  console.log("Wysyłam " + text);
}
 
// Renders into the messagePanel all the messages written by the user into the input 
function renderMessage(text, user, date) {
  var time = new Date();
  var closeButton = "";
  
  if (date === undefined) {
    date = time.getFullYear();
  }
  if(user === "admin") {
    closeButton = "<button type='button' class='iconXbutton''><i class='fas fa-times'></i></button>"
  }
      
  $("#messageWrapper").append(
    "<div class='bubble'>" + closeButton +
    "<p class='user'>" + user + "</p>" + 
    "<p class='text'>" + text + "</p>" +
    "<p class='date'>" + date + "</p></div>"
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
    renderMessage(message.text, message.user, message.date);
  });
}

function removeMessage() {
   var button = event.target;
   $("button").on("click", function() {
   $("button.parent()").remove();
     console.log("usuwam wiadomosc");
});
}
 


    