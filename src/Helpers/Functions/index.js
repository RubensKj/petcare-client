export function searchInList(e, inputclassName, divListID, item, title) {
  e.preventDefault();
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById(inputclassName);
  let valueInput = input.value;
  filter = valueInput.toUpperCase();
  ul = document.getElementById(divListID);
  li = ul.getElementsByClassName(item);
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByClassName(title)[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

export function addAnimationToInput() {
  let inputs = document.querySelectorAll('.inputed');
  inputs.forEach(input => {
      if(!input.value) {
          input.style.borderColor = '#fd424f'
          input.classList.add('animation');
      }
  });
}