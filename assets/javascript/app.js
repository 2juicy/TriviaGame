const q1 = {
    question: 'What engine does Fortnite run on?',
    answer: 'Unreal 4 Engine',
    choice: ['Frostbite', 'Unity 3D', 'iD Tech 3 Engine', 'Unreal 4 Engine'],
};
const q2 = {
    question: 'How many weapon tiers are there in Fortnite: Battle Royale?',
    answer: '5',
    choice: ['3','5','6','4'],
};
const q3 = {
    question: 'How many shield points does a Mini-Shield Potion give you?',
    answer: '25',
    choice: ['10','15','20','25'],
};
const q4 = {
    question: 'Which one of these areas was not included during the original launch of Fortnite in September of 2017?',
    answer: 'Lucky Landing',
    choice: ['Pleasant Park', 'Dusty Depot', 'Lucky Landing', 'Wailing Woods'],
};
const q5 = {
    question: 'How many building options are there in Fortnite?',
    answer: '4',
    choice: ['6', '5', '4', '3'],
};
const q6 = {
    question: 'Who is the developer behind Fortnite?',
    answer: 'Epic Games',
    choice: ['Bluehole', 'Daybreak', 'Naughty Dog', 'Epic Games'],
}
const qList = [q1, q2, q3, q4 ,q5, q6];
var answerD = '';
var count = 0;
var score = 0;
var wrong = 0;
var userGuess = 0;
var end = false;
var delay;
var seconds = 30;
//Document check
$(document).ready(function() {
    var intervalId;
    //win condition
    function didIWin(){
        if (end === true){
            $('.answer').hide();
            $('#yourQuestion').hide();
            $('#score').text('Game Over! Total Guesses Correct: ' + score);
            score = 0;
            $('#wrong').text('Guesses Incorrect: ' + wrong);
            wrong = 0;
            clearInterval(intervalId);
            seconds = 30;
            count = 0;
            end = false;
            delay = setTimeout(function() {
                $('#start').slideDown();                  
            }, 3000);
        } else {
            delay = setTimeout(function() {
                nextQuest(count);                  
            }, 3000);
        } 
    }
    //timer counter
    var counter = function() {
        intervalId = setInterval(z, 1000);
        function z(){
            if (seconds > 0){
                seconds--;
            } else if (seconds == 0) {
                clearInterval(intervalId);
                $("#combatText").text('You ran out of time! ' + 'The correct answer is ' + answerD);
                count++;
                wrong++;
                $('#wrong').text('Guesses Incorrect: ' + wrong);
                $('.answer').hide();
                $('#yourQuestion').fadeOut();
                seconds = 30;
                $('#timer').text('30');
                $('#timer').hide();
                if (count === 6){
                    end = true;
                } else {
                    delay = setTimeout(function() {
                        nextQuest(count);                  
                    }, 3000);
                }
                didIWin();                
            }
            $('#timer').text(seconds);
        }       
    }
    //function for posting up questions
    var nextQuest = function(x){
        clearInterval(intervalId);
        $('#timer').show();
        counter();
        let y = qList[x];
        $('.answer').fadeIn(1000);
        $('#yourQuestion').fadeIn(1000);
        $('#1A').text(y.choice[0]);
        $('#2A').text(y.choice[1]);
        $('#3A').text(y.choice[2]);
        $('#4A').text(y.choice[3]);
        $('#5A').text(y.choice[4]);
        answerD = y.answer;
    }
    //function to check if answer is correct and posts if user is correct or not. Uses count# to check question number.
    var answerCheck = function(x, qNum){
        if(qList[qNum].answer === qList[qNum].choice[x]) {
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Guesses Correct: ' + score);
            $('#wrong').text('Guesses Incorrect: ' + wrong);
            count++;  
            if (count === 6){
                end = true;
            }    
        } else {
            $("#combatText").text('You are incorrect! The correct answer is ' + q1.answer + '!');
            $('#score').text('Guesses Correct: ' + score);
            wrong++;
            $('#wrong').text('Guesses Incorrect: ' + wrong);
            count++;   
            if (count === 6){
                end = true;
            }   
        }
    }
    $('#timer').hide();
    $('.answer').hide();
    $('#yourQuestion').hide();
    //click event to start game
    $("#start").click(function(){
        $("#combatText").text('');
        $('#score').text('');
        $('#wrong').text('');
        $('#start').hide();
        delay = setTimeout(function() {
            nextQuest(0);                    
        }, 3000);
    });
    //onclick for answer and validation of correct answer.
    $(".answer").click(function(){
        userPick = $(this).val();
        $('.answer').hide();
        $('#yourQuestion').fadeOut();
        seconds = 30;
        $('#timer').text('30');
        $('#timer').hide();
        clearInterval(intervalId);
        answerCheck(userPick, count);
        didIWin();   
    });
});