
const withdraw = (clients, balances, names, amount) => {
  let result = 0;
  clients.forEach(function (client, index) {
    if (client.includes(names) && balances[index] >= amount) {
      result = balances[index] - amount;
    } else if (client.includes(names) && balances[index] < amount) {
      result = -1;
    }
  });
  return result;
};