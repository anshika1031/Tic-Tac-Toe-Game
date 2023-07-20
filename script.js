console.log("Welcome To Tic Tac Toe")
let music = new Audio("success-1-6297.mp3")
let audioturn = new Audio("success-1-6297.mp3")
let gameover = new Audio("negative_beeps-6008.mp3")
let turn = X
let isgameover = false;

// Function to Change the turn
const changeTurn = ()=>{
return turn === "X"?"0": "X"
} 

// Function to check for a win 
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 15, 0],
        [3, 4, 5, 5, 5, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, 5, 5, 90],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText ===) )
        document.querySelector('.info').innertext = boxtext[e[0]].innerText + "Won"
        isgameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100px"
    })

}
// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.forms(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    boxtext.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

           
        }
    })
})

// Add oneclick listner to reset button 
reset.addEventListener('click', ()=>{
     let boxtexts = document.querySelectorAll('.boxtext');
     Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
     });
     turn = "X";
     isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;

})
