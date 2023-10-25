function processTransactions(transActions) {
  let txr = [];

  if (!transActions) {
    throw new Error("Undefined collection of transactions");
  }

  let txCount = transActions.reduce((transaction, entry) => {
    return { ...transaction, [entry]: (transaction[entry] || 0) + 1 };
  }, {});

  txCount = sortByAmountThenName(txCount);

  // Place them back in array for returning
  Object.keys(txCount).forEach(function (key, index) {
    txr[index] = `${key} ${txCount[key]}`;
  });

  return txr;
}

function sortByAmountThenName(txCount) {
  let sortedKeys = Object.keys(txCount).sort(function sortingFunction(
    itemOne,
    itemTwo
  ) {
    return (
      txCount[itemTwo] - txCount[itemOne] ||
      itemOne > itemTwo ||
      -(itemOne < itemTwo)
    );
  });

  let sortedResults = {};
  for (let objectKey of sortedKeys) {
    sortedResults[objectKey] = txCount[objectKey];
  }

  return sortedResults;
}

module.exports = processTransactions;
