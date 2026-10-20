const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 47, 'price for 3 tickets at $15.50 each');
assertEqual(tickets.calculateTicketPrice(1, 20.6), 21, 'price is rounded, not truncated');
assertEqual(tickets.calculateTicketPrice(5, 10), 45, 'group of 5 gets 10% discount');
assertEqual(tickets.calculateTicketPrice(2, 20, 'premium'), 60, 'premium seating has 50% surcharge');

process.exitCode = failures > 0 ? 1 : 0;