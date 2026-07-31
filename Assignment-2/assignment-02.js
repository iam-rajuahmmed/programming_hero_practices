// Start My Solution  For  Problam 1

function matchWinner(teamAGoals, teamBGoals) {
    const isTeamANumber = typeof teamAGoals === 'number';
    const isTeamBNumber = typeof teamBGoals === 'number';

    if (isTeamANumber === false || isTeamBNumber === false) {
        const massageShow = "Invalid";
        return massageShow;
    }

    if (teamAGoals > teamBGoals) {
        const result = "Team A Won";
        return result;
    } else if (teamBGoals > teamAGoals) {
        const result = "Team B Won";
        return result;
    } else {
        const result = "Draw";
        return result;
    }
}

console.log(matchWinner(2, 1));
console.log(matchWinner(1, 3));
console.log(matchWinner(2, 2));
console.log(matchWinner("3", 2));

console.log("--------Start Result For Problam Two--------");



// Start My Solution  For  Problam 2


function isElevatorSafe(weights) {
    if (Array.isArray(weights) === false) {
        const showMassage = "Invalid";
        return showMassage;
    }

    let totalWeight = 0;
    for (let i = 0; i < weights.length; i++) {
        totalWeight = totalWeight + weights[i];
    }

    if (totalWeight <= 400) {
        const isSafe = true;
        return isSafe;
    } else {
        const isSafe = false;
        return isSafe;
    }
}

console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([90, 100, 95, 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));

console.log("-----Start Result For Problam Three------");



// Start My Solution  For  Problam 3


function calculateAiCost(tokensUsed) {
    const isTokenNumber = typeof tokensUsed === 'number';

    if (isTokenNumber === false || tokensUsed < 0) {
        const showMassage = "Invalid";
        return showMassage;
    }

    if (tokensUsed <= 500) {
        const freeCost = 0;
        return freeCost;
    }

    const extraTokens = tokensUsed - 500;
    const blocks = Math.floor(extraTokens / 100);
    const totalCost = blocks * 5;

    return totalCost;
}

console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));


console.log("------Start Result For Problam 4------");



// Start My Solution  For Problam 4


function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) === false) {
        const showMassage = "Invalid";
        return showMassage;
    }
    if (restaurants.length === 0) {
        const showMassage = "Invalid";
        return showMassage;
    }

    let highestRating = restaurants[0].rating;
    let restaurantName = restaurants[0].name;

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > highestRating) {
            highestRating = restaurants[i].rating;
            restaurantName = restaurants[i].name;
        }
    }

    const finalName = restaurantName.toUpperCase();
    return finalName;
}

console.log(topRatedRestaurant([{ name: "Chillox", rating: 4.5 }, { name: "Sultan's Dine", rating: 4.8 }]));
console.log(topRatedRestaurant([{ name: "KFC", rating: 4.2 }, { name: "Pizza Hut", rating: 4.6 }]));
console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("restaurants"));


// Start My Solution  For  Problam 5


function averageResponseTime(times) {
    if (Array.isArray(times) === false) {
        const showMassage = "Invalid";
        return showMassage;
    }

    if (times.length === 0) {
        const showMassage = "Invalid";
        return showMassage;
    }

    let total = 0;
    for (let i = 0; i < times.length; i++) {
        const isTimeNumber = typeof times[i] === 'number';
        if (isTimeNumber === false) {
            const showMassage = "Invalid";
            return showMassage;
        }
        total = total + times[i];
    }

    let average = total / times.length;
    return average;
}

console.log(averageResponseTime([120, 200, 150, 130]));
console.log(averageResponseTime([100, 100]));
console.log(averageResponseTime([]));
console.log(averageResponseTime("logs"));
console.log(averageResponseTime([120, "200", 150]));
