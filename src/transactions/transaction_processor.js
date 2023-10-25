function processTransactions(transactions) {
  if (!transactions) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = transactions.reduce((transaction, entry) => {
    return { ...transaction, [entry]: (transaction[entry] || 0) + 1 };
  }, {});

  return Object.keys(txCount)
    .sort(
      (itemOne, itemTwo) =>
        txCount[itemTwo] - txCount[itemOne] || itemOne.localeCompare(itemTwo)
    )
    .map((key) => `${key} ${txCount[key]}`);
}

module.exports = processTransactions;
