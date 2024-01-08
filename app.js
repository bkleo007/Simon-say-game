let gameSeq = [];
let userSeq = [];
let highestScore = 0; 

let btns = ["red", "yellow",  "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if( started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
    btn.classList.remove("userFlash");
}, 200);
}

function levelUp(){
    userSeq = [];
    
    level++;
    h2.innerText = `Level ${level}`;
    
    if (level > highestScore) {
        highestScore = level; 
    }

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
        
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! Your score is: <b>${level}</b><br>Highest Score: <b>${highestScore}</b><br> Press any key to re-start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 15);
        reset();
    }
}

function btnPress(){
   
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
