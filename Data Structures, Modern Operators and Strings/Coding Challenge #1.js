// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Coman', 'Lewandowski', 'Sane'],
        ['Burki', 'Piszczek', 'Hummels', 'Akanji', 'Guerreiro', 'Witsel', 'Delaney', 'Brandt', 'Reus', 'Sancho', 'Haaland']
    ],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    },
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich']
};

// 1. Create player arrays
const players1 = game.players[0];
const players2 = game.players[1];

// 2. Extract goalkeeper and field players
const gk = players1[0];
const fieldPlayers = players1.slice(1);

// 3. Create allPlayers array
const allPlayers = [...players1, ...players2];

// 4. Create players1Final array with substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 5. Destructure odds
const { team1, draw, team2 } = game.odds;

// 6. Function to print goals
function printGoals(...playerNames) {
    console.log(...playerNames); // Print player names
    console.log(`Total goals scored: ${playerNames.length}`); // Total goals
}

// Test printGoals function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. Determine which team is more likely to win
const moreLikelyToWin = [
    { team: game.team1, odd: team1 },
    { team: game.team2, odd: team2 }
].sort((a, b) => a.odd - b.odd)[0].team;

console.log(`The team more likely to win is ${moreLikelyToWin}`);
