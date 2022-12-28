const checkbox = Array.from(document.querySelectorAll(".interest__check"))

checkbox[0].addEventListener('change', () => {
   if (checkbox[1].checked && checkbox[2].checked) {
      checkbox[1].checked = false;
      checkbox[2].checked = false;
   } else {
      checkbox[1].checked = true;
      checkbox[2].checked = true;
   }
});

checkbox[3].addEventListener('change', () => {
   if (checkbox[4].checked && checkbox[5].checked) {
      checkbox[4].checked = false;
      checkbox[5].checked = false;
   } else {
      checkbox[4].checked = true;
      checkbox[5].checked = true;
   }
})
