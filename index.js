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

function filterCategory(e) {
  resetContent();
  resetCategories();
  resetSelectedOption();

  // set filter
  selectedOption = filterDropdown.value;

  // reveal categories dropdown
  categoryDropdown.classList.add("is-visible");

  // show only filtered categories
  for(let i = 0; i < dropdownItems.length; i++){
    if(dropdownItems[i].getAttribute("data-category") !== selectedOption){
      hide(dropdownItems[i])
    }
  }
  filterSecondDropdown()
}

function filterSecondDropdown(){
  const correspondingDropdownEntries = document.querySelectorAll("[data-category="+ selectedOption +"]")
  for(let k = 0; k < correspondingDropdownEntries.length; k++){
    show(correspondingDropdownEntries[k])
  }
  show(categoryDropdown)
}

function showContent() {
  selectedContent = categoryDropdown.value;
  resetContent();
  document.getElementById(selectedContent).classList.add("is-visible");
  showFormBtn.classList.add("is-visible");
  setSelectedOption();
}

showFormBtn.addEventListener("click", function (event) {
  setSelectedOption();
  form.classList.add("is-visible");
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
      y[i].classList.remove("is-visible");
    }
  }

  var classes = ["is-visible"];

  for (var i = 0, j = classes.length; i < j; i++) {
    if (hasClass(showFormBtn, classes[i])) {
      showFormBtn.classList.remove("is-visible");
      break;
    }
  }
}

function resetSelectedOption() {
  form.classList.remove("is-visible");
  selectedOptionDropdown.selectedIndex = 0;
}