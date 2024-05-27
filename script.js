function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    if (selectedAnswer == 3) {
        alert("Правильно");
    } else {
        alert("Неправильно");
    }
}