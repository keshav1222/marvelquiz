var readlineSync = require('readline-sync');
var chalk = require('chalk');
score = 0;
var userName = readlineSync.question(chalk.bgYellow.bold("Please! Enter the Name of Participant:"));
console.log(chalk.green.bold.dim("Welcome "+userName + " All the Best!!!"));
console.log("Let's Check your Knowledge!!!!!");
var highScores = [
  {
    name : "keshav Agrawal",
    score: 10
  }

]
for(var j=0; j<highScores.length; j++){
  var high = highScores[j]
}
function play(qus,ans){
  var answer = readlineSync.question(qus);
  if(answer === ans){
    console.log("Right!!!");
    score = score+1;
  }
  else{
    console.log("Wrong!!!");
    score = score-1;
  }
  console.log("score: "+score);
  console.log("---------------------------------------------------------------")

}

var arr = [{
  qus:"1.What song plays at the beginning of the movie?\n a.Iron Man by Black Sabbath\n b.Back In Black by AC/DC \n c.Ordinary World by Duran Duran \n d.Stairway to Heaven by Led Zeppelin\nAnswer ", ans: "b"
}, {
  qus:"2.What does Tony tell Thaddeus Ross at the end of the film?\n a.That he wants to study The Hulk\n b.That he knows about S.H.I.E.L.D.\n c.That they are putting a team together\n d.That Thaddeus owes him money\nAnswer ", ans: "c"
}, {
    qus: "3.What fake name does Natasha use when she first meets Tony?\n a.Natalie Rushman\n b.Natalia Romanoff\n c.Nicole Rohan\n d.Naya Rabe\nAnswer ", ans: "a"
}, {
  qus: "4.What does Thor want another of when he's in the diner?\n a.A slice of pie\n b.A piece of toast\n c.A stack of pancakes\n d.A cup of coffee\nAnswer ", ans: "d"

}, {
  qus: "5.THE FIRST AVENGER: Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?\n a.The Cotton Club\n b.The Stork Club\n c.El Morocco\n d.The Copacabana\nAnswer ", ans: "b"

}, {
  qus: "6.Natasha remarks to Clint that the Battle of New York is a lot like what?\n a.Their time in Budapest\n b.Their time in Prague \n c.Their time in Istanbul \n d.Their time in Sokovia\nAnswer ", ans: "a"
}, {
  qus: "7.What is the name of the little boy Tony befriends while stranded?\n a.Harry\n b.Henry\n c.Harley \n d.Holden \nAnswer ", ans: "c"
}, {
  qus: "8.THE DARK WORLD: Where do Sif and Volstagg hide the Reality Stone at the end of the movie?\n a.On Vormir\n b.In a vault on Asgard\n c.Inside Sif's sword \n d.They give it to the Collector \nAnswer ", ans: "d"
}, {
  qus: "9.THE WINTER SOLDIER: What does the Winter Soldier say after Steve recognizes him for the first time?\n a.Who the hell is Bucky?\n b.Do I know you?\n c.He's gone.\n d.What did you say? \nAnswer ", ans: "a"
}, {
  qus: "10.What were the three items Rocket claims he needs in order to escape the prison?\n a.A security card, a fork, and an ankle monitor\n b.A security band, a battery, and a prosthetic leg\n c.A pair of binoculars, a detonator, and a prosthetic leg\n d.A knife, cable wires, and Peter's mixtape \nAnswer ", ans: "b"
}
  
];

for(var i=0; i<arr.length;i++){
  var curQus = arr[i];
  play(chalk.blue.underline.bold(curQus.qus),curQus.ans)
}
console.log(chalk.red.underline.bold.italic.bgWhite("Hurray!!! Your score is: "+score));
console.log(chalk.red.underline.bold.italic.bgWhite("Check the highest score \n" +high.name+ " " +high.score));