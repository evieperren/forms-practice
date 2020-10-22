function displayContentAfterInitialDropdown(){
  const select = document.querySelector('#filter')

  select.addEventListener('change', function(event) {
    const selectedItem = event.target[event.target.selectedIndex]
    selectedItem.selected = true // set to be selected

    const selectedAttr = event.target[event.target.selectedIndex].getAttribute('data-filter');

    // show secondary link
    const correspondingDropdownEntry = document.querySelector("[data-category="+ selectedAttr +"]")
    correspondingDropdownEntry.parentElement.style.display = 'block'
  })
}
displayContentAfterInitialDropdown()

function displayContentAfterSecondDropdown(){
  const select = document.querySelector('#category')
  select.addEventListener('change', function(event) {
    const selectedItem = event.target[event.target.selectedIndex]
    selectedItem.selected = true // set to be selected

    const selectedAttr = event.target[event.target.selectedIndex].value;
    
    const correspondingDropdownEntry = document.querySelector('#' + selectedAttr)

    const allContentBlocks = document.querySelectorAll('.toggle-content')
    for( let i= 0; i < allContentBlocks.length; i++){
      allContentBlocks[i].style.display = 'none'
    }
    correspondingDropdownEntry.style.display = 'block'
    correspondingDropdownEntry.parentElement.style.display = 'block'
  })

}
displayContentAfterSecondDropdown()