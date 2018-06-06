function Question(question, answer, choice) {
  this.question = question;
  this.answer = answer;
  this.choice = choice;
}
const q1 = new Question('What engine does Fortnite run on?', 'Unreal 4 Engine', ['Frostbite', 'Unity 3D', 'iD Tech 3 Engine', 'Unreal 4 Engine']);
const q2 = new Question('How many weapon tiers are there in Fortnite: Battle Royale?', '5', ['3','5','6','4']);
const q3 = new Question('How many shield points does a Mini-Shield Potion give you?', '25', ['10','15','20','25']);
const q4 = new Question('Which one of these areas was not included during the original launch of Fortnite in September of 2017?', 'Lucky Landing', ['Pleasant Park', 'Dusty Depot', 'Lucky Landing', 'Wailing Woods']);
const q5 = new Question('How many building options are there in Fortnite?', '4', ['6', '5', '4', '3']);
const q6 = new Question('Who is the developer behind Fortnite?', 'Epic Games', ['Bluehole', 'Daybreak', 'Naughty Dog', 'Epic Games']);
const q7 = new Question('What color is the battle bus?', 'Blue', ['Blue', 'Red', 'Yellow', 'Green']);
//Add a new q# object and value into array to add more questions.
const qList = [q1, q2, q3, q4 ,q5, q6, q7];
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
            $('.answer, #yourQuestion').hide();
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
            }, 2500);
        } else {
            delay = setTimeout(function() {
                nextQuest(count);                  
            }, 2500);
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
                $('#yourQuestion').fadeOut();
                seconds = 30;
                $('#timer').text('30');
                $('#timer, .answer').hide();
                if (count === qList.length){
                    end = true;
                } else {
                    delay = setTimeout(function() {
                        nextQuest(count);                  
                    }, 2500);
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
        $('.answer, #yourQuestion').fadeIn(1000);
        for (let i = 0; i < 4; i++){
            $('#A' + i).text(y.choice[i]);
        }
        answerD = y.answer;
        $('#yourQuestion').text(y.question);
    }
    //function to check if answer is correct and posts if user is correct or not. Uses count# to check question number.
    var answerCheck = function(x, qNum){
        if(qList[qNum].answer === qList[qNum].choice[x]) {
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Guesses Correct: ' + score);
            $('#wrong').text('Guesses Incorrect: ' + wrong);
            count++;  
            if (count === qList.length){
                end = true;
            }    
        } else {
            $("#combatText").text('You are incorrect! The correct answer is ' + answerD + '!');           
            $('#score').text('Guesses Correct: ' + score);
            wrong++;
            $('#wrong').text('Guesses Incorrect: ' + wrong);
            count++;   
            if (count === qList.length){
                end = true;
            }   
        }
    }
    $('#timer, .answer, #yourQuestion').hide();
    //click event to start game
    $("#start").click(function(){
        $("#combatText, #score, #wrong").text('');
        $('#start').hide();
        delay = setTimeout(function() {
            nextQuest(0);                    
        }, 2500);
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