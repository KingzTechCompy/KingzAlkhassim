// creating an array and passing the number, questions, options, and answers
let questions = [
  // 1–5 General Knowledge
  {
    numb: 1,
    question: "Which planet is closest to the Sun?",
    answer: "Mercury",
    options: ["Venus", "Mercury", "Mars", "Earth"]
  },
  {
    numb: 2,
    question: "What is the largest desert in the world?",
    answer: "Sahara",
    options: ["Gobi", "Sahara", "Kalahari", "Arabian"]
  },
  {
    numb: 3,
    question: "Who was the first man to step on the Moon?",
    answer: "Neil Armstrong",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"]
  },
  {
    numb: 4,
    question: "Which country invented paper?",
    answer: "China",
    options: ["India", "China", "Egypt", "Greece"]
  },
  {
    numb: 5,
    question: "Which ocean surrounds the Maldives?",
    answer: "Indian Ocean",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"]
  },

  // 6–10 Personal Life Style
  {
    numb: 6,
    question: "Which meal is considered the most important of the day?",
    answer: "Breakfast",
    options: ["Lunch", "Dinner", "Breakfast", "Snacks"]
  },
  {
    numb: 7,
    question: "How many hours of sleep do adults usually need?",
    answer: "7-8 hours",
    options: ["4 hours", "5-6 hours", "7-8 hours", "9-10 hours"]
  },
  {
    numb: 8,
    question: "Which activity helps reduce stress the most?",
    answer: "Exercise",
    options: ["Watching TV", "Exercise", "Eating junk food", "Sleeping all day"]
  },
  {
    numb: 9,
    question: "Which drink is best for staying hydrated?",
    answer: "Water",
    options: ["Juice", "Soda", "Coffee", "Water"]
  },
  {
    numb: 10,
    question: "What is the recommended number of meals per day?",
    answer: "3",
    options: ["2", "3", "4", "5"]
  },

  // 11–15 Programming / Tech
  {
    numb: 11,
    question: "Which language is used for styling web pages?",
    answer: "CSS",
    options: ["HTML", "CSS", "JavaScript", "Python"]
  },
  {
    numb: 12,
    question: "Which company created the programming language 'Python'?",
    answer: "Guido van Rossum",
    options: ["Bill Gates", "Guido van Rossum", "James Gosling", "Dennis Ritchie"]
  },
  {
    numb: 13,
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
    options: [
      "HighText Machine Language",
      "HyperText Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ]
  },
  {
    numb: 14,
    question: "Which symbol is used for comments in JavaScript?",
    answer: "//",
    options: ["#", "//", "<!-- -->", "/* */"]
  },
  {
    numb: 15,
    question: "Which database is commonly used with web apps?",
    answer: "MySQL",
    options: ["Oracle", "MySQL", "Photoshop", "Excel"]
  },

  // 16–20 School Knowledge
  {
    numb: 16,
    question: "What is the boiling point of water in Celsius?",
    answer: "100°C",
    options: ["0°C", "50°C", "100°C", "212°C"]
  },
  {
    numb: 17,
    question: "Who is known as the father of modern physics?",
    answer: "Albert Einstein",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Stephen Hawking"]
  },
  {
    numb: 18,
    question: "Which organ in the human body pumps blood?",
    answer: "Heart",
    options: ["Lungs", "Brain", "Heart", "Liver"]
  },
  {
    numb: 19,
    question: "What is the chemical formula for table salt?",
    answer: "NaCl",
    options: ["NaCl", "H2O", "CO2", "KCl"]
  },
  {
    numb: 20,
    question: "Which gas do humans exhale when breathing?",
    answer: "Carbon dioxide",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"]
  }
];