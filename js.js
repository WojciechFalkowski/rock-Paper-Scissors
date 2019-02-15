const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    playerHand: "",
    aiHand: "",
}
const hands = document.querySelectorAll('.select img');
//Pierwsza funkcja
function handSelection() {
    //jezeli chcielisbymsy uzyc funkcji strzalkowej trzeba pamietac o 'e' w parametrze console.log(e.target);

    game.playerHand = this.dataset.option

    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 10px red';
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;


}

function checkResault(player, ai) {
    gameSummary.numbers++;
    console.log(player, ai);
    if (player === ai) {
        gameSummary.draws++;
        document.querySelector('[data-summary="who-win"]').textContent = 'REMIS!';
        return 'draw'
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {

        gameSummary.wins++;
        document.querySelector('[data-summary="who-win"]').textContent = 'WYGRAŁEŚ!';
        return 'win'

    } else {
        gameSummary.losses++;
        document.querySelector('[data-summary="who-win"]').textContent = 'PRZEGRAŁEŚ!';
        return 'loss'
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

function changeResault() {
    document.querySelector('.numbers span').textContent = gameSummary.numbers;
    document.querySelector('.wins span').textContent = gameSummary.wins;
    document.querySelector('.losses span').textContent = gameSummary.losses;
    document.querySelector('.draws span').textContent = gameSummary.draws;
    document.querySelector('.draws span').textContent = gameSummary.draws;
    document.querySelector('[data-summary="your-choice"]').textContent = game.playerHand;
    document.querySelector('[data-summary="ai-choice"]').textContent = game.aiHand;
}
//Funkcja Sterująca
function startGame() {
    if (!game.playerHand) {
        return alert("wybierz dłoń!");

    }
    game.aiHand = aiChoice();
    const gameResault = checkResault(game.playerHand, game.aiHand);
    console.log(gameResault);
    changeResault();
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame);