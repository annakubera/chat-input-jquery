var user = "Ania";

$("input").on("keypress", function(event) {
  if(event.keyCode === 13) {
    var message = event.target.value;
    
    sendMessage(message);
    renderMessage(message, user);
    $(this).val('');
  }
});

function sendMessage(message) {
  console.log("Wysyłam " + message);
}

function renderMessage(message, user) {
  var date = new Date();
  var year = date.getFullYear();
  
  $("#messagePanel").append(
    "<p class='user'>" + user + "</p>" + 
    "<p>" + message + "</p>" +
    "<p class='date'>" + year + "</p>"
  );
  
}
