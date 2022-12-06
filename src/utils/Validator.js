const { LOTTO_BASE } = require('./constants');

class Validator {
  static #ERROR_MESSAGE = Object.freeze({
    isPurchaseAmount: `로또 구입 금액은 ${LOTTO_BASE.PRICE}원 단위의 숫자입니다.`,
  });

  static validate(input, validator) {
    if (!validator(input)) {
      throw new Error(`[ERROR] ${Validator.#ERROR_MESSAGE[validator.name]}`);
    }
  }

  static isPurchaseAmount(input) {
    const PURCHASE_AMOUNT_PATTERN = /^[^0]\d+$/;

    return PURCHASE_AMOUNT_PATTERN.test(input) && !(Number(input) % LOTTO_BASE.PRICE);
  }
}

module.exports = Validator;
