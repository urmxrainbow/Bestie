
let userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];

function handleAnswer(questionNumber, isCorrect, nextPage) {
    userAnswers[questionNumber - 1] = isCorrect;
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    history.replaceState(null, '', nextPage);
    location.href = nextPage;
}

function initializePage() {
    history.replaceState(null, '');
    window.addEventListener('popstate', function(event) {
        location.href = 'summary.html';
    });
}

function startQuiz() {
    userAnswers = [];
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    location.href = 'question1.html';
}

function showSummary() {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const correctCount = userAnswers.filter(answer => answer).length;
    const summaryElement = document.getElementById('summary');
    const congratulationsElement = document.getElementById('congratulations');
    const shareButton = document.getElementById('shareButton');
    
    summaryElement.innerText = `You got ${correctCount} out of 5 !`;
    
    if (correctCount === 5) {
        congratulationsElement.innerText = 'You know me so well Bestie \uD83D\uDC8B';
        shareButton.style.display = 'block';
    }
}

function shareScore() {
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
    const correctCount = userAnswers.filter(answer => answer).length;
    const shareText = `I scored ${correctCount} out of 5 on this quiz!`;
    if (navigator.share) {
        navigator.share({
            title: 'Quiz Score',
            text: shareText,
            url: window.location.href
        });
    } else {
        alert('Sharing not supported in this browser.');
    }
}
