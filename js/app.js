/**
*   Model (database mock)
*
*/

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

/**
*   Function executions on application init
*
*/
 
renderMessages(messageData);

/**
*   Event listeners
*
*/
 
$("input").on("keypress", function(event) {
  if(event.keyCode === 13) {
    var text = event.target.value;
    
    sendMessage(text);
    renderMessage(text, user);
    scrollToBottom();
    $(this).val('');
    // nie potrzebujemy wywoływać funkcji, która usuwa wiadomość w momencie kiedy naciskamy enter
    //removeMessage();
  }
});

/* Potrzebujemy tutaj nowego event listenera takiego jak powyżej, który obsłuży kliknięcie w x
    różnica polega na tym, że musimy zrobić sztuczkę z łapaniem elementu, którego nie ma w DOM, kiedy event listener się aktywuje...
    
    Nadajemy event listener na element BODY - mamy pewność, że body istnieje w tym momencie w HTML już;
    event listener działa tak, że jest kliknięcie 
    w dany element i potem ten click się wywołuje na kolejnych elementach w drzewie, zapis poniżej oznacza, że
    ma szukać od body elementu o klasie .iconXbutton - jeżeli znajdzie go, to ma na nim działać i staje się jego
    faktycznym targetem - to jest bardzo znany trick pattern(!!!)
*/

$("body").on("click", ".iconXbutton", function(event) {
    var message = $(event.target).closest('.bubble');

    removeMessage(message);
});

/**
*   Function definitions
*
*/
 
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
  // odstęp dla czytelności
  if (user === "admin") {
    closeButton = "<button type='button' class='iconXbutton''><i class='fas fa-times'></i></button>"// średnik
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

function removeMessage(message) {
  message.remove();
}
    