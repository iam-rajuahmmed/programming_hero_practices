function studentIntroduction(student) {
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
        return `My name is ${student.name}. Iam ${student.age}years old. Iam learning ${student.course}.`;
    }
}

function filterActiveUsers(users) {
    if (!Array.isArray(users)) {
        return "Invalid";
    } else if (users.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
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
}

function countHashtags(caption) {
    if (typeof caption !== 'string') {
        return "Invalid";
    }

    const words = caption.split(" ");
    let hashtagCount = 0;
    let longestTag = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.startsWith("#")) {
            hashtagCount++;
            let tagWithoutHash = word.substring(1);

            if (tagWithoutHash.length > longestTag.length) {
                longestTag = tagWithoutHash;
            }
        }
    }

    return { hashtagCount: hashtagCount, longestTag: longestTag };
}

function bonusScore(scores) {
    if (!Array.isArray(scores)) {
        return "Invalid";
    } else if (scores.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        if (typeof score !== 'number') {
            return "Invalid";
        }
    }

    const updatedScores = scores.map(score => score + 10);
    const total = updatedScores.reduce((sum, current) => sum + current, 0);

    return total;
}

function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    } else if (students.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

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
}