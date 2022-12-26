const dropdown = document.querySelector("[data-dropdown]");
const link = document.querySelector("[data-submenu-link]");

let isHidden = true
dropdown.hidden = isHidden;
function toggle() {
  isHidden = !isHidden;
  dropdown.hidden = isHidden;

}
link.addEventListener("click", () => {
  toggle();
})

document.body.addEventListener("click", function() {
  isHidden = true;
  dropdown.hidden = true;
});

dropdown.addEventListener("click", function(ev) {
  ev.stopPropagation();
});

link.addEventListener("click", function(ev) {
  ev.stopPropagation();
});
