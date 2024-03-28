let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComp=()=>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  }
  const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };

  const showWinner=(userWin, userChoice, compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            console.log("You win");
            msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            console.log("You lose");
            msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor="red";
        }
  }

  const playGame=(userChoice)=>{
    console.log("userchoice=",userChoice);
    const compChoice=getComp();
    console.log("Comp choice=",compChoice);

    if (userChoice === compChoice) {
        
        drawGame();
      } 
      else {
         let userWin = true;
        if (userChoice === "rock") {
          
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
         
          userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") { 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
    };
        



choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    });
})