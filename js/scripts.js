var openMap = document.getElementById("yandex-map");
var closeMap = document.getElementById("map-close");
var map = document.getElementById("map");
var overlay = document.getElementById("overlay");
var pop = document.getElementById("popup");
var emailUs = document.getElementById("email-us");
var resetForm = document.getElementById("reset");
var closeForm = document.getElementById("close");

var sliderLeft = document.getElementById("left-div");
var sliderRight = document.getElementById("right-div");

var closeAdded = document.getElementById("added-close");
var buyHref = document.querySelectorAll(".buy");
var added = document.getElementById("added");
function myToggleAdded(event) {
  event.preventDefault();
  added.classList.toggle("form-show");
  overlay.classList.toggle("hidden");
}
for (var i = 0; i < buyHref.length; i++) {
  buyHref[i].addEventListener("click", myToggleAdded);
};
closeAdded ? closeAdded.addEventListener("click", myToggleAdded) : null;

function myToggleForm(event) {
  event.preventDefault();
  pop.classList.toggle("form-show");
  overlay.classList.toggle("hidden");
}
emailUs ? emailUs.addEventListener("click", myToggleForm) : null;
resetForm ? resetForm.addEventListener("click", myToggleForm) : null;
closeForm ? closeForm.addEventListener("click", myToggleForm) : null;

function myShowNextSlide(event) {
  event.preventDefault();
  var sliderBtn1 = document.getElementById("btn-1");
  var sliderBtn2 = document.getElementById("btn-2");
  sliderBtn1.checked ? sliderBtn2.checked = 1 : sliderBtn1.checked = 1;
}
sliderLeft ? sliderLeft.addEventListener("click", myShowNextSlide) : null;
sliderRight ? sliderRight.addEventListener("click", myShowNextSlide) : null;

function myToggleMap(event) {
  event.preventDefault();
  map.classList.toggle("popup-show");
  overlay.classList.toggle("hidden");
}
closeMap ? closeMap.addEventListener("click", myToggleMap) : null;
openMap ? openMap.addEventListener("click", myToggleMap) : null;

document.addEventListener('keydown', function(evt){
  var code = (evt.charCode) ? evt.charCode : evt.keyCode;
  if (map && map.classList.contains("popup-show")) {
    if (code == 27) {
      myToggleMap(evt);
    }
  }
  if (pop && (!pop.classList.contains("hidden") || pop.classList.contains("form-show"))) {
    if (code == 27) {
      myToggleForm(evt);
    }
  }
  if (added && (!added.classList.contains("hidden") || added.classList.contains("form-show"))) {
    if (code == 27) {
      myToggleAdded(evt);
    }
  }
})
