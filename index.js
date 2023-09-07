function newDice(){
    var randomNumber1 = (Math.random()*6)+1
    randomNumber1 = Math.floor(randomNumber1)
    var randomDiceImage1 = "images/dice"+randomNumber1+".png"
    document.querySelector(".img1").setAttribute("src", randomDiceImage1)

    
    var randomNumber2 = (Math.random()*6)+1
    randomNumber2 = Math.floor(randomNumber2)
    var randomDiceImage2 = "images/dice"+randomNumber2+".png"
    document.querySelector(".img2").setAttribute("src", randomDiceImage2)

    
    if (randomDiceImage1 == randomDiceImage2){
        document.querySelector("h1").textContent = "Draw";
        document.querySelector("h1").classList.remove("p1")
        document.querySelector("h1").classList.remove("p2")
    }
    else if(randomDiceImage1 > randomDiceImage2){
        document.querySelector("h1").textContent = "Player 1 Won"
        document.querySelector("h1").classList.remove("p2")
        document.querySelector("h1").classList.add("p1")
    }
    else if(randomDiceImage2 > randomDiceImage1){
        document.querySelector("h1").textContent = "Player 2 Won"
        document.querySelector("h1").classList.remove("p1")
        document.querySelector("h1").classList.add("p2")
    }
}

var btn = document.getElementsByTagName("button")[0]
btn.addEventListener("click", newDice)