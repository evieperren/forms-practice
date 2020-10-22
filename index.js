const secondDropdown = document.querySelector('#category')
const allContentBlocks = document.querySelectorAll('.toggle-content')

var show = function (elem) {
  elem.classList.add('is-visible');
  elem.classList.remove('is-hidden');
};
var hide = function (elem) {
  elem.classList.add('is-hidden');
  elem.classList.remove('is-visible');
};

function displayContentAfterInitialDropdown(){
  const select = document.querySelector('#filter')
  hide(secondDropdown)

  for( let i= 0; i < allContentBlocks.length; i++){
    hide(allContentBlocks[i])
  }
  select.addEventListener('change', function(event) {
    const selectedItem = event.target[event.target.selectedIndex]
    selectedItem.selected = true

    const selectedAttr = selectedItem.getAttribute('data-filter');

    const dropdownItems = document.querySelectorAll("[data-category]")
    for(let i = 0; i < dropdownItems.length; i++){
      hide(dropdownItems[i])
    }
    filterSecondDropdown(selectedAttr)
  })
}


function filterSecondDropdown(selectedAttr){
  const correspondingDropdownEntries = document.querySelectorAll("[data-category="+ selectedAttr +"]")
  for(let k = 0; k < correspondingDropdownEntries.length; k++){
    show(correspondingDropdownEntries[k])
  }
  show(secondDropdown)

}
function displayContentAfterSecondDropdown(){
  const select = document.querySelector('#category')
  select.addEventListener('change', function(event) {
    const selectedItem = event.target[event.target.selectedIndex]
    selectedItem.selected = true 

    const selectedAttr = event.target[event.target.selectedIndex].value;
    
    const correspondingDropdownEntry = document.querySelector('#' + selectedAttr)

    
    for( let i= 0; i < allContentBlocks.length; i++){
      hide(allContentBlocks[i])
    }
    show(correspondingDropdownEntry)
    show(correspondingDropdownEntry.parentElement)
  })

}
displayContentAfterInitialDropdown()
displayContentAfterSecondDropdown()


// use 'selected' attribute 
// hide secondary dropdown and content block on second click 