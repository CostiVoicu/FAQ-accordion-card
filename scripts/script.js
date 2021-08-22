var button1 = document.getElementById('arrow1'),
button2 = document.getElementById('arrow2'),
button3 = document.getElementById('arrow3'),
button4 = document.getElementById('arrow4'),
button5 = document.getElementById('arrow5');

var rotated1 = false,  rotated2 = false, rotated3 = false,
rotated4 = false, rotated5 = false;

var answears = [,document.getElementById('answear1'),
document.getElementById('answear2'),
document.getElementById('answear3'),
document.getElementById('answear4'),
document.getElementById('answear5')];

var questions = [,document.getElementById('question1'),
document.getElementById('question2'),
document.getElementById('question3'),
document.getElementById('question4'),
document.getElementById('question5')];

var card = document.getElementsByClassName('card');

button1.addEventListener('click', event => {
    if (rotated1 === false) {
        button1.style.transform = "rotate(180deg)";
        rotated1 = true;
        answears[1].style.display = "block";
        questions[1].style.fontWeight = "700";
        questions[1].style.color = "hsl(238, 29%, 16%)";
        rotated1 = true;
        for (var i = 1; i <= 5; ++i){
            if (i != 1){
                button2.style.transform = "rotate(0deg)";
                button3.style.transform = "rotate(0deg)";
                button4.style.transform = "rotate(0deg)";
                button5.style.transform = "rotate(0deg)";
                reset(2);
                reset(3);
                reset(4);
                reset(5);
                rotated2 = false;
                rotated3 = false;
                rotated4 = false;
                rotated5 = false;
            }
        }
    }
    else{
        button1.style.transform = "rotate(0deg)";
        reset(1);
        rotated1 = false;
    }
})

button2.addEventListener('click', event => {
    if (rotated2 === false) {
        button2.style.transform = "rotate(180deg)";
        rotated2 = true;
        answears[2].style.display = "block";
        questions[2].style.fontWeight = "700";
        questions[2].style.color = "hsl(238, 29%, 16%)";
        rotated2 = true;
        for (var i = 1; i <= 5; ++i){
            if (i != 2){
                button1.style.transform = "rotate(0deg)";
                button3.style.transform = "rotate(0deg)";
                button4.style.transform = "rotate(0deg)";
                button5.style.transform = "rotate(0deg)";
                reset(1);
                reset(3);
                reset(4);
                reset(5);
                rotated1 = false;
                rotated3 = false;
                rotated4 = false;
                rotated5 = false;
            }
        }
    }
    else{
        button2.style.transform = "rotate(0deg)";
        reset(2);
        rotated2 = false;
    }
})

button3.addEventListener('click', event => {
    if (rotated3 === false) {
        button3.style.transform = "rotate(180deg)";
        rotated3 = true;
        answears[3].style.display = "block";
        questions[3].style.fontWeight = "700";
        questions[3].style.color = "hsl(238, 29%, 16%)";
        rotated3 = true;
        for (var i = 1; i <= 5; ++i){
            if (i != 3){
                button2.style.transform = "rotate(0deg)";
                button3.style.transform = "rotate(0deg)";
                button4.style.transform = "rotate(0deg)";
                button5.style.transform = "rotate(0deg)";
                reset(2);
                reset(1);
                reset(4);
                reset(5);
                rotated2 = false;
                rotated1 = false;
                rotated4 = false;
                rotated5 = false;
            }
        }
    }
    else{
        button3.style.transform = "rotate(0deg)";
        reset(3);
        rotated3 = false;
    }
})

button4.addEventListener('click', event => {
    if (rotated4 === false) {
        button4.style.transform = "rotate(180deg)";
        rotated4 = true;
        answears[4].style.display = "block";
        questions[4].style.fontWeight = "700";
        questions[4].style.color = "hsl(238, 29%, 16%)";
        rotated4 = true;
        for (var i = 1; i <= 5; ++i){
            if (i != 4){
                button2.style.transform = "rotate(0deg)";
                button3.style.transform = "rotate(0deg)";
                button4.style.transform = "rotate(0deg)";
                button5.style.transform = "rotate(0deg)";
                reset(2);
                reset(3);
                reset(1);
                reset(5);
                rotated2 = false;
                rotated3 = false;
                rotated1 = false;
                rotated5 = false;
            }
        }
    }
    else{
        button4.style.transform = "rotate(0deg)";
        reset(4);
        rotated4 = false;
    }
})

button5.addEventListener('click', event => {
    if (rotated5 === false) {
        button5.style.transform = "rotate(180deg)";
        rotated5 = true;
        answears[5].style.display = "block";
        questions[5].style.fontWeight = "700";
        questions[5].style.color = "hsl(238, 29%, 16%)";
        rotated5 = true;
        for (var i = 1; i <= 5; ++i){
            if (i != 5){
                button2.style.transform = "rotate(0deg)";
                button3.style.transform = "rotate(0deg)";
                button4.style.transform = "rotate(0deg)";
                button5.style.transform = "rotate(0deg)";
                reset(2);
                reset(3);
                reset(4);
                reset(1);
                rotated2 = false;
                rotated3 = false;
                rotated4 = false;
                rotated1 = false;
            }
        }
    }
    else{
        button5.style.transform = "rotate(0deg)";
        reset(5);
        rotated5 = false;
    }
})

function reset(number){
    answears[number].style.display = '';
    questions[number].style.fontWeight = '';
    questions[number].style.color = '';
}