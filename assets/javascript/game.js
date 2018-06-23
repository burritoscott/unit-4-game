
var wins = 0;
var losses = 0;
var randomNum, greenNum, pinkNum, purpleNum, yellowNum, randomNumDis, yourScore;

//generate a random number to guess and display it btwn 19-120
function getRandomNum(min, max) {
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    randomNumDis = $("#randomNumber");
    randomNumDis.text(randomNum);

//generate a random number for each jewel btwn 1-12

    greenNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    pinkNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    purpleNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    yellowNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

//make images clickable using their individual IDs

    $(".jewels").on("click", function(){
        yourScore = $(this).val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        yourScoreDis = $("#score");
        yourScoreDis.text(yourScore);
        
    });

    if (yourScore == randomNum){
        wins ++;
    }else if(yourScore > randomNum){
        losses ++;
    }else{
        //add value of next click to current score
    }
}

// //create a counter for wins and losses
// //
getRandomNum();