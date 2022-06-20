const newGameBtn = document.querySelector(".new-game-btn"); 
let playerTurn = 0;

const game = (() => {

    function newGame() {
        playerTurn = 0;
        gameboard.clearGameboard();
        gameboard.createGameboard();
        gameboard.renderGameboard();
    }

    function checkGame() {
        if (gameboard.getArray()[0].textContent == 'X' && gameboard.getArray()[3].textContent == 'X' && gameboard.getArray()[6].textContent == 'X') {
            gameboard.renderGameboard();
            
        }
        if (gameboard.getArray()[1].textContent == 'X' && gameboard.getArray()[4].textContent == 'X' && gameboard.getArray()[7].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }
        if (gameboard.getArray()[2].textContent == 'X' && gameboard.getArray()[5].textContent == 'X' && gameboard.getArray()[8].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }

        if (gameboard.getArray()[0].textContent == 'X' && gameboard.getArray()[1].textContent == 'X' && gameboard.getArray()[2].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }
        if (gameboard.getArray()[3].textContent == 'X' && gameboard.getArray()[4].textContent == 'X' && gameboard.getArray()[5].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }
        if (gameboard.getArray()[6].textContent == 'X' && gameboard.getArray()[7].textContent == 'X' && gameboard.getArray()[8].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }

        if (gameboard.getArray()[0].textContent == 'X' && gameboard.getArray()[4].textContent == 'X' && gameboard.getArray()[8].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }
        if (gameboard.getArray()[2].textContent == 'X' && gameboard.getArray()[4].textContent == 'X' && gameboard.getArray()[6].textContent == 'X') {
            alert("X wins")
            game.newGame();
        }

        if (gameboard.getArray()[0].textContent == 'O' && gameboard.getArray()[3].textContent == 'O' && gameboard.getArray()[6].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }
        if (gameboard.getArray()[1].textContent == 'O' && gameboard.getArray()[4].textContent == 'O' && gameboard.getArray()[7].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }
        if (gameboard.getArray()[2].textContent == 'O' && gameboard.getArray()[5].textContent == 'O' && gameboard.getArray()[8].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }

        if (gameboard.getArray()[0].textContent == 'O' && gameboard.getArray()[1].textContent == 'O' && gameboard.getArray()[2].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }
        if (gameboard.getArray()[3].textContent == 'O' && gameboard.getArray()[4].textContent == 'O' && gameboard.getArray()[5].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }
        if (gameboard.getArray()[6].textContent == 'O' && gameboard.getArray()[7].textContent == 'O' && gameboard.getArray()[8].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }

        if (gameboard.getArray()[0].textContent == 'O' && gameboard.getArray()[4].textContent == 'O' && gameboard.getArray()[8].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }
        if (gameboard.getArray()[2].textContent == 'O' && gameboard.getArray()[4].textContent == 'O' && gameboard.getArray()[6].textContent == 'O') {
            alert("O wins")
            game.newGame();
        }
    }

    return {
        newGame,
        checkGame
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

    function renderGameboard() {
        while (gameboardContainer.lastChild) gameboardContainer.removeChild(gameboardContainer.lastChild);
        for (i = 0; i < gameboardArray.length; i++) {
            gameboardContainer.appendChild(gameboardArray[i]);
        }
    }

    function setMark() {
        let player;
        if (this.textContent) return;
        if (playerTurn == 0) {
            player = player1;
            playerTurn = 1;
        } else {
            player = player2;
            playerTurn = 0;
        }
        gameboardArray[this.getAttribute('id')].textContent = player.getMark();
        game.checkGame();
    }
    

    return {
        clearGameboard,
        createGameboard,
        renderGameboard,
        getArray
    }

})();


//FACTORY FUNCTION FOR PLAYER
const player = function(mark) {
    
    function getMark() {
        return mark;
    }
 
    return {
        getMark,
        
    }
}

let player1 = player("X");
let player2 = player("O");

newGameBtn.addEventListener("click", game.newGame);
