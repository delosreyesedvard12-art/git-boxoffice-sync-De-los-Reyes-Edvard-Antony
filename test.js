const price = tickets.calculateTicketPrice(3, 15.5);
assertEqual(price, 47, 'price for 3 tickets at $15.50 each');
assertEqual(tickets.calculateTicketPrice(1, 20.6), 21, 'price is rounded, not truncated');

process.exitCode = failures > 0 ? 1 : 0;