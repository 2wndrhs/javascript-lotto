const { Console } = require('@woowacourse/mission-utils');

const QUERY = Object.freeze({
  AMOUNT: '구입금액을 입력해주세요.',
});

const InputView = {
  readPurchaseAmount(callback) {
    Console.readLine(`${QUERY.AMOUNT}\n`, callback);
  },
};

module.exports = InputView;
