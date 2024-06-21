const inputEl = document.querySelector(".input");
const submitEl = document.querySelector(".submit");
const scoreEl = document.querySelector(".score");
const questionEl = document.querySelector(".heading");
const formEl = document.querySelector(".form");
const nam1 = Math.ceil(Math.random() * 10);
const nam2 = Math.ceil(Math.random() * 10);
const result = nam1 * nam2;
questionEl.innerHTML = `What is ${nam1} multiply by ${nam2} ?`;
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreEl.innerHTML = `Score: ${score}`;

formEl.addEventListener("submit", () => {
  var inp = +inputEl.value;
  if (inp === result) {
    score++;
    console.log(score);
    Updatlocalstorage();
  } else {
    score--;
    console.log(score);

    Updatlocalstorage();
  }
});

function Updatlocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
