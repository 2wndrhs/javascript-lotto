const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  PURCHASE: (count) => `${count}개를 구매했습니다.`,
  STATISTICS: '당첨 통계',
  DIVIDER: '---',
});

const OutputView = {
  printTicket(ticket) {
    Console.print(`\n${MESSAGE.PURCHASE(ticket.length)}`);
    ticket.forEach((lotto) => Console.print(lotto));
  },

  printStatistics(statistics) {
    Console.print(`\n${MESSAGE.STATISTICS}`);
    Console.print(MESSAGE.DIVIDER);
    statistics.forEach((text) => Console.print(text));
  },
};

module.exports = OutputView;
