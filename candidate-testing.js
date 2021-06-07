const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer =  "Sally Ride";
let candidateAnswer;
let questions =["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5+3)/2*10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];
let grade = 0;
const numQuestions = 5;
let testStatus;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 //question = input.question("Who was the first American woman in space? ");

for (let i = 0; i < questions.length; i ++){
 candidateAnswers[i] = input.question(console.log(questions[i]));

console.log(`Your Answer:  ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}`)
}

}

 /*
for (let i = 0; i < questions.length; i++){
   // console.log("\n");
  let answer = input.question(questions[i]);
 
  candidateAnswers.push(answer);
}
//return candidateAnswers;
//}
*/
function gradeQuiz(candidateAnswers) {
 
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0; 
for (let i=0; i < 5; i++){
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      // console.log(grade);
      grade++
    }
  }


// grade / questions.length * 100
console.log(`>>> Overall Grade: ${grade / questions.length * 100} (${grade} of 5 responses correct) <<<`);
  if (grade/questions.length * 100 >= 80){
    console.log(">>> Status: PASSED <<<")
  } else {
    console.log(">>> Status: FAILED <<<")
  }
  
     
  return grade;
}
/*
let numCorrect = 0;

for(i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i] === correctAnswers[i] ){
  numCorrect++
  }
  console.log(`${i+1}) ${questions[i]}`);
  console.log(`Your Answer: ${candidateAnswers[i]}`);
  console.log(`Correct Answer: ${correctAnswers[i]}`);
  console.log("\n");

 // let grade;
 grade = (numCorrect / numQuestions) *  100
//return grade;
}
 */

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
   //candidateName;
  // candidateName = input.question("Enter your name: ");
  console.log("Candidate Name:  " + candidateName);
  askQuestion();
  
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}