let count = 0;

const countAddBtn = document.getElementById("add");
const countSubBtn = document.getElementById("sub");
const countDisplay = document.getElementById("count");
countDisplay.innerText = count;

countAddBtn.addEventListener("click", () => {
  count++;
  countDisplay.innerText = count;
});

countSubBtn.addEventListener("click", () => {
  count--;
  countDisplay.innerText = count;
});