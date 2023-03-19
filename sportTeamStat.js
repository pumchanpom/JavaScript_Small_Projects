const team = {
    _players: [
        { firstName: "Freddie", lastName: "Freeman", age: 35 },
        { firstName: "Aaron", lastName: "Judge", age: 31 },
        { firstName: "Shohei", lastName: "Ohtani", age: 29 },
    ],
    _games: [
        { opponent: "Rays", teamPoints: 9, opponentPoints: 1 },
        { opponent: "Blue Jays", teamPoints: 1, opponentPoints: 7 },
        { opponent: "Royals", teamPoints: 3, opponentPoints: 4 },
    ],
    get players() {
        if (this._players) {
        return this._players;
        }
    },
    get games() {
        if (this._games) {
            return this._games;
        }
    },
    addPlayer(newFirstName, newLastName, newAge) {
        player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        game = {
            opponent: newOpponent, 
            teamPoints: newTeamPoints, 
            opponentPoints: newOpponentPoints,
        };
        this._games.push(game);
    }
};

team.addPlayer("José", "Ramírez", 31);
console.log(team._players);
team.addGame('Astros', 9, 3);
console.log(team._games);