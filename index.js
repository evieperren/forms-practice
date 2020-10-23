var filterDropdown = document.getElementById("filter");
var categoryDropdown = document.getElementById("category");
var selectedSection = document.getElementById("selected-content");
var showFormBtn = document.getElementById("show-form-btn");
var form = document.getElementById("form");
var selectedOptionDropdown = document.getElementById("selected-option");
var categoryOption = document.querySelectorAll("[data-category]");
var selectedOption = "";
var selectedContent = "";
const secondDropdown = document.querySelector('#category')
const dropdownItems = document.querySelectorAll("[data-category]")

var hide = function (elem) {
  elem.classList.remove('is-visible');
  elem.classList.add('is-hidden');
};
var show = function (elem) {
  elem.classList.add('is-visible');
  elem.classList.remove('is-hidden');

};

function filterCategory() {
  resetContent();
  resetCategories();
  resetSelectedOption();

  // set filter
  selectedOption = filterDropdown.value;

  // reveal categories dropdown
  show(categoryDropdown)

  // show only filtered categories
  for(let i = 0; i < dropdownItems.length; i++){
    if(dropdownItems[i].getAttribute("data-category") !== selectedOption){
      dropdownItems[i].disabled = true
      hide(dropdownItems[i])
    }
  }
  filterSecondDropdown()
}

function filterSecondDropdown(){
  var correspondingDropdownEntries = document.querySelectorAll("[data-category="+ selectedOption +"]")
  for(let k = 0; k < correspondingDropdownEntries.length; k++){
    show(correspondingDropdownEntries[k])
    correspondingDropdownEntries[k].disabled = false
  }
  show(categoryDropdown)
}

function showContent() {
  selectedContent = categoryDropdown.value;
  resetContent();
  show(document.getElementById(selectedContent))
  show(showFormBtn)
  setSelectedOption();
}

showFormBtn.addEventListener("click", function (event) {
  setSelectedOption();
  show(form)
});

function setSelectedOption() {
  var opts = selectedOptionDropdown.options;
  //selectedContent = categoryDropdown.value;

  for (var i = 0; i < opts.length; i++) {
    if (opts[i].getAttribute("data-option") == selectedContent) {
      var found = opts[i];
      found.selected = true;
      break;
    }
  }
}

function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}

function resetCategories() {
  categoryDropdown.selectedIndex = 0;

}

function resetContent() {
  var y = selectedSection.getElementsByClassName("is-visible");
  var i;
  if (y.length) {
    for (i = 0; i < y.length; i++) {
      hide(y[i])
    }
  }

  var classes = ["is-visible"];

  for (var i = 0, j = classes.length; i < j; i++) {
    if (hasClass(showFormBtn, classes[i])) {
      hide(showFormBtn)
      break;
    }
  }
}

function resetSelectedOption() {
  hide(form)
  selectedOptionDropdown.selectedIndex = 0;
}