
var readlineSync = require('readline-sync');
var user=readlineSync.question('what is  your name ? ');

console.log("hey!"+user+" how well do you know jatin")

var score=0;
function quiz(question,answer)
{
  var ans=readlineSync.question(question);

  if(ans==answer)
  {
    console.log('correct!');
    score++;
  }
  else
  {
    console.log('icorrect!');
    score--;
  }
      console.log('your score is '+score);

}
var question_set=[
  {
    question:'Where do jatin live? ',
    answer:'panvel'
  },
  {
    question:'What is his favourite Tv show? ',
    answer:'friends'
  },
    {
    question:'What is his fav food? ',
    answer:'shawrma'
  }
];

for(let i=0;i<question_set.length;i++)
{
 let  s=question_set[i]
  quiz(s.question,s.answer)
}