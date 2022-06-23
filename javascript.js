const newGameBtn = document.querySelector(".new-game-btn"); 


//FACTORY FUNCTION FOR PLAYER
const player = function(mark) {

    return {
        mark  
    }
}


//GAME CONTROLS GAMEFLOW AND LOGIC
const game = (() => {

    let player1;
    let player2;
    let currentPlayer;

    function newGame() {
        gameboard.clearGameboard();
        gameboard.createGameboard();
        gameboard.renderGameboard();
        player1 = player("X");
        player2 = player("O");  
        currentPlayer = player1;
    }

    function getCurrentPlayer(){
        return currentPlayer;
    }

    function changeCurrentPlayer(){
        if(currentPlayer == player1) currentPlayer = player2;
        else currentPlayer = player1;
    }

    function checkGame() {
        if (gameboard.getArray()[0].textContent == 'X' && gameboard.getArray()[3].textContent == 'X' && gameboard.getArray()[6].textContent == 'X') 
        gameOver();
    }

    function gameOver() {
        alert("se oli siinä")
    }

    return {
        newGame,
        checkGame,
        changeCurrentPlayer,
        getCurrentPlayer
    }
    
})();


//MODULE FOR GAMEBOARD
const gameboard = (() => {
    const gameboardContainer = document.querySelector('.gameboard');
    let gameboardArray = [];

    function getArray() {
        return gameboardArray
    }

    function clearGameboard() {
        while (gameboardContainer.lastChild) gameboardContainer.removeChild(gameboardContainer.lastChild);
        gameboardArray = [];
    }

    function createGameboard() {
        for (i = 0; i < 9; i++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('square')
            newSquare.setAttribute('id', i);
            newSquare.addEventListener("click", setMark);
            gameboardArray.push(newSquare); 
        }
    }


    function setMark() {
        if (this.textContent) return;
        this.textContent = game.getCurrentPlayer().mark;  
        game.changeCurrentPlayer();  
        //game.checkGame(); 
    }
    

    function renderGameboard() {
        while (gameboardContainer.lastChild) gameboardContainer.removeChild(gameboardContainer.lastChild);
        for (i = 0; i < gameboardArray.length; i++) {
            gameboardContainer.appendChild(gameboardArray[i]);
        }
    }

    return {
        clearGameboard,
        createGameboard,
        renderGameboard,
        getArray
    }

})();


newGameBtn.addEventListener("click", game.newGame);




