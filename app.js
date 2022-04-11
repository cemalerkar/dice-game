var diceOne =document.getElementById("rollfirst");
var diceTwo =document.getElementById("rollsecond");
var but1 =document.getElementById("but1");
var but2 =document.getElementById("but2");
var but3 =document.getElementById("but3");
var but4 =document.getElementById("but4");
var scoreone =document.getElementById("scoreone");
var scoretwo =document.getElementById("scoretwo");
var queue =0;
var random = 1;
var firstscore =0;
var secondscore =0;
var gameFinished = false;
var scoretable = document.getElementById("scoreboard");
var gamearea = document.getElementById("gamearea");
var playagain = document.getElementById("playagain");
var inputarea = document.getElementById("inputarea");
var gamea = document.getElementById("gamea");

function Submit(){

    if (document.getElementById("firstplayername").value.length == 0 ) {
        alert("Please enter a name for First Player")
        return false;
    } else if (document.getElementById("firstplayername").value.length > 10 ) {
        alert("First Player's name is too long. (Max=10 letters)")
        return false;
    } else if (document.getElementById("secondplayername").value.length == 0 ) {
        alert("Please enter a name for Second Player")
        return false;
    } else if (document.getElementById("secondplayername").value.length > 10 ) {
        alert("Second Player's name is too long. (Max=10 letters)")
        return false;
    } else if (document.getElementById("firstplayername").value == document.getElementById("secondplayername").value) {
        alert("Please make sure First Player and Second Player's name aren't same");
        return false;
    } else
    document.getElementById("p1").innerHTML = document.getElementById("firstplayername").value;
    document.getElementById("p2").innerHTML = document.getElementById("secondplayername").value;
    document.getElementById("p3").innerHTML = document.getElementById("firstplayername").value;
    document.getElementById("p4").innerHTML = document.getElementById("secondplayername").value;
    inputarea.style.display = "none";
    gamea.style.display = "";
}

function roll(player) {
        queue = player;
        rollDice=setInterval(dice, 75);
}
var dice = function (){
    random=Math.ceil(Math.random()*6);
    console.log(firstscore);

    if(queue===1) {
        but1.disabled = "disabled";
        but2.disabled = "";
        switch(random){
            case 1:
                diceOne.src="img/dice-six-faces-one.png";
                break;
                case 2:
                    diceOne.src="img/dice-six-faces-two.png";
                    break;
                    case 3:
                        diceOne.src="img/dice-six-faces-three.png";
                        break;
                        case 4:
                            diceOne.src="img/dice-six-faces-four.png";
                            break;
                            case 5:
                                diceOne.src="img/dice-six-faces-five.png";
                                break;
                                case 6:
                                    diceOne.src="img/dice-six-faces-six.png";
                                    break;
        }
    }

    if(queue===2) {
        but3.disabled = "disabled";
        but4.disabled = "";
        switch(random){
            case 1:
                diceTwo.src="img/dice-six-faces-one.png";
                break;
                case 2:
                    diceTwo.src="img/dice-six-faces-two.png";
                    break;
                    case 3:
                        diceTwo.src="img/dice-six-faces-three.png";
                        break;
                        case 4:
                            diceTwo.src="img/dice-six-faces-four.png";
                            break;
                            case 5:
                                diceTwo.src="img/dice-six-faces-five.png";
                                break;
                                case 6:
                                    diceTwo.src="img/dice-six-faces-six.png";
                                    break;
        }
    }
}

function Throw() {
    clearInterval(rollDice);
    if (queue===1) {
        firstscore+=random;
        scoreone.innerHTML=firstscore;
        if (firstscore>=50) {
            gameFinished=true;
            scoretable.style.display= "none";
            gamearea.style.display= "none";
            playagain.style.display="flex";
            but3.disabled = "disable";
            alert(document.getElementById("firstplayername").value + " Win The Game!")
            document.getElementById("cemalerkars").style.display = "none";
        } 
        but2.disabled ="disable";
        but3.disabled ="";
    }
    if (queue===2) {
        secondscore+=random;
        scoretwo.innerHTML=secondscore;
        if (secondscore>=50) {
            gameFinished=true;
            scoretable.style.display= "none";
            gamearea.style.display= "none";
            playagain.style.display="flex";
            alert(document.getElementById("secondplayername").value + " Win The Game!")
            but1.disabled= "disable";
            document.getElementById("cemalerkars").style.display = "none";
        } 
        but4.disabled ="disable";
        but1.disabled ="";
    }
}
