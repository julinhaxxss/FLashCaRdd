function renderFlashcards() {
  const container = document.getElementById('flashcards');
  container.innerHTML = '';

  flashcards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'flashcard';
    cardEl.textContent = card.question;

    cardEl.onclick = () => {
      cardEl.textContent = cardEl.textContent === card.question ? card.answer : card.question;
    };

    container.appendChild(cardEl);
  });
}

function addFlashcard() {
  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();

  if (question && answer) {
    flashcards.push({ question, answer });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
    renderFlashcards();
  }
}

renderFlashcards();
