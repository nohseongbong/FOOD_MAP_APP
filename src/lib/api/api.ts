import { StoreType } from '../db/schema';
import realm from '../db/schema';
import { Results } from 'realm';

export class Api {
  getStore = (): Results<StoreType> => {
    return realm.objects('Store');
  };
}

export const api = new Api();
