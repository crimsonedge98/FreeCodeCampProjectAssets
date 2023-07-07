function checkCashRegister(price, cash, cid) {
  // Calculate the change for the customer
  let change = cash - price;

  // Create object result
  let result = {
    status: null,
    change: []
  }

  // Total cash in register
  let totalRegister = cid.reduce((acc, curr) => {
    return acc += curr[1];
  }, 0);
  totalRegister = totalRegister.toFixed(2); // Placed toFixed method to round the number to the nearest hundredths

  // If change equals totalRegister or if change is greater than totalRegister
  if (totalRegister == change) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  } else if (change > totalRegister) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  // Calculate the change to give with proper bills to customer
  let changeBills = [];
  let temp = [
    ["ONE HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0]
  ];

  let bills = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let registerBills = cid.reverse();

  for (let i = 0; i < registerBills.length; i++) {
    while (change >= bills[i] && registerBills[i][1] > 0) {
      change -= bills[i];
      registerBills[i][1] -= bills[i];
      temp[i][1] += bills[i];
      change = change.toFixed(2); // Placed toFixed method to round the number to the nearest hundredths
    }
    if (temp[i][1] !== 0) {
      changeBills.push(temp[i]);
    }
  }

  if (changeBills.length == 0 || change > 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  result.status = "OPEN";
  result.change = changeBills;
  return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));