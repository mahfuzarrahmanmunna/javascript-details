// function checkFirstIndex(email) {
//     // Check if the string is empty
//     if (email.length === 0)
//     return true;

//     // Get the first character
//     let firstChar = email.charAt(0);

//     // Check if the first character is one of the specified symbols
//     return ["*", "-", ".", "@"].includes(firstChar);
// }

// console.log(checkFirstIndex("*hello")); // true
// console.log(checkFirstIndex("-world")); // true
// console.log(checkFirstIndex(".test"));  // true
// console.log(checkFirstIndex("@test"));  // true
// console.log(checkFirstIndex("hello"));  // false



// function checkFirstIndex(str) {
//     // Check if the string is empty
//     if (str.length === 0) {
//         return false;
//     }

//     // Get the first character using array notation
//     let firstChar = str[0];

//     // Check if the first character is one of the specified symbols
//     return firstChar === '*' || firstChar === '-' || firstChar === '.' || firstChar === '@';
// }

// console.log(checkFirstIndex("*hello")); // true
// console.log(checkFirstIndex("-world")); // true
// console.log(checkFirstIndex(".test"));  // true
// console.log(checkFirstIndex("@test"));  // true
// console.log(checkFirstIndex("hello"));  // false


// function checkFirstIndexSymbol(str) {
//     // Get the first character using array notation
//     let firstChar = str[0];

//     // Symbols to check
//     let symbols = ['-', '+', '@', '.'];

//     // Check if the first character is in the symbols array
//     return !symbols.includes(firstChar);
// }

// console.log(checkFirstIndexSymbol("hello"));  // true (Valid - no symbol at start)
// console.log(checkFirstIndexSymbol("-hello")); // false (Invalid - '-' at start)
// console.log(checkFirstIndexSymbol("+world")); // false (Invalid - '+' at start)
// console.log(checkFirstIndexSymbol("@test"));  // false (Invalid - '@' at start)
// console.log(checkFirstIndexSymbol(".test"));  // false (Invalid - '.' at start)
// function electionResult(votes) {
//     // Check if input is an array
//     if (!Array.isArray(votes)) {
//         return "Invalid";
//     }

//     // Initialize vote counters
//     let mangoCount = 0;
//     let bananaCount = 0;

//     // Loop through the array to count votes
//     for (let vote of votes) {
//         // Convert each vote to lowercase to handle case-insensitive comparison
//         let lowerCaseVote = vote.toLowerCase();
//         if (lowerCaseVote === "mango") {
//             mangoCount++;
//         } else if (lowerCaseVote === "banana") {
//             bananaCount++;
//         }
//     }

//     // Determine the result
//     if (mangoCount > bananaCount) {
//         return "Mango";
//     } else if (bananaCount > mangoCount) {
//         return "Banana";
//     } else {
//         return "Draw";
//     }
// }

// // Test cases
// console.log(electionResult(["mango", "banana", "mango", "banana", "mango"])); // "Mango"
// console.log(electionResult([]));                                              // "Draw"
// console.log(electionResult(["mango", "banana", "jaker party", "no"]));        // "Draw"
// console.log(electionResult(["mango"]));                                       // "Mango"
// console.log(electionResult(["banana", "banana", "age e valo chilam", "no"])); // "Banana"
// console.log(electionResult({ result: "mango , banana , mango" }));              // "Invalid"
// console.log(electionResult("mango , banana"));                                // "Invalid"
// console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));       // "Mango"


// function isBestFriend(f1, f2) {
//     if (typeof f1 !== 'object' || typeof f2 !== 'object' || f1 === null || f2 === null) {
//         return { error: "Invalid input" };
//     }

//     return {
//         person1: f1,
//         person2: f2,
//         areBestFriends: f1.name === f2.friend && f2.name === f1.friend
//     };
// }

// // Example Usage:
// console.log(isBestFriend({ name: "munna", friend: "rahim" }, { name: "mahir", friend: "munhna" }));
// /* Output:
// {
//     person1: { name: "munna", friend: "rahim" },
//     person2: { name: "rahim", friend: "munna" },
//     areBestFriends: true
// }
// */


// function isBestFriend(f1, f2) {
//     if (typeof f1 !== 'object' || f1 === null) {
//         return "Invalid";
//     } else if (typeof f2 !== 'object' || f2 === null) {
//         return "Invalid";
//     }

//     // Check if they are best friends
//     return f1.bestFriend === f2.roll && f2.bestFriend === f1.roll;
// }

// console.log(isBestFriend({ name: "hashem", roll: 21, bestFriend: 1 },
//     { name: "kashem", roll: 1, bestFriend: 2 }

// ));




function calculateWatchTime(times) {
    // ইনপুট চেক করা হচ্ছে
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    let totalSeconds = 0;

    // লুপ চালিয়ে মোট সময় গণনা করা হচ্ছে
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number') {
            return "Invalid"; // যদি কোনো এলিমেন্ট সংখ্যা না হয়
        }
        totalSeconds += times[i];
    }

    // ঘন্টা, মিনিট, সেকেন্ড কনভার্সন
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds % 3600) / 60);
    let second = totalSeconds % 60;

    return { hour, minute, second };
}

// ✅ টেস্ট ইনপুট:
console.log(calculateWatchTime([100, 3800]));
