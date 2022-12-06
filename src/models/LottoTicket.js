const Lotto = require('../Lotto');
const WinningStatistics = require('./WinningStatistics');

const LottoNumberGenerator = require('../utils/LottoNumberGenerator');
const { LOTTO_BASE } = require('../utils/constants');

class LottoTicket {
  #ticket;

  #winningNumbers;

  #bonusNumber;

  constructor(amount) {
    this.#ticket = LottoTicket.issue(amount);
  }

  static issue(amount) {
    const count = Number(amount) / LOTTO_BASE.PRICE;
    const toLotto = (numbers) => new Lotto(numbers);

    return Array.from({ length: count }, LottoNumberGenerator.generate).map(toLotto);
  }

  setWinningNumbers(numbers) {
    this.#winningNumbers = numbers.split(',').map(Number);
  }

  setBonusNumber(number) {
    this.#bonusNumber = Number(number);
  }

  getWinningStatistics() {
    return WinningStatistics.generate(this.#ticket, this.#winningNumbers, this.#bonusNumber);
  }

  toString() {
    return this.#ticket.map((lotto) => lotto.toString());
  }
}

module.exports = LottoTicket;
