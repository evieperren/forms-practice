function displayContentAfterInitialDropdown(){
  const select = document.querySelector('#filter')

  select.addEventListener('change', function(event) {
    const selectedItem = event.target[event.target.selectedIndex]
    selectedItem.selected = true // set to be selected

    const selectedAttr = event.target[event.target.selectedIndex].getAttribute('data-filter');

    const dropdownItems = document.querySelectorAll("[data-category]")
    for(let i = 0; i < dropdownItems.length; i++){
      dropdownItems[i].style.display = 'none'
    }


    // show secondary link
    const correspondingDropdownEntries = document.querySelectorAll("[data-category="+ selectedAttr +"]")
    for(let k = 0; k < correspondingDropdownEntries.length; k++){
      console.log(correspondingDropdownEntries[k])
      correspondingDropdownEntries[k].style.display = 'block'
    }
    const parent = document.querySelector('#category')
    parent.style.display = 'block'
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
    correspondingDropdownEntry.parentElement.style.display = 'block' // use classlist instead 
  })

}
displayContentAfterSecondDropdown()