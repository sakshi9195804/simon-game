// let gameSeq=[];
// let userSeq=[];
// let btns=["yellow","red","purple","green"];

// let h2=document.querySelector("h2");

// let started=false;
// let level=0;

// document.addEventListener("keypress",function(){
//         if(started==false){
//                 console.log("game is started");
//                 started=true;
//                 levelUp();
//         }
// });

// function gameFlash(btn){
//         btn.classList.add("flash");
//         setTimeout(function (){
//         btn.classList.remove("flash");
//         },250);
// }

// function userFlash(btn){
//         btn.classList.add("userflash");
//         setTimeout(function (){
//         btn.classList.remove("userflash");
//         },250);
// }

// function levelUp(){
//         userSeq=[];
//         level++;
//         h2.innerText=`level ${level}`;
//         let randIdx=Math.floor(Math.random()*4);
//         let randColor=btns[randIdx];
//         let randBtn=document.querySelector(`.${randColor}`);
//         gameSeq.push(randColor);
//         gameFlash(randBtn);
// }

// function checkAns(){
//         // console.log("current level : ",level);
//         let idx=level-1;
//         if (userSeq[idx]===gameSeq[idx]){
//                 if(userSeq.length==gameSeq.length){
//                 setTimeout(levelUp,1000);
//                 }
//         }else{  
//                 h2.innerHTML=`game over ! your score was <b>${level}</b> <br> press any key to start`;
//                 document.querySelector("body").style.backgroundcolor="red";
//                 setTimeout(function(){
//                 document.querySelector("body").style.backgroundcolor="white";
//                 },150)
//                 reset();
//         }
// }

// function btnPress(){
//         console.log(this);
//         let btn=this;
//         userFlash(btn)

//        let userColor=btn.getAttribute("id");
//         console.log(userColor);
//         userSeq.push(userColor);


//         checkAns(userSeq.length-1);
// }
// let allBtns= document.querySelectorAll(".btn");
// for(btn of allBtns){
//         btn.addEventListener("click",btnPress);
// }

// function reset(){
//         started=false;
//         gameSeq=[];
//         userSeq=[];
//         level=0;

// }
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns() {
    for (let i = 0; i < userSeq.length; i++) {
        if (userSeq[i] !== gameSeq[i]) {
            gameOver();
            return;
        }
    }

    if (userSeq.length === gameSeq.length) {
        setTimeout(levelUp, 1000);
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function gameOver() {
    h2.innerHTML = `Game over! Your score was <b>${level}</b>.<br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
}
