const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const signin = document.getElementById('signin__form');
const login = signin.firstElementChild.firstElementChild;
const passwd = signin.firstElementChild.nextElementSibling.firstElementChild;
const signOut = document.getElementById('signout__btn');

const KEY = 'task3-home-work-userID';

if (signin.classList.contains('signin_active') == false){
	signin.classList.add('signin_active');
}

document.forms.signin__form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (localStorage.getItem(KEY)){
		alert('Пользователь уже здесь');
	}
	else
	{
		const xhr = new XMLHttpRequest();
		xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth', true);

		xhr.onload = () => {
			if (xhr.status===200){
				if (JSON.parse(xhr.response).success) {
					let d = JSON.parse(xhr.response).user_id;
					localStorage.setItem(KEY, d);
					userId.innerText = d;
					welcome.classList.add('welcome_active');
				}
				else
				{
					alert('Неверный логин/пароль');
				}
			}
			else{
				alert(xhr.statusText)
			}
		}

		let data = new FormData(document.forms.signin__form);
		login.value='';
		passwd.value='';
		xhr.send(data);
	}
});

signOut.addEventListener('click', (e) => {
	e.preventDefault();
	localStorage.removeItem(KEY);
	welcome.classList.remove('welcome_active');
});
