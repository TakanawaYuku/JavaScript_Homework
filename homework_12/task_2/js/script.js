const popup = document.getElementById('subscribe-modal');
const closePopup = popup.firstElementChild.firstElementChild;

function setCookie(name, value){
	document.cookie = name + '='+encodeURIComponent(value);
}

function getCookie(name){
	if (document.cookie.length>0){
		const pairs = document.cookie.split('; ');
		const cookie = pairs.find( p=> p.startsWith(name+'='));
		return cookie.substr(name.length+1);
	}
	else
	{
		return '';
	}
}

closePopup.addEventListener('click',event =>{
	popup.classList.remove('modal_active');
	setCookie('task2-home-work','closed');
});

if (getCookie('task2-home-work').length == 0){
	popup.classList.add('modal_active');
};
