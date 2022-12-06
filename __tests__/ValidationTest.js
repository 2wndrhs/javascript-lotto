/* eslint-disable max-lines-per-function */
const { validate, isPurchaseAmount } = require('../src/utils/Validator');

describe('Validator 클래스 테스트', () => {
  test.each(['400', '1001', 'abcd', '01000'])(
    '로또 구입 금액이 1000원 단위의 숫자가 아니면 예외 발생',
    (amount) => {
      expect(() => {
        validate(amount, isPurchaseAmount);
      }).toThrow('[ERROR]');
    },
  );
});
