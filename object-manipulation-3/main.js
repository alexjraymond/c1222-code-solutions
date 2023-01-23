console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playersList = [
  {
    name: 'Alex',
    hand: []
  },
  {
    name: 'Nicole',
    hand: []
  },
  {
    name: 'Cody',
    hand: []
  },
  {
    name: 'Jolly Rancher',
    hand: []
  }

];

var deck = [
  { rank: 'Ace', suit: 'clubs' }, { rank: '2', suit: 'clubs' }, { rank: '3', suit: 'clubs' }, { rank: '4', suit: 'clubs' }, { rank: '5', suit: 'clubs' }, { rank: '6', suit: 'clubs' }, { rank: '7', suit: 'clubs' }, { rank: '8', suit: 'clubs' }, { rank: '9', suit: 'clubs' }, { rank: '10', suit: 'clubs' }, { rank: 'Jack', suit: 'clubs' }, { rank: 'Queen', suit: 'clubs' }, { rank: 'King', suit: 'clubs' },
  { rank: 'Ace', suit: 'diamonds' }, { rank: '2', suit: 'diamonds' }, { rank: '3', suit: 'diamonds' }, { rank: '4', suit: 'diamonds' }, { rank: '5', suit: 'diamonds' }, { rank: '6', suit: 'diamonds' }, { rank: '7', suit: 'diamonds' }, { rank: '8', suit: 'diamonds' }, { rank: '9', suit: 'diamonds' }, { rank: '10', suit: 'diamonds' }, { rank: 'Jack', suit: 'diamonds' }, { rank: 'Queen', suit: 'diamonds' }, { rank: 'King', suit: 'diamonds' },
  { rank: 'Ace', suit: 'hearts' }, { rank: '2', suit: 'hearts' }, { rank: '3', suit: 'hearts' }, { rank: '4', suit: 'hearts' }, { rank: '5', suit: 'hearts' }, { rank: '6', suit: 'hearts' }, { rank: '7', suit: 'hearts' }, { rank: '8', suit: 'hearts' }, { rank: '9', suit: 'hearts' }, { rank: '10', suit: 'hearts' }, { rank: 'Jack', suit: 'hearts' }, { rank: 'Queen', suit: 'hearts' }, { rank: 'King', suit: 'hearts' },
  { rank: 'Ace', suit: 'spades' }, { rank: '2', suit: 'spades' }, { rank: '3', suit: 'spades' }, { rank: '4', suit: 'spades' }, { rank: '5', suit: 'spades' }, { rank: '6', suit: 'spades' }, { rank: '7', suit: 'spades' }, { rank: '8', suit: 'spades' }, { rank: '9', suit: 'spades' }, { rank: '10', suit: 'spades' }, { rank: 'Jack', suit: 'spades' }, { rank: 'Queen', suit: 'spades' }, { rank: 'King', suit: 'spades' }
];

var shuffledDeck = _.shuffle(deck);

var topEightCards = [];
for (var i = 0; i < 8; i++) {
  var drawCard = _.pullAt(shuffledDeck, i);
  topEightCards.push(drawCard);

}

for (var k = 0; k < playersList.length; k++) {
  var nextCard = topEightCards.shift();
  playersList[k].hand.push(nextCard);
  nextCard = topEightCards.shift();
  playersList[k].hand.push(nextCard);
}

for (var m = 0; m < playersList.length; m++) {
  playersList[m].score = 0;
  var playerHand = _.flatten(playersList[m].hand);
  for (var o = 0; o < playerHand.length; o++) {
    if (playerHand[o].rank === 'Ace') {
      playersList[m].score += 11;
    } else if (playerHand[o].rank === 'King' || playerHand[o].rank === 'Queen' || playerHand[o].rank === 'Jack') {
      playersList[m].score += 10;
    } else { playersList[m].score += parseInt(playerHand[o].rank); }
  }
}

for (var g = 0; g < playersList.length; g++) { console.log(playersList[g].name, playersList[g].score); }

var winner = 0;
var winnerName = '';
for (var h = 0; h < playersList.length; h++) {

  if (playersList[h].score > winner) {
    winner = playersList[h].score;
    winnerName = playersList[h].name;
  } else { continue; }

}

console.log('the winner is ' + winnerName + ' with a score of ' + winner);
