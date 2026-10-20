function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, seatType) {
  let total = quantity * basePrice;

  if (quantity >= 5) {
    total = total * 0.9;
  }

  if (seatType === 'premium') {
    total = total * 1.5;
  }

  total = total - 10;

  return Math.max(0, Math.round(total));
}

module.exports = { isValidQuantity, calculateTicketPrice };