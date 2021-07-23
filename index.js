var readlineSync = require('readline-sync');
var score = 0;
console.log("Hello, This is The RETRO BOLLYWOOD QUIZ.\n")
var userName = readlineSync.question("What is Your Name?\n");
console.log("\nWelcome ",userName,", There will be 10 Multiple Choice Questions. Each Question will carry 1 Point. You will get your Score at the End if the Quiz. Enjoy!!! ")
function play(question, answer){
  
  var userAnswer = readlineSync.question(question);
  // console.log(options);

  if(userAnswer === answer){
    console.log("\nYou are Right.\n\n ");
    score= score + 1;
  }
  else{
    console.log("\nYou are Wrong. \n\n");
    
    
  }
  
}

var quiz = [
  {
     question:"\nQ1. Which Ambris Puri movie features the iconic dialogue ‘Mogambo Khush Hua’ ? \nA. Mr. India\nB. Damini\nC. Diljale\nD. Badshah\nYour Answer: ",
    answer:"A"
  },
 
  {
    question:"Q2. Which country, outside of India, has a huge fan base for late actor Raj Kapoor? \nA. Turkey\nB. Russia\nC. Indonesia\nD. Peru\nYour Answer: ",
    answer:"B"
  },
  {
     question:"Q3. Which singer was a huge boxing fan and met up with ultimate boxing champ Mohammed Ali while on a tour to Chicago in the late ’70s? (Hint: In an iconic picture, this singer is seen “punching” Ali!) \nA. Mukesh\nB. Kishor Kumar\nC. Manna Dey\nD. Mohammed Rafi\nYour Answer: ",
     answer:"D"
  },
  {
    question:"Q4. Which Bollywood film was a remake of Seven Brides For Seven Brothers? \nA.  Saat Khoon Maaf\nB. Saat Saal Baad\nC. Satte Pe Satta\nD. Saat Hindustani\nYour Answer: ",
    answer:"C"
  },
  {
     question:"Q5. True or false: Mohammed Rafi has actually been a playback singer for Kishore Kumar. \nA. True\nB. False\nYour Answer: ",
    answer:"A"
  },
  {
     question:"Q6. Who played the role of Chandni in movie 'Chandni'? \nA. Helen\nB. Hema Malini\nC. Farha Naaz\nD. Sridevi\nYour Answer: ",
     answer:"D"
  },
  {
     question:"Q7. Which movie is India's First Full Length Feature Film? \nA. Sholey\nB. Raja Harischandra\nC. Ardha Satya\nD. Aparachit\nYour Answer: ",
    answer:"B"
  },
   {
     question:"Q8. Bhanu Athiya won First Oscar for India for which Movie? \nA. Slumdog Millionaire\nB. Lagaan\nC. Gandhi\nD. Mother India\nYour Answer: ",
    answer:"C"
  },
  {
    question:"Q9. How many times does “Yahoo” appear in actor Shammi Kapoor’s evergreen track “Yahoo, Chahe Koi Mujhe Junglee Kahe?” \nA. 18\nB. 4\nC. 25\nD. 8\nYour Answer: ",
    answer:"D"
  },
  {
    question:"Q10. Which actor played the character'Babu Moshai' in Anand? \nA. Rajesh Khanna\nB. Dilip Kumar\nC. Amitabh Bachchan\nD. Vinod Khanna\nYour Answer: ",
    answer:"C"
  },
];

for(var i=0;i<quiz.length;i++){
  var currentQuestion = quiz[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Thanks for Playing the Quiz.\nYour Score is: ",score);
