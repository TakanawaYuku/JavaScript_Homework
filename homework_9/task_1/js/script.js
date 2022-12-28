const chatWidget = document.querySelector('.chat-widget');
const inputMessage = document.getElementById('chat-widget__input');
const chat = document.getElementById('chat-widget__messages');

let activity = 0;

const vocab = [
'и вам не хворать',
'приходите попозже',
'обратитесь в соседнее окошко',
'что то у меня вскирел процессор',
'вам везёт',
'у нас переучёт',
];

const welcomeVocab = [
'А где все?',
'Приглашаем в чат :-)',
'Нам очень важно знать Ваше мнение',
'Одиноко, и не с кем поговорить',
];

function getMessage(v){
	return v[Math.floor(Math.random() * v.length)];
}

function getTime(){
	const date = new Date();
	return date.getHours()+':'+date.getMinutes();
}

function clientMessage(s){
	chat.innerHTML += `
		<div class="message message_client">
		<div class="message__time">`+getTime()+`</div>
		<div class="message__text">`+s+`
		</div>
		</div>`;
	chat.scrollIntoView(false);
}

function botMessage(s){
	chat.innerHTML += `
		<div class="message">
		<div class="message__time">`+getTime()+`</div>
		<div class="message__text">`+s+`
		</div>
		</div>`;
	chat.scrollIntoView(false);
}

chatWidget.addEventListener('click', ()=>{
		chatWidget.classList.add('chat-widget_active');
});

chatWidget.addEventListener('keyup', event => {
	activity = 0;
	if (event.code ==='Enter'){
		if (inputMessage.value.length > 0){
			clientMessage(inputMessage.value);
			inputMessage.value = '';
			botMessage(getMessage(vocab));
		}
	}
});

setInterval(() => {
	activity +=1;
	if (activity >= 30){
		activity = 0;
		botMessage(getMessage(welcomeVocab))
	}
},1000);
