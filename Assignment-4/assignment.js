// Problem 1 — Battery Level Status
const getBatteryStatus = (percentage) => {
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    } else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    } else if (percentage >= 51 && percentage <= 90) {
        return "High";
    } else if (percentage >= 91 && percentage <= 100) {
        return "Full";
    }
    return "Invalid percentage";
};

// Problem 2 — Table Booking Confirmation
const formatBookingConfirmation = (booked) => {
    return `${booked.name}'s table for ${booked.guests} guests is confirmed at ${booked.time}.`;
};

// Problem 3 — Weekly Expense Tracker
const calculateWeeklyTotal = (expenses) => {
    const total = expenses.reduce((accumulator, currentExpense) => {
        return accumulator + currentExpense;
    }, 0);
    return total;
};

// Problem 4 — Traffic Light Action
const getTrafficAction = (light) => {
    switch (light) {
        case "red":
            return "Stop";
        case "yellow":
            return "Slow Down";
        case "green":
            return "Go";
    }
};

// Problem 5 — Quiz Score Summary
const getQuizSummary = (scores) => {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }

    const total = scores.reduce((accumulator, currentScore) => {
        return accumulator + currentScore;
    }, 0);
    const average = total / scores.length;

    return { total, average };
};
