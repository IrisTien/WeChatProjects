// const loan = {
//   base: 1200000
// };
const rate = 0.0027;
// const previousMoneyPerM = 4921;
// const moneyPerM = 5960;
let repaymentDetails = [];
// const maxTimes = 300; //300个月

function rounding(num) {
  return Math.round(num * 100) / 100;
}

function repayment(times = 1, loan, maxTimes, originMoneyPerM, newMoneyPerM, changeTimes) {
  let _money = 0;
  if (!newMoneyPerM || times <= changeTimes) {
    _money = originMoneyPerM;
  } else {
    _money = newMoneyPerM;
  }
  let _profit = 0;
  let _principle = 0;
  if (loan > 0) {
    _profit = rounding(loan * rate, 2);
  }
  if (times < maxTimes) {
    _principle = (_money - _profit) > 0 ? rounding(_money - _profit) : 0;
  } else {
    _principle = loan;
  }
  loan = rounding(loan - _principle);
  repaymentDetails.push({
    time: times,
    profit: _profit,
    principle: _principle
  });
  console.log(`还款第${times}期，还本金${_principle}，还利息${_profit}, 共还款${_principle + _profit}, 剩余本金${loan}`);
  return loan;
}

export function doRepay(loan, maxTimes, originMoneyPerM, newMoneyPerM, changeTimes) {
  let times = 1;
  repaymentDetails = [];
  while (loan > 0 && times <= maxTimes) {
    loan = repayment(times, loan, maxTimes, originMoneyPerM, newMoneyPerM, changeTimes);
    times++;
  }
  console.log('还完了');
  return repaymentDetails;
}

// doRepay();

export function profitSum() {
  const totalProfit = repaymentDetails.reduce((origin, current) => {
    return origin + current.profit
  }, 0);
  console.log(`共还利息${rounding(totalProfit)}元`);
}

// profitSum();