
var readlineSync = require('readline-sync');
var user=readlineSync.question('what is  your name ? ');

console.log("Hey! "+user+" welcome to the friends trivia quiz!!")
console.log('*------Rule------*')
console.log('first letter of each answer must be capitalized')
console.log('Have Fun :)')


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

  if(score==5)
  {
    console.log('Yay you nailed it!!')
  }
  else if(score<-4)
  {
    console.log('Want to try it again?')
  }
      console.log('your score is '+score);

}
var question_set=[
  {
    question:'How many seasons of Friends are there? ',
    answer:'Ten'
  },
  {
    question:'How many times has Ross been married? ',
    answer:'3'
  },
    {
    question:'What is the name of Phoebe’s twin sister? ',
    answer:'Ursula'
  },
  {
    question:'Joey doesn’t share what? ',
    answer:'Food'
  },
  {
    question:'Which character famously said, “PIVOT?” ',
    answer:'Ross'
  }
];

for(let i=0;i<question_set.length;i++)
{
 let  s=question_set[i]
  quiz(s.question,s.answer)
}
