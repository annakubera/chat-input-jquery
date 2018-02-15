Chat APP

version 0.0.1

## Chat

# 12 Feb 2018


1. Na start chata Wyświetlić wszystkie wiadomości z danych dostarczonych w zmiennej "messageData"
================================================================================================

a) Na samej górze (pod zmienną "user") utwórz nową zmienną "messageData" i przypisz jej tę tablicę z obiektami - każdy obiekt reprezentuje dane dla pojedynczej wiadomości - w takiej strukturze będziemy przechowywać wiadomości:

```
[{
	user: "Pawel",
	message: "Hello"
}, {
	user: "Ania",
	message: "Czesc"
}, {
	user: "Ania",
	message: "Co tam?"
}, {
	user: "Pawel",
	message: "Nic! Wszystko spoko, jakoś leci... :)"
}];
```

b) Array i dostępne metody dla array np. forEach(), filter(), find()

- utwórz nową funkcję o nazwie: renderMessages(), która będzie przyjmować parametr "messageData":
- wywołuj tę funkcję od razu na samym początku, czyli w kodzie zaraz po deklaracjach zmiennych

renderMessages(messageData);

- w środku funkcji napisz instrukcję, która wywoła napisaną i używaną przez nas już wcześniej funkcję renderMessage(message, user) 4 razy czyli dla każdej wiadomości, którą mamy w tablicy. W ten sposób po wejściu stronę, powinny nam się wyświetlać wszystkie wiadomości z naszej tablicy messageData w messagePanelu...

przykład trywialny, robiący mniej więcej to samo:

```
var numbers = [
{
	value: 14
}, {
	value: 27
}, {
	value: 56
}];

numbers.forEach(function(number) {
	showValue(number.value);
});

function showValue(value) {
	console.log(value);
}
```


2. Poprawki [code review]
=========================

CSS

- nadać bardziej unikalną klasę CSS dla inputa (klasa "input" jest zbyt generyczna, bo zaraz będziesz dodawać 10 innych inputów i będziesz chciała je wystylować inaczej, lepsza będzie np. "messageInput")
- zmienić selector z "input" :hover i :focus na klasę inputa - bo obecnie stylujesz tag HTML input, jak dodasz potem 10 innych inputów to każdy input będzie miał zawsze te style, a jak zrobisz np. .messageInput:hover to wtedy jesteś pewna, że stylujesz tylko ten konkretny input z tą klasą

HTML

- popraw strukturę kodu, wcięcia wszędzie, usuń "blank lines" - niepotrzebne przerwy, żeby wyglądało to mniej więcej tak:

```
<!DOCTYPE html>
<html>
<head>
  	<meta charset="utf-8">
  	<meta name="viewport" content="width=device-width">
  	<title>JS Bin</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<input type="text" placeholder="enter message" class="input">
  	<div id="messagePanel" class="messagePanel">
  		<div id="messageWrapper"></div>
  	</div>
	<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="js/app.js"></script>
</body>
</html>
```

JS

- usuń zbędne console.logi po pracy
- dodaj komentarze po angielsku nad każdą deklaracją funkcji co dana funkcja robi np.
- sprawdź czy masz wszędzie średniki

```
// Scrolls all messages to the very last on bottom
function scrollToBottom() {
  var messageWrapperHeight = $("#messageWrapper").height();
  
  $("#messagePanel").scrollTop(messageWrapperHeight);
}
```
