//trivia questions array
var questionList = ['What engine does Fortnite run on?', 'How many shield points does a Mini-Shield Potion give you?', 'How many weapon tiers are there in Fortnite: Battle Royale?', 'Which one of these areas was not included during the original launch of Fortnite in September of 2017?', 'How many building options are there in Fortnite?'];
var randomQuestion = '';
//Document check
$(document).ready(function() {
//select question and write on screen
const questionSelect = function(){
    let randomNum = (Math.floor(Math.random() * questionList.length));
    randomQuestion = questionList[randomNum];
    $("#yourQuestion").text(randomQuestion);
}
questionSelect();





    // new Questions('What engine does Fortnite run on?', ['Frostbite', 'Unity', 'iD Tech 3 Engine', 'Unreal 4 Engine'], 'Unreal 4 Engine'),
    // new Questions('How many weapon tiers are there in Fortnite: Battle Royale?', ['3','5','6','7'], '5'),
    // new Questions('How many shield points does a Mini-Shield Potion give you?', ['10','15','20','25'], '25'),
    // new Questions('Which one of these areas was not included during the original launch of Fortnite in September of 2017?', ['Pleasant Park', 'Dusty Depot', 'Lucky Landing', 'Wailing Woods'], 'Lucky Landing'),
    // new Questions('How many building options are there in Fortnite?',['6', '5', '4', '3'], '4')




});