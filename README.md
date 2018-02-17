Chat APP

version 0.0.1

## Chat

# 17 Feb 2018

1. Ikony i usuwanie wiadomości jako administrator.
==================================================

- Dodamy, super funkcję dostępną tylko dla admina :) będzie mógł usuwać wiadomości z czatu jak kliknie w przycisk “x” umieszczony w wiadomości

Co potrzebujemy?

a) potrzebujemy wyświetlać button/link z ładną ikonką “X” na początek w każdej wiadomości. W tym celu możemy podpiąć zewnętrzną bibliotekę z ikonkami np. fontAwesome - to jest najpopularniejsza biblioteka z ikonami open source:

https://fontawesome.com/

Dodawanie ikon to jest też całe zagadnienie, można ściągać i trzymać pojedyncze ikony w katalogu assets/ albo img/ albo images/ etc. i stamtąd wpisując bezpośrednio do kodu URLe do nich. Albo tak jak w tym przypadku -  podepniemy sobie poprostu link z neta i będą dostępne zawsze jak będziesz online. Tu jest opisane jak używać fontawesome (interesuje nas sposób z podpięciem przez external link):

https://fontawesome.com/get-started

Przycisk powinien być wystylowany, w ten sposób żeby pojawił się doładnie 16px od górnej i prawej krawędzi message'a.

b) musimy dodać obsługę przycisku: na kliknięcie w "X" - usuń tę wiadomość (usuń tego(this) diva z chmurką i całą zawartością). 

Zrobimy to używając jQuery żeby się nie zajechać zbytnio, dodając event listener on click i funkcję removeMessage() - wszystko analogicznie jak przy wysyłaniu wiadomości! 

Jak złapać cały message który chcemy usunąć korzystając z metody jQuery remove() ?
Korzystamy znów z jQuery: parent() czyli mamy coś takiego, że startujemy od naszego przycisku:

var button = event.target;

teoretycznie też, zadziała drugi sposób:

var button = $(this) -> bo to jest "TEN" element na którym wykonaliśmy event (kliknęliśmy w niego) i wewnątrz funkcji callback on się podstawia pod keyword "this".

potem, coś w stylu:

button.parent().parent() albo button.parent() (w zależności ile potrzebujemy iść razy do góry etc. i wtedy idziemy po drzewku DOM do góry - wybieramy sobie element, który chcemy i na koniec dodajemy jeszcze metodę: .remove() bo chcemy ten element przecież usunąć z DOM.

c) Na koniec całą tę funkcjonalność ograniczymy tylko do sytuacji, jeżeli user będzie się nazywał "admin" - w tym sensie, że tylko wtedy będziemy wyświetlać X w wiadomości, żeby nie mylić innych userów. Czyli w funkcji renderMessage musimy owarunkować tę część HTML która dodaje naszego X’a coś ala:

// na początku deklarujemy tylko zmienną
var closeButton = null;

if (user === ‘admin’) {
	closeButton = // kod wstawiający przycisk X w message '< jakiś html >'
}

//implementacja buttona w naszym HTML

"<div class='bubble'>" + closeButton + "<p class='user'>" + user... itd.


# 15 Feb 2018

1. Implementacja .gitignore
===========================

Dokumentacja: https://help.github.com/articles/ignoring-files/

Zapoznaj się z dokumentacją.

W głównym katalogu projektu utwórz plik o nazwie “.gitignore” (z termianala!):

```
touch .gitignore
```

Wyedytuj ten plik podając ścieżkę do pliku, którego nie chcesz, aby git commitował - chodzi o plik index.sublime-workspace  - tak naprawdę wystarczy, że wpiszesz po prostu nazwę tego pliku, bo jest w tym samym katalogu co .gitignire i wszycho.

Gdybyś w przyszłości chciała “zignorować” pliki np. wszystkie pliki w  katalogu js to w nowej linii dopiszesz:

js/

Możesz też doprecyzować jakie typy plików ignorować np. wszystkie pliki .js w js będzie:

```
js/*.js
```

itd.

Jak przetestować czy działa?

- wejdź na githuba z przeglądarki i usuń plik index.sublime-workspace (upewnij się, że nie ma go już w repozytorium zdalnym na githubie)
- przy następnym commit/pushu zmian do githuba z lokalnego repo, plik index.sublime-workspace nie powinien już trafić na githuba, dzięki temu, że istnieje wpis z referencją do pliku w .gitignore

2. window.prompt()  - okienko z prośbą o podanie nazwy usera do czatu
=====================================================================

Dokumentacja: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

do tej pory na sztywno mamy wbite, że userem jest Ania. Podstaw pod tę zmienną okienko prompt, zgodnie z dokumentacją. Wtedy po odświeżeniu strony, będzie padać pytanie o nazwę usera, to co wpiszesz będzie się podstawiać pod user i będzie się wyświetlać w wysłanych przez usera wiadomościach.


3. Zadanie “na szóstkę” - zagadnienie: defaultowe wartości dla argumentów funkcji
=================================================================================

Rozszerz model wiadomości w messageData o dodatkowy “property” (właściwość): "date" - nadaj każdej wiadomości jakiś string reprezentujący datę np. date: "17 Jul 2018". Analogiczne rozszerz funkcję renderMessage o trzeci parametr “date"

Gdzie jest HACZYK? ;)

Zwróć uwagę, że używasz funkcji renderMessage() dwa razy - w momencie wysłania wiadomości, nie będziesz przekazywać date jako trzeci parametr tylko będziesz ją generować jako datę z obiektu Date.

W drugim wywołaniu - tam gdzie renderujesz historię messages z modelu, tam będziesz dostarczać datę jako trzeci argument.

Trzeba więc zrobić dodatkowy if conditional w środku funkcji renderMessage(), który sprawdzi czy przekazałaś date czy nie. 

Jeżeli date === undefined to { date = Date.getFullYear() }

Dzięki temu zabezpieczysz się przed tym błędem w consoli, który miałaś wcześniej z "userem", że był undefined. To jest bardzo częsty wzorzec stosowwany.


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

