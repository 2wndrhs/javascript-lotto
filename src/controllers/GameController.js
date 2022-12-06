const { Console } = require('@woowacourse/mission-utils');

const LottoTicket = require('../models/LottoTicket');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class GameController {
  #lottoTicket;

  start() {
    this.#inputPurchaseAmount();
  }

  #inputPurchaseAmount() {
    InputView.readPurchaseAmount(this.#onInputPurchaseAmount.bind(this));
  }

  #onInputPurchaseAmount(amount) {
    this.#lottoTicket = new LottoTicket(amount);

    const ticket = this.#lottoTicket.toString();
    OutputView.printTicket(ticket);

    this.#inputWinningNumbers();
  }

  #inputWinningNumbers() {
    InputView.readWinningNumbers(this.#onInputWinningNumbers.bind(this));
  }

  #onInputWinningNumbers(numbers) {
    this.#lottoTicket.setWinningNumbers(numbers);

    this.#inputBonusNumber();
  }

  #inputBonusNumber() {
    InputView.readBonusNumber(this.#onInputBonusNumber.bind(this));
  }

  #onInputBonusNumber(number) {
    this.#lottoTicket.setBonusNumber(number);

    this.#printWinningStatistics();
  }

  #printWinningStatistics() {
    const statistics = this.#lottoTicket.getWinningStatistics();

    OutputView.printStatistics(statistics);

    Console.close();
  }
}

module.exports = GameController;
