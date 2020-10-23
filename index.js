var filterDropdown = document.getElementById("filter");
var categoryDropdown = document.getElementById("category");
var selectedSection = document.getElementById("selected-content");
var showFormBtn = document.getElementById("show-form-btn");
var form = document.getElementById("form");
var selectedOptionDropdown = document.getElementById("selected-option");
var filterOption = document.querySelectorAll("[data-filter]");
var categoryOption = document.querySelectorAll("[data-category]");
var selectedOption = "";
var selectedContent = "";

function filterCategory() {
  resetContent();
  resetCategories();
  resetSelectedOption();

  // set filter
  selectedOption = filterDropdown.value;

  // reveal categories dropdown
  categoryDropdown.classList.add("is-visible");

  // show only filtered categories
  for (var i in categoryOption)
    if (categoryOption.hasOwnProperty(i)) {
      categoryOption[i].classList.add("is-hidden");
      if (categoryOption[i].getAttribute("data-category") !== selectedOption) {
        categoryOption[i].classList.add("is-hidden");
      } else {
        categoryOption[i].classList.remove("is-hidden");
      }
    }
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