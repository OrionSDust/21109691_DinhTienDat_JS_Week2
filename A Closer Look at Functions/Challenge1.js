const poll = {
    question: "What is your favourite programming language?",
    options: ["JavaScript", "Python", "Rust", "C++"],
    answers: [0, 0, 0, 0],

    registerNewAnswer() {
        const input = prompt(`${this.question}\n${this.options.map((opt, i) => `${i}: ${opt}`).join('\n')}\n(Write option number)`);
        const answer = Number(input);

        if (Number.isInteger(answer) && answer >= 0 && answer < this.options.length) {
            this.answers[answer]++;
            this.displayResults();
        } else {
            alert('Invalid input. Please enter a number between 0 and 3.');
        }
    },

    displayResults(type = 'array') {
        if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        } else {
            console.log(this.answers);
        }
    }
};

document.getElementById('answerPoll').addEventListener('click', function() {
    poll.registerNewAnswer();
});

// Bonus test data
const displayTestResults = (results, type = 'array') => {
    if (type === 'string') {
        console.log(`Poll results are ${results.join(', ')}`);
    } else {
        console.log(results);
    }
};

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

displayTestResults(data1, 'array');
displayTestResults(data1, 'string');

displayTestResults(data2, 'array');
displayTestResults(data2, 'string');
