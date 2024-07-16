// quiz.js

// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";

    // Get the user's answer by selecting the checked radio button
    var userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if a radio button is checked
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Provide feedback for correct answer
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Provide feedback for incorrect answer
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Inform user to select an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";

    // Get the user's answer by selecting the checked radio button
    var userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if a radio button is checked
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            // Provide feedback for correct answer
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Provide feedback for incorrect answer
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Inform user to select an answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);