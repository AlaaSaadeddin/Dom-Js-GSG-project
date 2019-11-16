const parent = document.querySelector(".parent-div");
const outerDiv = document.querySelector(".outer-div");
const newBoard = document.createElement("button");
let randomRGB = () => Math.floor(Math.random() * 256);
let randomRGBtriple = () => `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;

function makeSquares(numOfSquares) {
  
  const parentWidth = 400;
  
  for (let i = 0; i < (numOfSquares * numOfSquares); i++) {
    const square = document.createElement("div");
    square.className = "sequare";
    square.style.width = parentWidth / numOfSquares + "px";
    square.style.height = parentWidth / numOfSquares + "px";
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = randomRGBtriple();
    })
    parent.appendChild(square);
    
  }
}
outerDiv.appendChild(newBoard);
makeSquares(16);

newBoard.className = "new-btn";
newBoard.innerHTML= "new board";
newBoard.addEventListener('click', () => {
  let newSize = +(prompt("Enter the number of squares in each side: ", "16"));
  if (newSize != null) {
    const squares = document.querySelectorAll(".sequare");
    squares.forEach((square) => {
      parent.removeChild(square);
    })
    makeSquares(newSize);
  }
  
});
