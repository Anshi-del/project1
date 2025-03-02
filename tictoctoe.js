let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newgamebtn = document.querySelector("#new-btn");

let turnO = true; //playerX playerO

let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

boxes.forEach(box => {
  box.addEventListener('click',()=>{
    console.log("box is clicked");
    if(turnO){
      box.innerText = "O";
      turnO=false;
    } else {
      box.innerText = "X";
      turnO=true;
    }
    box.disabled =true;

    checkWinner();
  })
});

const resetgame = () => {
  turnO=true;
  enabledboxes();
  msgcontainer.classList.add("hide");
}

const disabledboxes = ()=>{
  for(let box of boxes){
  box.disabled = true;
  }
}

const enabledboxes = ()=>{
  for(let box of boxes){
  box.disabled = false;
  box.innerText="";
  }
}


function showWinner(winner){
  msg.innerText=`congratulation, winner is ${winner}`;
  msgcontainer.classList.remove('hide');
  disabledboxes();
}


 
function checkWinner(){
  for(let pattern of winpatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
 

    if(pos1 != "" || pos2 != "" || pos3 != ""){
      
      if(pos1 === pos2 && pos2 === pos3){
        console.log("winner",pos1);
        showWinner(pos1);
      }
    }

  }
}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);