document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    if (!userAnswer) {
        document.getElementById("feedback").innerText = "Please select an answer.";
        return;
    }

    let correctAnswer = "4";
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "Correct! Well done.";
    } else {
        document.getElementById("feedback").innerText = "That's incorrect. Try again!";
    }
}




