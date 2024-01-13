const startingMoney = 25; // 25 dollars
const maxTakeHomeMoney = 250; // 250 dollars
const probabilityOfHeads = 0.6; // 60% chance of heads and 40% chance of tails in a coin flip

let currentMoney = startingMoney;
let currentStrategy = 'betOnHeads';

function flipCoin() {
    return Math.random() < probabilityOfHeads ? 'Heads' : 'Tails';
}

// Different strategies to bet on heads or tails
const STRATEGY = {
    // Always bet on heads
    betAlwaysOnHeads() {
        return 'Heads';
    },

    // Always bet on tails
    betAlwaysOnTails() {
        return 'Tails';
    },

    // Bet on heads 50% of the time
    betOnHeadsHalfTheTime() {
        return Math.random() < 0.5 ? 'Heads' : 'Tails';
    },

    // Bet on heads 20% of the time
    betOnHeads20PercentOfTheTime() {
        return Math.random() < 0.2 ? 'Heads' : 'Tails';
    },

    // Bet on heads 80% of the time
    betOnHeads80PercentOfTheTime() {
        return Math.random() < 0.8 ? 'Heads' : 'Tails';
    },

    // Bet on heads 60% of the time
    betOnHeads60PercentOfTheTime() {
        return Math.random() < 0.6 ? 'Heads' : 'Tails';
    },

    // Bet on heads 40% of the time
    betOnHeads40PercentOfTheTime() {
        return Math.random() < 0.4 ? 'Heads' : 'Tails';
    },

    wins: 0,
    // Bet on tails only if you have already won 3 times in a row
    betOnTailsAfterWinning3TimesInARow() {
        const bet = this.wins >= 3 ? 'Tails' : 'Heads';
        this.wins = bet === 'Tails' ? 0 : this.wins + 1;
        return bet;
    },

    wins_2: 0,
    // Bet on tails only if you have already won 7 times in a row
    betOnTailsAfterWinning7TimesInARow() {
        const bet = this.wins_2 >= 7 ? 'Tails' : 'Heads';
        this.wins_2 = bet === 'Tails' ? 0 : this.wins_2 + 1;
        return bet;
    },
}

// Run the simulation for a given percentage of money to bet
function run(percentage = 0.2) {
    for (let i = 0; i < 100; i++) { // run the simulation for 100 rounds or until you run out of money or reach the max take home money
        if (currentMoney <= 0 || currentMoney >= maxTakeHomeMoney) {
            break;
        }

        const betAmount = Math.round(currentMoney * percentage);
        const bet = STRATEGY[currentStrategy]();
        const result = flipCoin();

        if (bet === result) {
            currentMoney += betAmount; // you win, so add the bet amount to your money
        }
        else {
            currentMoney -= betAmount; // you lose, so subtract the bet amount from your money
        }
    }

    return currentMoney; // return the money you have at the end of the simulation
}

// Run the simulation 1000 times and return the average
function simulate(p) {
    const results = [];
    for (let i = 0; i < 1000; i++) {
        currentMoney = startingMoney;
        results.push(run(p)); // run the simulation for a given percentage of money to bet
    }
    // return the average
    return results.reduce((a, b) => a + b, 0) / results.length;
}

function stragegyRun(strategy) {
    currentStrategy = strategy; // set the current strategy
    let results = {}; // to store the results for different percentages of money to bet
    for (let i = 0; i < 100; i++) { // run the simulation for different percentages of money to bet
        results[i] = simulate(i / 100);
    }

    // visualize the results
    let chart = TUIChart(Object.entries(results).map(([k, v]) => ({ x: k, y: v })));
    console.log(currentStrategy, `min: ${chart.minValue}, max: ${chart.maxValue}`);
    console.log(chart.print());

    // print space for the next chart
    console.log('\n\n');

}

stragegyRun('betAlwaysOnHeads');
stragegyRun('betOnTailsAfterWinning3TimesInARow');
stragegyRun('betOnTailsAfterWinning7TimesInARow');
stragegyRun('betOnHeads80PercentOfTheTime');
stragegyRun('betOnHeads60PercentOfTheTime');
stragegyRun('betOnHeadsHalfTheTime');
stragegyRun('betOnHeads40PercentOfTheTime');
stragegyRun('betOnHeads20PercentOfTheTime');
stragegyRun('betAlwaysOnTails');


// HELPER FUNCTIONS -- nothing to do with the simulation
// Print the results on the console using ascii
function TUIChart(chartData) {
    const width = 100;
    const height = 20;

    const chart = new Array(height + 1).fill(' ').map(() => new Array(width + 1).fill(' '));

    const maxValue = Math.max(...chartData.map(d => d.y));
    const minValue = Math.min(...chartData.map(d => d.y));

    const yScale = (value) => Math.round(((value - minValue) / (maxValue - minValue)) * height);

    chartData.forEach((d) => {
        const x = Math.round((d.x / 100) * width);
        const y = height - yScale(d.y);
        chart[y][x] = '*';
    });

    // add the x-axis labels
    chart[height] = new Array(width + 1).fill('-');
    chart[height][0] = '0';
    chart[height][width] = '1';
    // add intermediate x-axis labels
    for (let i = 1; i < width; i++) {
        if (i % 10 === 0) {
            chart[height][i] = '|';
        }
        else {
            chart[height][i] = '-';
        }
    }

    chart.minValue = minValue;
    chart.maxValue = maxValue;
    chart.print = () => chart.map((row) => row.join('')).join('\n');

    return chart
}