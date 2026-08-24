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

// Test Cases for Problem 1
console.log("--- Problem 1 ---");
console.log(getBatteryStatus(10));  // "Low"
console.log(getBatteryStatus(35));  // "Medium"
console.log(getBatteryStatus(75));  // "High"
console.log(getBatteryStatus(100)); // "Full"


// Problem 2 — Table Booking Confirmation
type booking = {
    name: string;
    guests: number;
    time: string;
};

const formatBookingConfirmation = (booked: booking): string => {
    return `${booked.name}'s table for ${booked.guests} guests is confirmed at ${booked.time}.`;
};

// Test Cases for Problem 2
console.log("\n--- Problem 2 ---");
console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" }));
// "Aisha's table for 4 guests is confirmed at 7:00 PM."
console.log(formatBookingConfirmation({ name: "Rahim", guests: 2, time: "8:30 PM" }));
// "Rahim's table for 2 guests is confirmed at 8:30 PM."


// Problem 3 — Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]): number => {
    const total = expenses.reduce((accumulator, currentExpense) => {
        return accumulator + currentExpense;
    }, 0);
    return total;
};

// Test Cases for Problem 3
console.log("\n--- Problem 3 ---");
console.log(calculateWeeklyTotal([200, 450, 100])); // 750
console.log(calculateWeeklyTotal([1000, 250]));     // 1250
console.log(calculateWeeklyTotal([]));              // 0


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

// Test Cases for Problem 4
console.log("\n--- Problem 4 ---");
console.log(getTrafficAction("red"));    // "Stop"
console.log(getTrafficAction("yellow")); // "Slow Down"
console.log(getTrafficAction("green"));  // "Go"


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

// Test Cases for Problem 5
console.log("\n--- Problem 5 ---");
console.log(getQuizSummary([8, 9, 7, 10])); // { total: 34, average: 8.5 }
console.log(getQuizSummary([5, 5]));        // { total: 10, average: 5 }
console.log(getQuizSummary([]));            // { total: 0, average: 0 }

export { };
