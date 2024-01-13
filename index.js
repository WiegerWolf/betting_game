const startingMoney = 25;
const maxTakeHomeMoney = 250;
const probabilityOfHeads = 0.6;

let currentMoney = startingMoney;
let currentStrategy = 'betOnHeads';

function flipCoin() {
    return Math.random() < probabilityOfHeads ? 'Heads' : 'Tails';
}

// Test different betting strategies here
const STRATEGY = {
    // Always bet on heads
    betOnHeads() {
        return 'Heads';
    },

    // Always bet on tails
    betOnTails() {
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
}

function run(percentage = 0.2) {
    // Now let's run the simulation
    for (let i = 0; i < 100; i++) {
        if (currentMoney <= 0 || currentMoney >= maxTakeHomeMoney) {
            break;
        }

        // always bet 20% of your current money
        const betAmount = Math.round(currentMoney * percentage);
        const bet = STRATEGY[currentStrategy]();
        const result = flipCoin();

        if (bet === result) {
            currentMoney += betAmount;
        }
        else {
            currentMoney -= betAmount;
        }
    }

    return currentMoney;
}

function simulate(p) {
    const results = [];
    for (let i = 0; i < 1000; i++) {
        currentMoney = startingMoney;
        results.push(run(p));
    }
    // return the average
    return results.reduce((a, b) => a + b, 0) / results.length;
}

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

function stragegyRun(strategy) {
    currentStrategy = strategy;
    let results = {};
    for (let i = 0; i < 100; i++) {
        results[i] = simulate(i / 100);
    }

    // visualize the results
    results = Object.entries(results).map(([k, v]) => ({ x: k, y: v }));
    let chart = TUIChart(results);
    console.log(currentStrategy, `min: ${chart.minValue}, max: ${chart.maxValue}`);
    console.log(chart.print());

    // print space for the next chart
    console.log('\n\n');

}

stragegyRun('betOnHeads');
stragegyRun('betOnHeads80PercentOfTheTime');
stragegyRun('betOnHeads60PercentOfTheTime');
stragegyRun('betOnHeadsHalfTheTime');
stragegyRun('betOnHeads40PercentOfTheTime');
stragegyRun('betOnHeads20PercentOfTheTime');
stragegyRun('betOnTails');
