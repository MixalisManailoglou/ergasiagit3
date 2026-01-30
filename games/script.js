let number = Math.floor(Math.random() * 10) + 1;
let score = 0;

function check() {
  let user = document.getElementById("guess").value;

  if (user == number) {
    score++;
    document.getElementById("result").innerText =
      "You won! Score: " + score;
  } else {
    document.getElementById("result").innerText =
      "Try again!";
  }
}
