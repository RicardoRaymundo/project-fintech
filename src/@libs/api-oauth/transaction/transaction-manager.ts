import {TransactionsInterface} from './transactions.interface';
import {ClientStorage} from '../storage/client-storage';
import {TransactionInterface} from './transaction.interface';

const COOKIE_KEY = 'a0.spajs.txs.';
const getTransactionKey = (state: string) => `${COOKIE_KEY}${state}`;


export class TransactionManager {
  private _transactions: TransactionsInterface;

  constructor() {
    this._transactions = {};

    ClientStorage.getAllKeys()
      .filter(k => k.startsWith(COOKIE_KEY))
      .forEach(k => {
        const state = k.replace(COOKIE_KEY, '');
        this._transactions[state] = ClientStorage.get<TransactionInterface>(k);
      });
  }

  /**
   *
   * @param state
   * @param transaction
   */
  public create(state: string, transaction: TransactionInterface) {
    this._transactions[state] = transaction;
    ClientStorage.save(getTransactionKey(state), transaction, {
      daysUntilExpire: 1
    });
  }

  /**
   *
   * @param state
   */
  public get(state: string): TransactionInterface {
    return this._transactions[state];
  }

  /**
   *
   * @param state
   */
  public remove(state: string) {
    delete this._transactions[state];
    ClientStorage.remove(getTransactionKey(state));
  }

}
