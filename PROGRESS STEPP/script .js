let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");
let curractive = 1;
next.addEventListener("click", () => {
  curractive++;
  if (curractive > circles.length) {
    curractive = circles.length;
  }
  console.log(curractive);
  update();
});
prev.addEventListener("click", () => {
  curractive--;
  if (curractive < 1) {
    curractive = 1;
  }
  console.log(curractive);
  update();
});
function update() {
  circles.forEach((item, ind) => {
    if (ind < curractive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  let actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (curractive === 1) {
    prev.disabled = true;
  } else if (curractive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = prev.disabled = false;
  }
}
