const { Console } = require('@woowacourse/mission-utils');

const QUERY = Object.freeze({
  AMOUNT: '구입금액을 입력해주세요.',
  WINNING: '당첨 번호를 입력해 주세요.',
});

const InputView = {
  readPurchaseAmount(callback) {
    Console.readLine(`${QUERY.AMOUNT}\n`, callback);
  },

  readWinningNumbers(callback) {
    Console.readLine(`\n${QUERY.WINNING}\n`, callback);
  },
};

module.exports = InputView;
