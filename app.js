let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".chance");
const msg=document.querySelector("#msg")
const userparascore =document.querySelector("#user");
const compparascore = document.querySelector("#comp");
const winSound = new Audio("assets/win2.mp3");
const loseSound = new Audio("assets/lose1.mp3");
const tieSound = new Audio("assets/draw.mp3");

function stopAllSounds() {
    winSound.pause();
    winSound.currentTime = 0;

    loseSound.pause();
    loseSound.currentTime = 0;

    tieSound.pause();
    tieSound.currentTime = 0;

}

const gencomp=()=>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return options[index];
}
const drawgame=()=>{
    stopAllSounds();
    tieSound.play();
    console.log("Game was Tie");
    msg.innerText="Game was Tie.🤝 Play again";
    msg.style.backgroundColor="#512DA8";
}

const showgame=(userwin, userchoice , compchoice)=>{
    if(userwin){
        stopAllSounds();
        winSound.play();
        userscore++;
        userparascore.innerText=userscore;
        console.log("you win!");
         msg.innerText="you win!";
         msg.innerText=`you win! 🏆 your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="#00C853";
    }
    else{
        stopAllSounds();
        loseSound.play();
        compscore++;
        compparascore.innerText=userscore;
        console.log("you lose");
         msg.innerText="you lose";
         msg.innerText=`you lose.😢 ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="#FF4500";
    }
}
const playgame = (userchoice)=>{
    console.log(userchoice);
    const compchoice=gencomp();
    console.log(compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //p,s
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //s,r
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            //p,r
            userwin=compchoice==="rock"?false:true;
        }
        showgame(userwin , userchoice , compchoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});