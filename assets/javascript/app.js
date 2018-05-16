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
var score = 0;
//Document check
$(document).ready(function() {
    $('.answer').hide();
    $('#yourQuestion').hide();
    //click event to start game
    $("#start").click(function(){
        $('#start').hide();
        $('.answer').fadeIn(1000);
        $('#yourQuestion').fadeIn(1000);
        $('#yourQuestion').text(q1.question);
        $('#1A').text(q1.choice[0]);
        $('#2A').text(q1.choice[1]);
        $('#3A').text(q1.choice[2]);
        $('#4A').text(q1.choice[3]);
    $(".answer").click(function(){
        let userPick = $(this).val();
        if (q1.choice[userPick] === q1.answer){
            $("#combatText").text('You are correct!');
        } else {
            $("#combatText").text('You are incorrect! the correct answer is ' + q1.answer);
        }


// setTimeout(fiveSeconds, 1000 * 5);



    });
    });
});

