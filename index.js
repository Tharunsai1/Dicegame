var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImgSrc = "images/" + randomDiceImage;

var lol1 = document.querySelectorAll("img")[0];

lol1.setAttribute('src', randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var ranDiceImage = 'dice' + randomNumber2 + '.png';

var randomImgSrc2 = 'images/' + ranDiceImage;

var lol2 = document.querySelectorAll('img')[1];

lol2.setAttribute('src', randomImgSrc2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '❤️ Player one win';
} else if (randomNumber1 == randomNumber2) {
  document.querySelector('h1').innerHTML = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = '❤️ Player two win';
}
