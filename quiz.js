// quiz.js

// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";
    
    // Get the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    if (userAnswer) {
        // Compare user's answer with correct answer
        if (userAnswer.value === correctAnswer) {
            // Display correct feedback
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Display incorrect feedback
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // Display a message if no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);