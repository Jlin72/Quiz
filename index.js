var introEl = document.querySelector('#intro');
var quizQuestion1El = document.querySelector("#quizquestion1");
var quizQuestion2El = document.querySelector("#quizquestion2");
var quizQuestion3El = document.querySelector("#quizquestion3");
var quizQuestion4El = document.querySelector("#quizquestion4");
var inputBtnEl = document.querySelector('.input_btn');
var stBtnEl = document.querySelector('#stBtn');
var quizTitleEl = document.querySelector("#quiz_title");
var quizBodyEl = document.querySelector("#quiz_body");
var responseEl = document.querySelector('#response');
var timerEl = document.querySelector('#timer');
var highscoreEl = document.querySelector('#highscores');
var highscoreSumbitBtnEl = document.querySelector('#highscoreSubmitBtn');
var highscoreUlEl = document.querySelector('#highscores_list');
var highscoreInputEl = document.querySelector('#highscoreInput');
var highscorePEl = document.querySelector('#highscorePEl');
var highscoreFormEl = document.querySelector('#highscoreForm');
var liEl = document.createElement('li');
var highscoreBtnsEl = document.querySelector('#highscoreBtns');
var startOverBtnEl = document.querySelector('#startOverBtn');
var checkHighscoresEl = document.querySelector('#checkHighscores');
var allHighscoresEl = document.querySelector('#allHighscores');
var allHighscoresUlEl = document.querySelector('#allHighscoresUl');
var allHighscoresBtnEl = document.querySelector('#allHighscoresBtn');
var highscoreArr=[];
var timeLeft = 60;
var finaltime;
timerEl.innerHTML = timeLeft;
var question1 = {
    question: 'Who created javascript?',
    A: 'Brendan Eich',
    B: 'Bill Gates',
    C: 'Steve Jobs',
    D: 'Johan Strepp',
    Correct: 'A'
};

var question2 = {
    question: 'What is the main purpose of javascript?',
    A: 'It allows you to spy on other people',
    B: 'It allows you to connect your phone to your pc',
    C: 'It allows you to create interactive websites',
    D: 'It allows you to play games online',
    Correct: 'C'
};

var question3 = {
    question: 'what year was javascript created?',
    A: '1986',
    B: '1987',
    C: '1989',
    D: '1985',
    Correct: 'D'
}


function renderHighscores() {
    var storedHighscores = JSON.parse(localStorage.getItem('highscores'));

    if(storedHighscores !== null) {
        highscoreArr = storedHighscores;
    };
}

var timer;

function init() {

    introEl.setAttribute('style', 'display: none;');
    quizBodyEl.setAttribute('style', 'display: inline-block;');
    quizTitleEl.textContent = question1.question;
    quizQuestion1El.setAttribute('value', question1.A);
    quizQuestion2El.setAttribute('value', question1.B);
    quizQuestion3El.setAttribute('value', question1.C);
    quizQuestion4El.setAttribute('value', question1.D);

    quizQuestion1El.addEventListener('click', function() {
        if(quizQuestion1El.dataset.value === question1.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion2, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion2, 1000);
        }
    });
    quizQuestion2El.addEventListener('click', function() {
        if(quizQuestion2El.dataset.value === question1.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion2, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion2, 1000);
        }
    });
    quizQuestion3El.addEventListener('click', function() {
        if(quizQuestion3El.dataset.value === question1.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion2, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion2, 1000);
        }
    });
    quizQuestion4El.addEventListener('click', function() {
        if(quizQuestion4El.dataset.value === question1.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion2, 100);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion2, 1000);
        }
    });
}


function displayQuestion2() {
    responseEl.setAttribute('style', 'display: none');
    quizTitleEl.textContent = question2.question;
    quizQuestion1El.setAttribute('value', question2.A);
    quizQuestion2El.setAttribute('value', question2.B);
    quizQuestion3El.setAttribute('value', question2.C);
    quizQuestion4El.setAttribute('value', question2.D);

    quizQuestion1El.addEventListener('click', function() {
        if(quizQuestion1El.dataset.value === question2.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion3, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion3, 1000);
        }
    });
    quizQuestion2El.addEventListener('click', function() {
        if(quizQuestion2El.dataset.value === question2.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion3, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion3, 1000);
        }
    });
    quizQuestion3El.addEventListener('click', function() {
        if(quizQuestion3El.dataset.value === question2.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion3, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion3, 1000);
        }
    });
    quizQuestion4El.addEventListener('click', function() {
        if(quizQuestion4El.dataset.value === question2.Correct) {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            setTimeout(displayQuestion3, 1000);
        } else {
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timeLeft-=5;
            setTimeout(displayQuestion3, 1000);
        }
    });
};

function displayQuestion3() {
    console.log(timer);
    responseEl.setAttribute('style', 'display: none');
    quizTitleEl.textContent = question3.question;
    quizQuestion1El.setAttribute('value', question3.A);
    quizQuestion2El.setAttribute('value', question3.B);
    quizQuestion3El.setAttribute('value', question3.C);
    quizQuestion4El.setAttribute('value', question3.D);

    quizQuestion1El.addEventListener('click', function() {
        if(quizQuestion1El.dataset.value === question3.Correct) {
            finaltime = timeLeft;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            timerStopper();
            displayHighscores();
        } else {
            finaltime = timeLeft-5;
            timerEl.innerHTML = finaltime;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timerStopper();
            displayHighscores();
        }
    });
    quizQuestion2El.addEventListener('click', function() {
        if(quizQuestion2El.dataset.value === question3.Correct) {
            finaltime = timeLeft;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            timerStopper();
            displayHighscores();
        } else {
            finaltime = timeLeft-5;
            timerEl.innerHTML = finaltime;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            clearInterval(timer);
            displayHighscores();
        }
    });
    quizQuestion3El.addEventListener('click', function() {
        if(quizQuestion3El.dataset.value === question3.Correct) {
            finaltime = timeLeft;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            timerStopper();
            displayHighscores();
        } else {
            finaltime = timeLeft-5;
            timerEl.innerHTML = finaltime;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timerStopper();
            displayHighscores();
        }
    });
    quizQuestion4El.addEventListener('click', function() {
        if(quizQuestion4El.dataset.value === question3.Correct) {
            finaltime = timeLeft+16
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Correct');
            timerStopper();
            displayHighscores();
        } else {
            finaltime = timeLeft-5;
            timerEl.innerHTML = finaltime;
            responseEl.setAttribute('style', 'display:inline-block');
            responseEl.setAttribute('value', 'Wrong');
            timerStopper();
            displayHighscores();
        }
    });
}

function displayHighscores() {
    quizBodyEl.setAttribute('style', 'display: none;');
    highscoreEl.setAttribute('style', 'display: inline-block;');
    highscorePEl.innerHTML = 'Your final score is: '+ finaltime;
    highscoreSumbitBtnEl.addEventListener('click', function(e) {
        e.preventDefault();
        liEl.innerHTML = highscoreInputEl.value+' - '+ finaltime;
        highscoreUlEl.append(liEl);
        highscoreFormEl.setAttribute('style','display:none;');
        highscoreBtnsEl.setAttribute('style','display:inline-block;');
        highscoreArr.push(highscoreInputEl.value+' - '+ finaltime);
        localStorage.setItem('highscores',JSON.stringify(highscoreArr));
        renderHighscores();
        console.log(highscoreArr);
    });
}

checkHighscoresEl.addEventListener('click', function(){
    console.log(highscoreArr);
    highscoreEl.setAttribute('style', 'display: none;');
    allHighscoresEl.setAttribute('style', 'display: inline-block;');
    for(i=0;i<highscoreArr.length;i++) {
        var newLiEl = document.createElement('li');
        var newUlEl = document.createElement('ul');
        console.log(highscoreArr[i]);
        newLiEl.textContent = highscoreArr[i];
        console.log(newLiEl.textContent);
        newUlEl.append(newLiEl);
        allHighscoresUlEl.append(newUlEl);
    };
});


stBtnEl.addEventListener("click", function() {
    highscoreEl.setAttribute('style', 'display: none;');
    allHighscoresEl.setAttribute('style', 'display: none;');
    renderHighscores();
    console.log(highscoreArr);
    timeLeft = 60;
    init();
    timer = setInterval(function(){
        timerEl.innerHTML = timeLeft;
        console.log('hey it is still going')
        timeLeft-=1;
        if(timeLeft<=0) {
            finaltime = timeLeft;
            clearInterval(timer);
            quizBodyEl.setAttribute('style', 'display: none;');
            highscoreEl.setAttribute("style", "display: inline-block");
            displayHighscores();
        }
    },1000);
});

startOverBtnEl.addEventListener('click', function(){
    timerStopper();
    highscoreEl.setAttribute('style', 'display: none;');
    timeLeft = 60;
    quizBodyEl.setAttribute('style', 'display: none;');
    quizTitleEl.textContent = question1.question;
    quizQuestion1El.setAttribute('value', '');
    quizQuestion2El.setAttribute('value', '');
    quizQuestion3El.setAttribute('value', '');
    quizQuestion4El.setAttribute('value', '');
    init();
    timer = setInterval(function(){
        timerEl.innerHTML = timeLeft;
        console.log('hey it is still going')
        timeLeft-=1;
        if(timeLeft<=0) {
            finaltime = timeLeft;
            clearInterval(timer);
            quizBodyEl.setAttribute('style', 'display: none;');
            highscoreEl.setAttribute("style", "display: inline-block");
            displayHighscores();
        }
    },1000);
});

allHighscoresBtnEl.addEventListener("click", function() {
    timerStopper();
    highscoreEl.setAttribute('style', 'display: none;');
    allHighscoresEl.setAttribute('style', 'display: none;');
    renderHighscores();
    timeLeft = 60;
    console.log(highscoreArr);
    init();
    timer = setInterval(function(){
        timerEl.innerHTML = timeLeft;
        console.log('hey it is still going')
        timeLeft-=1;
        if(timeLeft<=0) {
            finaltime = timeLeft;
            clearInterval(timer);
            quizBodyEl.setAttribute('style', 'display: none;');
            highscoreEl.setAttribute("style", "display: inline-block");
            displayHighscores();
        }
    },1000);
});


function timerStopper () {
    clearInterval(timer);
}