

//Messages-Strings of Array
const codeReminders = ["Not all syntax have a closing tag.", "Use proper HTML semantics for markups",
    "Check for grammar errors, punctuation and improper syntax errors to avoid running into potential bugs",
    "Select the correct iterator method for a given task.", "MDN provides information that is useful for programming."]

const codeFacts = ["Functions can be passed into other functions as parameters.",
    "Using console.log regularly as you write code, can help you to keep track of the progress you are making.",
    "Variable names cannot start with numbers.",
    "Arrays can store any data types (including strings, numbers, and booleans)."]

const codeTips = ["Always keep improving your Technical Skills.",
"The more you practice your Technical Skills, the more you will become a master of those skills.",
"Learn each new language in moderation.",
"Enjoy as you Code!."]

//Generate random messages
function generateRandomMessages(arr1, arr2, arr3) {
    const randomMessage1 = arr1[Math.floor(Math.random()*arr1.length)];
    const randomMessage2 = arr2[Math.floor(Math.random()*arr2.length)];
    const randomMessage3 = arr3[Math.floor(Math.random()*arr3.length)];

    const masterRandomMessage = [randomMessage1, randomMessage2, randomMessage3];
    
    const myRandomizeMessage = masterRandomMessage[Math.floor(Math.random()*masterRandomMessage.length)];

    console.log(myRandomizeMessage);
}


generateRandomMessages(codeReminders, codeFacts, codeTips);





 


