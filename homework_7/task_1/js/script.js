const ar = Array.from(document.getElementsByClassName('dropdown__value'));
if (ar.length >=1){
	let dropDownValue = ar[0];
	let isDropped = false;
	let dropDown = Array.from(document.getElementsByClassName('dropdown__list'));

	function dropDownList(){
		if (isDropped==false)
		{
			dropDown[0].className += ' dropdown__list_active';
			isDropped = true;
		}
		else
		{
			dropDown[0].className = dropDown[0].className.replace(' dropdown__list_active','');
			isDropped = false;
		}
	}

	dropDownValue.addEventListener('click',dropDownList);

	const items = Array.from(document.getElementsByClassName('dropdown__item'));
	if (items.length > 0){
		items.forEach((elem, index) => {
			elem.onclick = () => {
				if (isDropped == true){
					dropDownValue.textContent = Array.from(
						elem.getElementsByClassName('dropdown__link'))[0].textContent.trim();
					dropDownList();
					return false;
				}
			}
		});
	}
}
