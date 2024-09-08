// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔔 SUBSTITUTION'],
    [45, '⚽ GOAL'],
    [50, '🟡 YELLOW CARD'],
    [64, '🟡 YELLOW CARD'],
    [76, '🔔 SUBSTITUTION'],
    [80, '🔔 SUBSTITUTION'],
    [90, '🔔 SUBSTITUTION']
]);

// 1. Create an array of unique game events
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Remove the event from minute 64
gameEvents.delete(64);
console.log(gameEvents);

// 3. Compute and log the average time between events
const totalEvents = gameEvents.size;
const averageTime = 90 / totalEvents; // Game duration is 90 minutes
console.log(`An event happened, on average, every ${averageTime} minutes`);

// 4. Loop over gameEvents and log each event with half-time information
gameEvents.forEach((event, minute) => {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
});
