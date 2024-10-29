const questions = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: [
      "Kangaroo",
      "Kiwi bird",
      "Koala",
      "Emu"
    ],
    answer: "Kiwi bird"
  },
  {
    question: "What is the capital city of New Zealand?",
    options: [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton"
    ],
    answer: "Wellington"
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: [
      "Maori",
      "Aborigines",
      "Inuit",
      "Sami"
    ],
    answer: "Maori"
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series"
    ],
    answer: "Lord of the Rings trilogy"
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley"
    ],
    answer: "Mount Cook (Aoraki)"
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: [
      "Auckland",
      "Wellington",
      "Dunedin",
      "Queenstown"
    ],
    answer: "Auckland"
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: [
      "Cricket",
      "Rugby Union",
      "Soccer",
      "Netball"
    ],
    answer: "Rugby Union"
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: [
      "Tasman Sea",
      "Coral Sea",
      "South China Sea",
      "Arafura Sea"
    ],
    answer: "Tasman Sea"
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: [
      "Haka",
      "Hongi",
      "Powhiri",
      "Waka"
    ],
    answer: "Hongi"
  },
  {
    question: "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: [
      "Rotorua",
      "Christchurch",
      "Hamilton",
      "Napier"
    ],
    answer: "Rotorua"
  }
];
// Add your code underneath this comment.
let count = 0;

document.getElementById('submitButton').addEventListener('click', function () {
    if (count < questions.length) {
        const question = document.getElementById('question');
        question.innerText = questions[count].question;

        const answer1 = document.getElementById("answer1");
        answer1.innerText = questions[count].options[0];

        const answer2 = document.getElementById("answer2");
        answer2.innerText = questions[count].options[1];

        const answer3 = document.getElementById("answer3");
        answer3.innerText = questions[count].options[2];

        const answer4 = document.getElementById("answer4");
        answer4.innerText = questions[count].options[3];
    } else {
        alert("No more questions!");
    }
});
function clearThebackground() {
    const elements = ['answer1', 'answer2', 'answer3', 'answer4'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.style.backgroundColor = "white";
    });
}
function highlightAnswer(answerId) {
    clearThebackground();
    const element = document.getElementById(answerId);
    element.style.backgroundColor = "lightblue";
}
document.getElementById('answer1').addEventListener('click', () =>{
highlightAnswer('answer1');
selectAnswer('answer1');
});
document.getElementById('answer2').addEventListener('click', () => {
    highlightAnswer('answer2');
    selectAnswer('answer2');
});
document.getElementById('answer3').addEventListener('click', () => {
  highlightAnswer('answer3');
  selectAnswer('answer3');
});
document.getElementById('answer4').addEventListener('click', () => {
  highlightAnswer('answer4');
  selectAnswer('answer4');
});
function selectAnswer(elementId) {
  const selectedElement = document.getElementById(elementId);
  const selectedAnswer = selectedElement.innerText;
  const correctAnswer = questions[count].answer;

  if (selectedAnswer === correctAnswer) {
      selectedElement.style.backgroundColor = "green"; 
  } else {
      selectedElement.style.backgroundColor = "red"; 
      const correctElement = ['answer1', 'answer2', 'answer3', 'answer4'].find(id => {
        const element = document.getElementById(id);
        return element.innerText === correctAnswer;
    });
    if (correctElementId) {
        const correctElement = document.getElementById(correctElementId);
        correctElement.style.backgroundColor = "green";
    } 
  }
count++;
}