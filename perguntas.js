// Perguntas iniciais
var flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
  { question: "O que é HTML?", answer: "Uma linguagem de marcação usada para criar páginas web." },
  { question: "O que significa CSS?", answer: "Cascading Style Sheets (Folhas de Estilo em Cascata)." }
];
