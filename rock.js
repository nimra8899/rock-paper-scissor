let userscore=0;
let computerscore=0;
let msgpara=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
let userscoreboard=document.querySelector('#userscore');
let computerscoreboard=document.querySelector('#computerscore');

const drawgame=()=>{
    console.log("game is draw");
    msgpara.innerText="Game draw !play again"
    msgpara.style.backgroundColor="grey"

}
const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore ++;
        userscoreboard.innerText=userscore;
        console.log("you win");
       msgpara.innerText=`you win ${userchoice} beats ${computerchoice}`;
       msgpara.style.backgroundColor="green"
    }else{
        computerscore ++;
        computerscoreboard.innerText=computerscore;
        console.log("you loose");
        msgpara.innerText=`you loose ${computerchoice} beats ${userchoice}`;

        msgpara.style.backgroundColor="red"

    }
}
const generatecomputerchoice=()=>{
    const options=['rock','paper','scissor'];//random function array ki index randomly choose kare ga us index par jo option hoga wo commputer choice hogi
    const randomindex=Math.floor(Math.random()*3) ;
    return options[randomindex];
//3 se multiply kis because 3 choices thi                              //math.random random  number gernate kare ga

};//math.random ko jis value se multiply kare ge wo us se ik kam k random number display kare ga
const playgame=(userchoice)=>{
    console.log(
        "user choice",userchoice
    );
const computerchoice=generatecomputerchoice();
console.log("user choice",computerchoice);
if (userchoice== computerchoice){
    drawgame();
}else
{
   let userwin=true;
   if(userchoice=="rock"){
    userwin=computerchoice=="paper"? false:true;

   }
   else if(userchoice=="scissor"){
    userwin=computerchoice=="rock"?false:true;
   }
   else{
   if( userchoice=="paper")
{
    userwin=computerchoice=="scissor"?false:true;
}
   }
showwinner(userwin,userchoice,computerchoice);
}
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>
    { 
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
    })
}
);