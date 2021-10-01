document.querySelectorAll(".form")
.forEach(function (form) {
  form.onclick = function (e) {
    e.stopPropagation();
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(".submit")
    .forEach(function (item) {
      item.value = "";
    });
  };
});