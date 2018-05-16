const q1 = {
    question: 'What engine does Fortnite run on?',
    answer: 'Unreal 4 Engine',
    choice: ['Frostbite', 'Unity 3D', 'iD Tech 3 Engine', 'Unreal 4 Engine'],
};
const q2 = {
    question: 'How many weapon tiers are there in Fortnite: Battle Royale?',
    answer: '5',
    choice: ['3','5','6','7'],
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
const qList = [q1, q2, q3, q4 ,q5];
var count = 0;
var score = 0;
var userGuess = 0;
var end = false;
//Document check
$(document).ready(function() {
    var nextQuest = function(x){
        let y = qList[x];
        if (y === q1){
            $('#yourQuestion').text(q1.question);
            $('#1A').text(q1.choice[0]);
            $('#2A').text(q1.choice[1]);
            $('#3A').text(q1.choice[2]);
            $('#4A').text(q1.choice[3]);
        } else if (y === q2){
            $('#yourQuestion').text(q2.question);
            $('#1A').text(q2.choice[0]);
            $('#2A').text(q2.choice[1]);
            $('#3A').text(q2.choice[2]);
            $('#4A').text(q2.choice[3]);
        } else if (y === q3){
            $('#yourQuestion').text(q3.question);
            $('#1A').text(q3.choice[0]);
            $('#2A').text(q3.choice[1]);
            $('#3A').text(q3.choice[2]);
            $('#4A').text(q3.choice[3]);
        } else if (y === q4){
            $('#yourQuestion').text(q4.question);
            $('#1A').text(q4.choice[0]);
            $('#2A').text(q4.choice[1]);
            $('#3A').text(q4.choice[2]);
            $('#4A').text(q4.choice[3]);
        } else {
            $('#yourQuestion').text(q5.question);
            $('#1A').text(q5.choice[0]);
            $('#2A').text(q5.choice[1]);
            $('#3A').text(q5.choice[2]);
            $('#4A').text(q5.choice[3]);
        }
    }
    var answerCheck = function(x){
        if (q1.choice[x] === q1.answer){
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (count === 0 && q1.choice[x] !== q1.answer){
            $("#combatText").text('You are incorrect! the correct answer is ' + q1.answer);
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (q2.choice[x] === q2.answer){
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (count === 1 && q2.choice[x] !== q2.answer){
            $("#combatText").text('You are incorrect! the correct answer is ' + q2.answer);
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (q3.choice[x] === q3.answer){
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (count === 2 && q3.choice[x] !== q3.answer){
            $("#combatText").text('You are incorrect! the correct answer is ' + q3.answer);
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (q4.choice[x] === q4.answer){
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (count === 3 && q4.choice[x] !== q4.answer) {
            $("#combatText").text('You are incorrect! the correct answer is ' + q4.answer);
            $('#score').text('Your score: ' + score);
            count++;            
        } else if (q5.choice[x] === q5.answer){
            $("#combatText").text('You are correct!');
            score++;
            $('#score').text('Your score: ' + score);
            count++;            
            end = true;
        } else if (count === 4 && q5.choice[x] !== q5.answer){
            $("#combatText").text('You are incorrect! the correct answer is ' + q5.answer);
            $('#score').text('Your score: ' + score);
            count++;            
            end = true;    
        } else {
            return;
        }
    }
    $('.answer').hide();
    $('#yourQuestion').hide();
    //click event to start game
    $("#start").click(function(){
        //shows game screen need to add timer here for 3 sec.
        $('#start').hide();
        $('.answer').fadeIn(1000);
        $('#yourQuestion').fadeIn(1000);
        nextQuest(0);
    });
        //onclick for answer and validation of correct answer.
    $(".answer").click(function(){
        userPick = $(this).val();
        answerCheck(userPick);
        nextQuest(count);
        if (end === true){
            $('.answer').hide();
            $('#yourQuestion').hide();
        }


// setTimeout(functionHere, 1000 * 5);



    
    });
});

