document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "Which of the following is an example of a metaphor?",
            options: ["Time is a thief.", "He is as brave as a lion.", "The wind whispered through the trees."],
            answer: "Time is a thief."
        },
        {
            lesson: "What is the main function of a noun in a sentence?",
            options: ["To name a person, place, or thing", "To describe an action", "To connect clauses"],
            answer: "To name a person, place, or thing"
        },
        {
            lesson: "What is the past tense of 'go'?",
            options: ["Went", "Gone", "Going"],
            answer: "Went"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
