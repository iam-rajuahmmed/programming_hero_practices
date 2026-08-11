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
