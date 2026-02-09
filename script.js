/************* AUTH CHECK *************/
if (localStorage.getItem("isRegistered") !== "true") {
  alert("Please register before starting the test.");
  window.location.href = "index.html";
}

/************* QUESTIONS *************/
const questions = [
  {
    question:
      "Step I: Add 2 to each number.\n" +
      "Step II: Arrange in descending order.\n" +
      "Input: 4 9 1 6",
    options: ["8 11 6 3", "11 8 6 3", "6 8 3 11", "3 6 8 11"],
    answer: 1
  },
  {
    question:
      "Rule: Vowels → next vowel (A-E-I-O-U-A), Consonants → next consonant.\n" +
      "Input: B A T",
    options: ["C E U", "C E V", "D E U", "C I U"],
    answer: 1
  },
  {
    question:
      "Step I: Reverse digits of each number.\n" +
      "Step II: Arrange in ascending order.\n" +
      "Input: 341 205 89 120",
    options: ["21 98 502 143", "98 21 143 502", "21 98 143 502", "143 502 98 21"],
    answer: 2
  },
  {
    question:
      "Step: Replace each letter by its alphabet mirror (A↔Z, B↔Y, etc.).\n" +
      "Input: S C O R E",
    options: ["HXLEV", "HXLIV", "HXMIV", "HXLJV"],
    answer: 1
  },
  {
    question:
      "Step I: Multiply odd-position numbers by 3.\n" +
      "Step II: Subtract 2 from even-position numbers.\n" +
      "Input: 2 5 4 7",
    options: ["6 3 12 5", "12 3 6 5", "6 5 12 3", "12 5 6 3"],
    answer: 0
  },
  {
    question:
      "Step: Arrange letters alphabetically, then reverse the sequence.\n" +
      "Input: M O C K",
    options: ["OMKC", "KMOC", "OKMC", "KCOM"],
    answer: 0
  },
  {
    question:
      "Step: Square each number and keep only the last digit.\n" +
      "Input: 17 23 14 9",
    options: ["9 9 6 1", "7 3 4 9", "1 6 9 9", "9 1 6 9"],
    answer: 0
  },
  {
    question:
      "Step: Swap 1st ↔ 4th and 2nd ↔ 3rd elements.\n" +
      "Input: 8 3 5 2",
    options: ["2 5 3 8", "5 2 8 3", "2 3 5 8", "8 5 3 2"],
    answer: 0
  },
  {
    question:
      "Step: Remove vowels, then reverse the order of remaining letters.\n" +
      "Input: T E A C H",
    options: ["HCT", "HTC", "TCH", "CHT"],
    answer: 0
  },
  {
    question:
      "Step I: Add digits of each number.\n" +
      "Step II: Multiply the resulting sums together.\n" +
      "Input: 21 15 4",
    options: ["54", "72", "36", "48"],
    answer: 1
  },
  {
    question:
      "Rule: Consonants → previous consonant, Vowels → unchanged.\n" +
      "Input: C L U B",
    options: ["BKUB", "BKTU", "BKTA", "BKUA"],
    answer: 3
  },
  {
    question:
      "Step: Arrange numbers by increasing number of factors.\n" +
      "Input: 6 7 8 9",
    options: ["7 9 6 8", "7 6 9 8", "7 8 6 9", "9 7 6 8"],
    answer: 0
  },
  {
    question:
      "Step: Move last letter to first, then replace all vowels with '#'.\n" +
      "Input: POWER",
    options: ["RPOW#", "#RPOW", "R#POW", "RPO#W"],
    answer: 0
  },
  {
    question:
      "Step: Find absolute difference with the next number (circularly).\n" +
      "Input: 20 13 5 9",
    options: ["7 8 4 11", "7 8 11 4", "8 7 4 11", "11 7 8 4"],
    answer: 0
  },
  {
    question:
      "Step: Convert letters to alphabet positions and find the sum.\n" +
      "Input: L O A D",
    options: ["34", "28", "30", "32"],
    answer: 3
  },
  {
    question:
      "Step: Convert to binary and count the number of 1s.\n" +
      "Input: 6 10 7",
    options: ["2 2 3", "2 3 2", "1 2 3", "3 2 2"],
    answer: 0
  },
  {
    question:
      "Step: Reverse the word, then shift each letter +1 alphabetically.\n" +
      "Input: RING",
    options: ["HJOS", "HOJS", "GJOS", "HJNR"],
    answer: 1
  },
  {
    question:
      "Step: Multiply odd numbers by 2, divide even numbers by 2.\n" +
      "Input: 5 8 7 4",
    options: ["10 4 14 2", "14 4 10 2", "10 2 14 4", "5 4 7 2"],
    answer: 0
  },
  {
    question:
      "Step: Replace each digit with (9 − digit).\n" +
      "Input: 4027",
    options: ["5972", "5072", "5978", "5973"],
    answer: 0
  },
  {
    question:
      "Step: Multiply the alphabet positions of the first and last letter.\n" +
      "Input: TASK",
    options: ["220", "242", "209", "231"],
    answer: 0
  },
  {
    question:
      "Step: Remove the middle letter, then reverse the remaining string.\n" +
      "Input: STATION",
    options: ["NOITATS", "NOITAS", "NOITAT", "NOTATS"],
    answer: 1
  },
  {
    question:
      "Step: Prime numbers → next prime, Non-prime → unchanged.\n" +
      "Input: 4 7 9 11",
    options: ["4 11 9 13", "4 11 9 12", "4 7 9 13", "4 11 10 13"],
    answer: 0
  },
  {
    question:
      "Step: Alternate +2 and -1 starting from the first number.\n" +
      "Input: 3 6 9 12",
    options: ["5 5 11 11", "5 7 11 13", "5 5 11 13", "5 7 11 11"],
    answer: 0
  },
  {
    question:
      "Rule: Vowels → next vowel, Consonants → mirror letter.\n" +
      "Input: CODE",
    options: ["XPII", "XUWI", "XPOF", "XQOI"],
    answer: 1
  },
  {
    question:
      "Step: Rearrange letters in descending alphabetical order.\n" +
      "Input: B R A I N",
    options: ["NRIBA", "NIRBA", "NIRAB", "NRABI"],
    answer: 0
  },
  {
    question: "Step I: Find the sum of the first three prime numbers greater than 20.\nStep II: Find the remainder when this sum is divided by 11.\nInput: 23, 29, 31",
    options: ["5", "6", "4", "3"],
    answer: 1
  },
  {
    question: "Step I: Find the total number of factors of the input number.\nStep II: Multiply the result by the smallest prime factor of the input.\nInput: 48",
    options: ["20", "10", "30", "40"],
    answer: 0
  },
  {
    question: "Step I: Identify the smallest number which when divided by 12, 15, and 20 leaves a remainder of 3 in each case.\nStep II: Find the sum of the digits of this number.",
    options: ["12", "6", "9", "10"],
    answer: 2
  },
  {
    question: "Step I: Find the unit digit of (23)^42.\nStep II: Find the unit digit of (17)^21.\nStep III: Add the two results.",
    options: ["10", "12", "16", "14"],
    answer: 2
  },
  {
    question: "Rule: If a number is divisible by both 8 and 9, it is 'VALID'.\nInput: 504",
    options: ["VALID", "INVALID (only by 8)", "INVALID (only by 9)", "INVALID (by neither)"],
    answer: 0
  },
  {
    question: "Step I: Find the HCF of 108, 288, and 360.\nStep II: Divide the result by the number of factors of 12.",
    options: ["10", "6", "12", "8"],
    answer: 1
  },
  {
    question: "Step I: Calculate the difference between the largest 3-digit number and the smallest 3-digit prime number.\nInput: 999 and 101",
    options: ["898", "897", "899", "900"],
    answer: 0
  },
  {
    question: "Step I: Find the product of the first four odd composite numbers.\nInput: 9, 15, 21, 25",
    options: ["70875", "71225", "70550", "69850"],
    answer: 0
  },
  {
    question: "Step I: Find the remainder when (7^19 + 2) is divided by 6.",
    options: ["1", "5", "3", "0"],
    answer: 2
  },
  {
    question: "Step I: Find the sum of all prime factors of 210.\nStep II: Check if the sum is a prime number itself.",
    options: ["17 (Yes)", "18 (No)", "19 (Yes)", "21 (No)"],
    answer: 0
  },
  {
    question: "Step I: Find the LCM of fractions 2/3, 4/9, and 5/6.\n(Rule: LCM of Numerators / HCF of Denominators)",
    options: ["20/3", "10/3", "20/9", "40/3"],
    answer: 0
  },
  {
    question: "Step I: A number 'N' is divisible by 11 if the difference between the sum of digits at odd and even positions is 0 or multiple of 11.\nInput: 7 * 5 4 6 2 (Find * to make it divisible by 11)",
    options: ["4", "7", "9", "8"],
    answer: 2
  },
  {
    question: "Step I: Find the largest number that divides 125 and 94 leaving remainders 5 and 4 respectively.",
    options: ["12", "15", "10", "30"],
    answer: 3
  },
  {
    question: "Step I: Determine how many trailing zeros are in 50! (factorial).",
    options: ["10", "12", "11", "13"],
    answer: 1
  },
  {
    question: "Step I: Find the smallest 4-digit number exactly divisible by 7, 11, and 13.",
    options: ["1001", "1011", "1101", "1000"],
    answer: 0
  },
  {
    question: "Step I: Calculate (999^2 - 1^2).\nStep II: Find the sum of the digits of the result.",
    options: ["36", "35", "34", "32"],
    answer: 1
  },
  {
    question: "Step I: Find the square of the difference between the 10th prime number and the 8th prime number.\nInput: 29 and 19",
    options: ["100", "81", "121", "64"],
    answer: 0
  },
  {
    question: "Step I: If x is a natural number, find the remainder when (x^3 - x) is divided by 6.",
    options: ["1", "0", "2", "3"],
    answer: 1
  },
  {
    question: "Step I: Calculate the sum of factors of 12.\nStep II: Divide by the number of factors of 12.",
    options: ["6", "4.66", "4.5", "5"],
    answer: 2
  },
  {
    question: "Step I: Find the value of 'k' if 56k4 is divisible by 4 but not by 8.",
    options: ["0", "2", "4", "6"],
    answer: 1
  },
  {
    question: "Step I: Find the greatest 4-digit number which is a perfect square.",
    options: ["9801", "9999", "9604", "9409"],
    answer: 0
  },
  {
    question: "Step I: Sum the first 10 even numbers.\nStep II: Subtract the sum of the first 10 odd numbers.",
    options: ["20", "5", "10", "15"],
    answer: 2
  },
  {
    question: "Step I: A number is multiplied by 3 and 7 is added. The result is 40. Find the original number.",
    options: ["10", "12", "11", "13"],
    answer: 0
  },
  {
    question: "Step I: Find the HCF of (2^3 * 3^2) and (2^2 * 3^3).",
    options: ["36", "108", "72", "12"],
    answer: 0
  },
  {
    question: "Step I: Find the remainder when 2^100 is divided by 7.",
    options: ["1", "2", "4", "0"],
    answer: 1
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: PRAGMATIC",
    options: ["Idealistic", "Practical", "Unrealistic", "Abstract"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: EPHEMERAL",
    options: ["Brief", "Temporary", "Eternal", "Short-lived"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: LOQUACIOUS",
    options: ["Silent", "Talkative", "Shy", "Reserved"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: MITIGATE",
    options: ["Alleviate", "Lessen", "Aggravate", "Soothe"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: CANDID",
    options: ["Dishonest", "Frank", "Deceptive", "Guarded"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: ABSTAIN",
    options: ["Refrain", "Indulge", "Avoid", "Swerve"],
    answer: 1
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: ADVERSITY",
    options: ["Prosperity", "Misfortune", "Happiness", "Fortune"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: LACONIC",
    options: ["Terse", "Concise", "Verbose", "Brief"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: FRUGAL",
    options: ["Wasteful", "Economical", "Extravagant", "Generous"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: BENEVOLENT",
    options: ["Kind", "Generous", "Malevolent", "Compassionate"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: OBSTINATE",
    options: ["Stubborn", "Flexible", "Yielding", "Docile"],
    answer: 0
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: CAPITULATE",
    options: ["Surrender", "Yield", "Resist", "Concede"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: QUERULOUS",
    options: ["Complaining", "Cheerful", "Content", "Silent"],
    answer: 0
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: GREGARIOUS",
    options: ["Sociable", "Outgoing", "Reclusive", "Friendly"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: METICULOUS",
    options: ["Careless", "Thorough", "Sloppy", "Hasty"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: EXACERBATE",
    options: ["Worsen", "Inflame", "Ameliorate", "Irritate"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: PRECARIOUS",
    options: ["Safe", "Uncertain", "Stable", "Secure"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: AMBIGUOUS",
    options: ["Vague", "Unclear", "Explicit", "Obscure"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: SAGACIOUS",
    options: ["Wise", "Foolish", "Ignorant", "Careless"],
    answer: 0
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: ENERVATE",
    options: ["Weaken", "Exhaust", "Energize", "Fatigue"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: ALACRITY",
    options: ["Slowess", "Eagerness", "Reluctance", "Apathy"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: TRACTABLE",
    options: ["Manageable", "Obedient", "Stubborn", "Compliant"],
    answer: 2
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: VENERATION",
    options: ["Disrespect", "Reverence", "Scorn", "Contempt"],
    answer: 1
  },
  {
    question: "Select the most appropriate ANTONYM of the word.\nInput: TRANSIENT",
    options: ["Fleeting", "Permanent", "Short", "Passing"],
    answer: 1
  },
  {
    question: "Select the most appropriate SYNONYM of the word.\nInput: IMPETUOUS",
    options: ["Rash", "Cautious", "Careful", "Thoughtful"],
    answer: 0
  }

];

/************* VARIABLES *************/
let currentIndex = 0;
let selectedOption = null;
let score = 0;

/************* TIMER SETTINGS *************/
let totalTime = 90 * 60; // 90 minutes = 1 hour 30 minutes
let timerInterval;

/************* ELEMENTS *************/
const questionEl = document.getElementById("question");
const boxes = document.querySelectorAll(".bx");
const nextBtn = document.getElementById("btn-1");
const skipBtn = document.getElementById("btn-2");
const timerEl = document.getElementById("timer");
if (!timerEl) {
  console.error("Timer element not found in HTML");
}


/************* LOAD QUESTION *************/
function loadQuestion() {
  const q = questions[currentIndex];
  questionEl.innerText = q.question;
  selectedOption = null;

  boxes.forEach((box, index) => {
    box.innerText = q.options[index];
    box.classList.remove("active");

    box.onclick = () => {
      boxes.forEach(b => b.classList.remove("active"));
      box.classList.add("active");
      selectedOption = index;
    };
  });
}

/************* NEXT QUESTION *************/
function goNext() {
  if (selectedOption !== null) {
    // If the user selected an answer
    if (selectedOption === questions[currentIndex].answer) {
      score += 2; // Add 2 marks for correct
    } else {
      score -= 0.5; // Deduct 0.5 marks for wrong
    }
  } 
  // If selectedOption is null, the code does nothing (0 marks for skip)

  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    finishTest();
  }
}

/************* BUTTONS *************/
nextBtn.onclick = () => {
  if (selectedOption === null) {
    alert("Select an option or skip");
    return;
  }
  goNext();
};

skipBtn.onclick = () => {
  goNext();
};
//timer

function startTimer() {
  timerInterval = setInterval(() => {
    // Calculate Hours, Minutes, and Seconds
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = totalTime % 60;

    // Format numbers to always show two digits (e.g., 05 instead of 5)
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Display format: HH:MM:SS
    timerEl.innerText = `Time Left: ${h}:${m}:${s}`;

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      alert("Time up! Test auto-submitted.");
      finishTest();
    } else {
      totalTime--;
    }
  }, 1000);
}

/************* FINISH TEST *************/
function finishTest() {
  clearInterval(timerInterval);

  const user = JSON.parse(localStorage.getItem("userData"));
  const maxPossibleMarks = questions.length * 2;

  emailjs.send("service_6bczcaw", "template_5izpfyb", {
    name: user.name,
    email: user.email,
    phone: user.phone,
    score: score.toFixed(1), // Formats to 1 decimal place (e.g., 10.5)
    total: maxPossibleMarks
  })
  .then(() => {
    alert(`Test completed! Your Final Score: ${score.toFixed(1)} / ${maxPossibleMarks}`);
    localStorage.clear();
    window.location.href = "index.html";
  })
  .catch(err => {
    console.error(err);
    alert(`Test completed! Score: ${score.toFixed(1)}. (Email failed to send)`);
  });
}

/************* START *************/
loadQuestion();
startTimer();
