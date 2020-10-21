const questions = [
  {
    question: "Are you visiting Berlin alone or in a group?",
    key: "persons",
    type: "number",
  },
  {
    question: "How long are you planning to stay?",
    key: "days",
    type: "number",
  },
  {
    question: "How many rides are you planning to have in a day?",
    key: "rides",
    type: "number",
  },
  {
    question: "Which zones of Berlin are you going to visit?",
    options: ["AB", "BC", "ABC"],
    key: "zone",
    type: "text",
  },
  {
    question: "Are the rides going to be short?",
    info: 'up to 3 stations on the S-Bahn or U-Bahn or 6 stations on trams and buses',
    key: "short",
    type: "checkbox",
  },
];

export default questions;