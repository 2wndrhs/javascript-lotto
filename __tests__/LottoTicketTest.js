/* eslint-disable max-lines-per-function */
const LottoTicket = require('../src/models/LottoTicket');
const Lotto = require('../src/Lotto');

const { LOTTO_BASE } = require('../src/utils/constants');

describe('LottoTicket 테스트', () => {
  test.each(['1000', '4000', '8000'])(
    'issue 메서드는 구입 금액 만큼의 로또를 발행하여 반환',
    (amount) => {
      const count = Number(amount) / LOTTO_BASE.PRICE;
      const ticket = LottoTicket.issue(amount);

      expect(ticket.length).toBe(count);

      ticket.forEach((lotto) => expect(lotto).toBeInstanceOf(Lotto));
    },
  );
});
