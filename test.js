const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 37, 'price for 3 tickets at $15.50 each');
assertEqual(tickets.calculateTicketPrice(1, 20.6), 11, 'price is rounded, not truncated');
assertEqual(tickets.calculateTicketPrice(5, 10), 35, 'group of 5 gets 10% discount');
assertEqual(tickets.calculateTicketPrice(2, 20, 'premium'), 50, 'premium seating has 50% surcharge');
assertEqual(tickets.calculateTicketPrice(2, 20), 30, 'flat $10 off any order');

process.exitCode = failures > 0 ? 1 : 0;