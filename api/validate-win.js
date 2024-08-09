const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

export default function handler(req, res) {
    const { gameState } = req.body;
    if (isPlayerWin(gameState, 'x')) {
        res.status(200).json({ success: true, flag: 'CTF{INSANE-FLAG-Tic-Tac-Toe}' });
    } else {
        res.status(200).json({ success: false });
    }
}

function isPlayerWin(gameState, player) {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === player;
        });
    });
}