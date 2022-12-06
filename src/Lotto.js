const { LOTTO_RANKING } = require('./utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  computeWinningRank(winningNumbers, bonusNumber) {
    const matchingCount = this.computeMatchingCount(winningNumbers);
    const hasBonus = this.#numbers.includes(bonusNumber);

    return Lotto.toRank(hasBonus)[matchingCount];
  }

  computeMatchingCount(winningNumbers) {
    const matchingNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number),
    );

    return matchingNumbers.length;
  }

  static toRank(hasBonus) {
    return {
      6: LOTTO_RANKING.FIRST,
      5: hasBonus ? LOTTO_RANKING.SECOND : LOTTO_RANKING.THIRD,
      4: LOTTO_RANKING.FOURTH,
      3: LOTTO_RANKING.FIFTH,
    };
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
