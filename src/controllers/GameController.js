const InputView = require('../views/InputView');

class GameController {
  start() {
    InputView.readPurchaseAmount(this.#onInputPurchaseAmount.bind(this));
  }

  #onInputPurchaseAmount(amount) {}
}

module.exports = GameController;
