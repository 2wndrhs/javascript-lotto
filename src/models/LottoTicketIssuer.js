const Lotto = require('../Lotto');

const LottoNumberGenerator = require('../utils/LottoNumberGenerator');
const { LOTTO_BASE } = require('../utils/constants');

class LottoTicketIssuer {
  #tickets;

  issue(amount) {
    const count = Number(amount) / LOTTO_BASE.PRICE;
    const toLotto = (numbers) => new Lotto(numbers);

    this.#tickets = Array.from(
      { length: count },
      LottoNumberGenerator.generate,
    ).map(toLotto);
  }
}

module.exports = LottoTicketIssuer;
