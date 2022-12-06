const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  PURCHASE: (count) => `${count}개를 구매했습니다.`,
});
const OutputView = {
  printTicket(ticket) {
    Console.print(`\n${MESSAGE.PURCHASE(ticket.length)}`);
    ticket.forEach((lotto) => Console.print(lotto));
  },
};

module.exports = OutputView;
