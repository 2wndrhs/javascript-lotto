const LottoTicketIssuer = require('../models/LottoTicketIssuer');

const InputView = require('../views/InputView');

class GameController {
  #lottoTicketIssuer;

  constructor() {
    this.#lottoTicketIssuer = new LottoTicketIssuer();
  }

  start() {
    InputView.readPurchaseAmount(this.#onInputPurchaseAmount.bind(this));
  }

  #onInputPurchaseAmount(amount) {
    this.#lottoTicketIssuer.issue(amount);
  }
}

module.exports = GameController;
