const currentTabSet = document.getElementById('tabs1');

const tabs = Array.from(currentTabSet.getElementsByClassName('tab'));
const tabContents = Array.from(currentTabSet.getElementsByClassName('tab__content'));

function unSelect(c, classStr){
	c.forEach(elem => {
		elem.className = elem.className.replace(classStr,'');
	});
}

tabs.forEach((elem, index) => {
	elem.onclick = () => {
		currentTab = index;
		unSelect(tabs,' tab_active');
		unSelect(tabContents,' tab__content_active');
		elem.className += ' tab_active';
		tabContents[index].className += ' tab__content_active';
	}
});
