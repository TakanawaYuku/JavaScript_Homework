const rotator = Array.from(document.getElementsByClassName('rotator'));


setInterval(
() => {
	rotator.forEach(elem => {
		for (let child of elem.children){
			if (child.classList.contains('rotator__case_active') == true){
				child.classList.remove('rotator__case_active');
				if (child.nextElementSibling){
					child.nextElementSibling.classList.add('rotator__case_active');
					break;
				}
				else
				{
					elem.firstElementChild.classList.add('rotator__case_active');
					break;
				}
			}
		}
	});

},
1000);
