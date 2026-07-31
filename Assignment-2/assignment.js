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
