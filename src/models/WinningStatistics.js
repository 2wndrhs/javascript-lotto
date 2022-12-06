const { LOTTO_RANKING, LOTTO_PRIZES, LOTTO_RESULT_MESSAGES } = require('../utils/constants');

const WinningStatistics = {
  generate(ticket, winningNumbers, bonusNumber) {
    const winningMap = this.generateWinningMap(ticket, winningNumbers, bonusNumber);

    return [...this.createWinningHistoryText(winningMap)];
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
};

module.exports = WinningStatistics;
