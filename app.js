let comp=0;
let user=0;
let userScore=document.querySelector("#player-score");
let compScore=document.querySelector("#computer-score");
const msg=document.querySelector("#msg");
const choices =document.querySelectorAll(".image div");

const genCompChoice=()=>{
let compChoice=["stone","paper","scissor"];
let ind=Math.floor(Math.random()*3);
return compChoice[ind];
};

const draw=()=>{
  console.log("its draw"); 
  msg.innerText="Its draw";
  msg.style.background="black";
};

playGame=(userChoice)=>{
    const compChoice = genCompChoice();
    console.log("User choice",userChoice);
    console.log("Computer choice:", compChoice);
    if (userChoice===compChoice){
        draw();
    } else if (
        (userChoice === "stone" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "stone") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        user++;
        userScore.innerText=user;
        msg.innerText="You Win";
        msg.style.background="green";
        console.log("You win! User Score:", user);
    } else {
        comp++;
        compScore.innerText=comp;
        msg.innerText="You Loose";
        msg.style.background="red";       
        console.log("Computer wins! Computer Score:", comp);
    }
};

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
playGame(userChoice);
});
});

