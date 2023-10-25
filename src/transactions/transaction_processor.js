function processTransactions(transActions) {
  let txr = [];

  if (!transActions) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = transActions.reduce((transaction, entry) => {
    return { ...transaction, [entry]: (transaction[entry] || 0) + 1 };
  }, {});

  return Object.keys(txCount)
    .sort(
      (itemOne, itemTwo) =>
        txCount[itemTwo] - txCount[itemOne] ||
        itemOne > itemTwo ||
        -(itemOne < itemTwo)
    )
    .map((key) => `${key} ${txCount[key]}`);
}

module.exports = processTransactions;
