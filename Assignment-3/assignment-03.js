// Problem 1 - Student Introduction Generator
const studentIntroduction = (student) => {
    if (typeof student !== 'object') {
        return "Invalid";
    } else if (student === null) {
        return "Invalid";
    } else if (Array.isArray(student)) {
        return "Invalid";
    } else if (student.name === undefined) {
        return "Invalid";
    } else if (student.age === undefined) {
        return "Invalid";
    } else if (student.course === undefined) {
        return "Invalid";
    } else {
        return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
    }
};

console.log("--- Problem 1 ---");
console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" })); // My name is Rafi. I am 18 years old. I am learning JavaScript.
console.log(studentIntroduction({}));
console.log(studentIntroduction("student"));


// Problem 2 - Active User Filter
const filterActiveUsers = (users) => {
    if (!Array.isArray(users)) {
        return "Invalid";
    } else if (users.length === 0) {
        return "Invalid";
    }
    
    for (let user of users) {
        if (typeof user !== 'object') {
            return "Invalid";
        } else if (user === null) {
            return "Invalid";
        } else if (Array.isArray(user)) {
            return "Invalid";
        } else if (user.isActive === undefined) {
            return "Invalid";
        }
    }

    return users.filter(user => user.isActive === true);
};

console.log("\n--- Problem 2 ---");
console.log(filterActiveUsers([{ name: "A", isActive: true }, { name: "B", isActive: false }])); // [{name:"A", isActive:true}]
console.log(filterActiveUsers([])); // Invalid
console.log(filterActiveUsers([{ name: "A" }])); // Invalid
console.log(filterActiveUsers("users")); // Invalid


// Problem 3 - Trending Hashtag Counter
const countHashtags = (caption) => {
    if (typeof caption !== 'string') {
        return "Invalid";
    }

    const words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";

    for (let word of words) {
        if (word.startsWith("#")) {
            hashtagCount++;
            let tagWithoutHash = word.substring(1);
            
            if (tagWithoutHash.length > longestTag.length) {
                longestTag = tagWithoutHash;
            }
        }
    }

    return { hashtagCount: hashtagCount, longestTag: longestTag };
};

console.log("\n--- Problem 3 ---");
console.log(countHashtags("Loving this weather today #sunny #vibes #weekend")); // { hashtagCount: 3, longestTag: 'weekend' }
console.log(countHashtags("No hashtags here")); // { hashtagCount: 0, longestTag: '' }
console.log(countHashtags("#ai #ml data science")); // { hashtagCount: 2, longestTag: 'ai' }
console.log(countHashtags(123)); // Invalid
console.log(countHashtags(["#fun"])); // Invalid


// Problem 4 - Bonus Score Calculator
const bonusScore = (scores) => {
    if (!Array.isArray(scores)) {
        return "Invalid";
    } else if (scores.length === 0) {
        return "Invalid";
    }

    for (let score of scores) {
        if (typeof score !== 'number') {
            return "Invalid";
        }
    }

    const updatedScores = scores.map(score => score + 10);
    const total = updatedScores.reduce((sum, current) => sum + current, 0);
    
    return total;
};

console.log("\n--- Problem 4 ---");
console.log(bonusScore([80, 65, 90, 75])); // 350
console.log(bonusScore([100])); // 110
console.log(bonusScore([0, 10])); // 30
console.log(bonusScore([])); // Invalid
console.log(bonusScore("scores")); // Invalid
console.log(bonusScore([80, "90", 70])); // Invalid


// Problem 5 - Debugging Challenge: AI Leaderboard Generator
const generateLeaderboard = (students) => {
    if (!Array.isArray(students)) {
        return "Invalid";
    } else if (students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (typeof student !== 'object') {
            return "Invalid";
        } else if (student === null) {
            return "Invalid";
        } else if (Array.isArray(student)) {
            return "Invalid";
        } else if (student.name === undefined) {
            return "Invalid";
        } else if (student.score === undefined) {
            return "Invalid";
        } else if (typeof student.score !== 'number') {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70);
    const names = qualified.map(student => student.name.toUpperCase());
    
    return names.slice(0, 3);
};

console.log("\n--- Problem 5 ---");
console.log(generateLeaderboard([{ name: "Rafi", score: 90 }, { name: "Sadia", score: 65 }, { name: "Karim", score: 85 }, { name: "Nafis", score: 75 }])); // ["RAFI","KARIM","NAFIS"] 
console.log(generateLeaderboard([{ name: "A", score: 70 }, { name: "B", score: 71 }])); // ["A","B"] 
console.log(generateLeaderboard([])); // Invalid
console.log(generateLeaderboard("students")); // Invalid
console.log(generateLeaderboard([{ name: "Rafi" }])); // Invalid
console.log(generateLeaderboard([{ name: "Rafi", score: "90" }])); // Invalid
