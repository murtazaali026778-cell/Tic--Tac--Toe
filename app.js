let buttons = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset");
let line = document.querySelector("#Line");
let turno = true;
let turn;
let msg = document.querySelector("#msg");
let gameWin = () => {
  if (
    buttons[0].innerText == "O" &&
    buttons[1].innerText == "O" &&
    buttons[2].innerText == "O"
  ) {
    console.log("win");
    return 1;
  } else if (
    buttons[3].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[5].innerText == "O"
  ) {
    console.log("win");
    return 2;
  } else if (
    buttons[6].innerText == "O" &&
    buttons[7].innerText == "O" &&
    buttons[8].innerText == "O"
  ) {
    console.log("win");
    return 3;
  } else if (
    buttons[0].innerText == "O" &&
    buttons[3].innerText == "O" &&
    buttons[6].innerText == "O"
  ) {
    console.log("win");
    return 4;
  } else if (
    buttons[1].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[7].innerText == "O"
  ) {
    console.log("win");
    return 5;
  } else if (
    buttons[2].innerText == "O" &&
    buttons[5].innerText == "O" &&
    buttons[8].innerText == "O"
  ) {
    console.log("win");
    return 6;
  } else if (
    buttons[0].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[8].innerText == "O"
  ) {
    console.log("win");
    return 8;
  } else if (
    buttons[2].innerText == "O" &&
    buttons[4].innerText == "O" &&
    buttons[6].innerText == "O"
  ) {
    console.log("win");
    return 7;
  } else if (
    buttons[0].innerText == "X" &&
    buttons[1].innerText == "X" &&
    buttons[2].innerText == "X"
  ) {
    console.log("win");
    return 1;
  } else if (
    buttons[3].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[5].innerText == "X"
  ) {
    console.log("win");
    return 2;
  } else if (
    buttons[6].innerText == "X" &&
    buttons[7].innerText == "X" &&
    buttons[8].innerText == "X"
  ) {
    console.log("win");
    return 3;
  } else if (
    buttons[0].innerText == "X" &&
    buttons[3].innerText == "X" &&
    buttons[6].innerText == "X"
  ) {
    console.log("win");
    return 4;
  } else if (
    buttons[1].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[7].innerText == "X"
  ) {
    console.log("win");
    return 5;
  } else if (
    buttons[2].innerText == "X" &&
    buttons[5].innerText == "X" &&
    buttons[8].innerText == "X"
  ) {
    console.log("win");
    return 6;
  } else if (
    buttons[0].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[8].innerText == "X"
  ) {
    console.log("win");
    return 8;
  } else if (
    buttons[2].innerText == "X" &&
    buttons[4].innerText == "X" &&
    buttons[6].innerText == "X"
  ) {
    console.log("win");
    return 7;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turno == true && button.innerText == "") {
      button.innerText = "O";
      turn = "o";
      turno = false;
    } else if (turno == false && button.innerText == "") {
      button.innerText = "X ";
      turno = true;
      turn = "x";
    }
    i = gameWin();
    console.log(i);

    if (typeof i == "number") {
      line.classList.add(`crossLine${i}`);
    }
   
  });
   resetButton.addEventListener("click", () => {
        let i = gameWin();
      button.innerText = " ";
      line.classList.remove(`crossLine${i}`);
      
    });
});
// wINNING PATTERN:
/* 0 1 2
    3 4 5 
    6 7 8 
    0 3 6
    1 4 7
    2 5 8
    0 4 8
    2 4 6
         */
