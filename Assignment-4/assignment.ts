// Problem 1 — Battery Level Status
const getBatteryStatus = (percentage: number): string => {
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
type booking = {
    name: string;
    guests: number;
    time: string;
};

const formatBookingConfirmation = (booked: booking): string => {
    return `${booked.name}'s table for ${booked.guests} guests is confirmed at ${booked.time}.`;
};

// Problem 3 — Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]): number => {
    const total = expenses.reduce((accumulator, currentExpense) => {
        return accumulator + currentExpense;
    }, 0);
    return total;
};

// Problem 4 — Traffic Light Action
type Light = "red" | "yellow" | "green";

const getTrafficAction = (light: Light): string => {
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
type QuizSummary = {
    total: number;
    average: number;
};

const getQuizSummary = (scores: number[]): QuizSummary => {
    if (scores.length === 0) {
        return { total: 0, average: 0 };
    }

    const total = scores.reduce((accumulator, currentScore) => {
        return accumulator + currentScore;
    }, 0);
    const average = total / scores.length;

    return { total, average };
};

export {};
