const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
guessLeft = document.querySelector('.guess-left span'),
wrongLetter = document.querySelector('.wrong-letter span'),
typingInput = document.querySelector('.typing-input');



let word,incorrects=[],corrects= [],maxGuesses;

function randomWord(){
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxGuesses = 8;
    console.log(word);

    hint.innerHTML = ranObj.hint;
    guessLeft.innerHTML = maxGuesses;

    let html = "";
    for(let i=0;i< word.length;i++){
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)&& !incorrects.includes(`${key}`) && !corrects.includes(key)){
    console.log(key);
    if(word.includes(key)){
        for(let i=0;i<word.length;i++){
            if(word[i] === key){
                corrects.push(key);
                inputs.querySelectorAll('input')[i].value = key;
            }
        }
    }
    else{
        maxGuesses--;
        incorrects.push(`${key}`);
    }
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrects;
    }
    
    typingInput.value="";

    if(maxGuesses < 1)
    {
        alert("GAME OVER!!");
    }
}

resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener('input',initGame);
document.addEventListener("keydown",()=> typingInput.focus());