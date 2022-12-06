const Lotto = require('../Lotto');

const LottoNumberGenerator = require('../utils/LottoNumberGenerator');
const { LOTTO_BASE } = require('../utils/constants');

class LottoTicket {
  #ticket;

  constructor(amount) {
    this.#ticket = LottoTicket.issue(amount);
  }

  static issue(amount) {
    const count = Number(amount) / LOTTO_BASE.PRICE;
    const toLotto = (numbers) => new Lotto(numbers);

    return Array.from({ length: count }, LottoNumberGenerator.generate).map(
      toLotto,
    );
  }

  toString() {
    return this.#ticket.map((lotto) => lotto.toString());
  }
}

module.exports = LottoTicket;
