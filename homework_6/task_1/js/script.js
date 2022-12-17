const openedMenu = 'menu menu_sub menu_active';
const closedMenu = 'menu menu_sub';

function hideAllMenus(){
	const m = Array.from(document.querySelectorAll('.menu .menu_sub'));
	m.forEach(elem => {
		elem.className = closedMenu;
	});
}

function showMenu(menuItem){
	menuItem.className = openedMenu;
}

function isMenuShown(menuItem){
	return menuItem.className.includes(' menu_active');
}

Array.from(document.getElementsByClassName('menu__link')).forEach(elem =>{
	elem.onclick = () => {
		// 1. Найти предка
		const par = elem.parentElement;

		// 2. В области предка найти menu_sub
		const el = par.querySelector('.menu .menu_sub');

		// 3. Если оно есть, то показать только одно подменю
		if (el != null){
			let flag = 	isMenuShown(el);
			hideAllMenus();//спрятать все подменю
			if (flag == false){
				showMenu(el);// показать текущее подменю
						// Если же оно уже было показано, то спрятать его.
			}
			return false;//отключение обработчика по умолчанию
		}
	}
});
