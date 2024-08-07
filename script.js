'use strict';

let score = 0;

const player1 = '#current--0';
const player2 = '#current--1';
let player = player1;

let scorer;

const rollno = Math.trunc(Math.random() * 7);

//dice change
function dicechange(rollno) {
  document.querySelector('.dice').style.display = 'block';
  if (rollno === 1) {
    document.querySelector('.dice').src = 'dice-1.png';
  } else if (rollno == 2) {
    document.querySelector('.dice').src = 'dice-2.png';
  } else if (rollno == 3) {
    document.querySelector('.dice').src = 'dice-3.png';
  } else if (rollno == 4) {
    document.querySelector('.dice').src = 'dice-4.png';
  } else if (rollno == 5) {
    document.querySelector('.dice').src = 'dice-5.png';
  } else if (rollno == 6) {
    document.querySelector('.dice').src = 'dice-6.png';
  }
  console.log('ddh');
}

//playerchange
function playerchange() {
  if (player === player1) {
    document.querySelector(player).textContent = 0;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    player = player2;
  } else {
    document.querySelector(player).textContent = 0;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    player = player1;
  }
}

//roll Dice configuration
document.querySelector('.btn--roll').addEventListener('click', function () {
  const rollno = Math.trunc(Math.random() * 6) + 1;

  if (rollno == 1) {
    score = 0;
    //player change
    playerchange();
  } else {
    score += rollno;
  }
  dicechange(rollno);
  document.querySelector(player).textContent = score;
});

//Hold button configuration
document.querySelector('.btn--hold').addEventListener('click', function () {
  let playerscore = Number(document.querySelector(player).textContent);
  document.querySelector(player).textContent = 0;
  score = 0;
  if (player === player1) {
    scorer = '#score--0';
  } else {
    scorer = '#score--1';
  }
  playerchange();
  document.querySelector(scorer).textContent =
    Number(document.querySelector(scorer).textContent) + playerscore;
});

//new button configuration
document.querySelector('.btn--new').addEventListener('click', function () {
  score = 0;
  document.querySelector('#score--0').textContent = '0';
  document.querySelector('#score--1').textContent = '0';
  document.querySelector('#current--0').textContent = '0';
  document.querySelector('#current--1').textContent = '0';

  if (player === player2) {
    playerchange();
  }

  document.querySelector('.dice').style.display = 'none';
});
