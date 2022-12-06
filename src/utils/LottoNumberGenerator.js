const { Random } = require('@woowacourse/mission-utils');

const { LOTTO_BASE } = require('./constants');

const LottoNumberGenerator = {
  generate() {
    const { MIN_NUMBER, MAX_NUMBER, SIZE } = LOTTO_BASE;

    return Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, SIZE);
  },
};

module.exports = LottoNumberGenerator;
