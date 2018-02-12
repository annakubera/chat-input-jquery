var user = "Ania";

$("input").on("keypress", function(event) {
  if(event.keyCode === 13) {
    var message = event.target.value;
    
    sendMessage(message);
    renderMessage(message, user);
    scrollToBottom();
    $(this).val('');
  }
});

function sendMessage(message) {
  console.log("Wysyłam " + message);
}

function renderMessage(message, user) {
  var date = new Date();
  var year = date.getFullYear();
  
  $("#messageWrapper").append(
    "<div class='bubble'><p class='user'>" + user + "</p>" + 
    "<p class='message'>" + message + "</p>" +
    "<p class='date'>" + year + "</p></div>"
  );
  
}

function scrollToBottom() {
  var messageWrapperHeight = $("#messageWrapper").height(); 
  $("#messagePanel").scrollTop(messageWrapperHeight);
}