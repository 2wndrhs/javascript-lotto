const {
  LOTTO_BASE,
  LOTTO_RANKING,
  LOTTO_PRIZES,
  LOTTO_RESULT_MESSAGES,
} = require('../utils/constants');

const WinningStatistics = {
  generate(ticket, winningNumbers, bonusNumber) {
    const winningMap = this.generateWinningMap(ticket, winningNumbers, bonusNumber);

    return [
      ...this.createWinningHistoryText(winningMap),
      this.createReturnRateText(ticket, winningMap),
    ];
  },

  generateWinningMap(ticket, winningNumbers, bonusNumber) {
    return ticket.reduce((acc, lotto) => {
      const rank = lotto.computeWinningRank(winningNumbers, bonusNumber);

      if (rank) {
        acc[rank] = (acc[rank] || 0) + 1;
      }
      return acc;
    }, {});
  },

  createWinningHistoryText(winningMap) {
    return Object.values(LOTTO_RANKING).map((rank) => {
      const count = winningMap[rank] ?? 0;
      const prize = Number(LOTTO_PRIZES[rank]).toLocaleString();

      return `${LOTTO_RESULT_MESSAGES[rank]} (${prize}원) - ${count}개`;
    });
  },

  createReturnRateText(ticket, winningMap) {
    const purchaseAmount = ticket.length * LOTTO_BASE.PRICE;

    const totalPrize = this.computeTotalPrize(winningMap);
    const returnRate = this.computeReturnRate(totalPrize, purchaseAmount);

    return `총 수익률은 ${returnRate}%입니다.`;
  },

  computeTotalPrize(winningMap) {
    return Object.entries(winningMap).reduce((acc, [rank, count]) => {
      acc += LOTTO_PRIZES[rank] * count;
      return acc;
    }, 0);
  },

  computeReturnRate(totalPrize, purchaseAmount) {
    const returnRate = Number((totalPrize / purchaseAmount) * 100).toFixed(1);
    const RETURN_RATE_FORMAT = /\B(?=(\d{3})+(?!\d))/g;

    return returnRate.replace(RETURN_RATE_FORMAT, ',');
  },
};

module.exports = WinningStatistics;
