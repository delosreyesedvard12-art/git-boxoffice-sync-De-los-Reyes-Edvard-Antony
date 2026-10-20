function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seatType) {
  let total = quantity * basePrice;

  if (seatType === 'premium') {
    total = total * 1.5;
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };