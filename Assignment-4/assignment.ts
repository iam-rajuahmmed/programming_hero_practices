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


type booking = {
    name: string;
    guests: number;
    time: string;
};
const formatBookingConfirmation = (booked: booking): string => {
    return `${booked.name}'s table for ${booked.guests} guests is confirmed at ${booked.time}.`;
};


const calculateWeeklyTotal = (expenses: number[]): number => {
    const total = expenses.reduce((accumulator, currentExpense) => {
        return accumulator + currentExpense;
    }, 0);
    return total;
};
 

type Light = "red" | "yellow" | "green";
const getTrafficAction = (light: Light): string => {
    if (light === "red") {
        return "Stop";
    } else if (light === "yellow") {
        return "Slow Down";
    } else {
        return "Go";
    }
};


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

export { };
