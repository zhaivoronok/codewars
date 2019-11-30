// https://www.codewars.com/kata/blackjack-scorer/javascript

function scoreHand(cards) {
  let values = 0;

  for (let key in cards) {
    switch (cards[key]) {
      case 'J':
      case 'Q':
      case 'K':
        values += 10;
        break;
      case 'A':
        values += 11;
        break;
      default:
        values += +cards[key];
        break;
    }
  }

  for (let key in cards) {
    if (cards[key] === 'A' && values > 21) values -= 10;
  }

  return values;
}