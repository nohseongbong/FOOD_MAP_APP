import Realm from 'realm';

export interface StoreType {
  id: string;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  // TODO:: 즐겨찾기 상태 추가
}

class Store {
  public static schema: Realm.ObjectSchema;
}

Store.schema = {
  name: 'Store',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    category: 'string',
    latitude: 'int',
    longitude: 'int',
  },
};

const realm = new Realm({ schema: [Store.schema] });

export default realm;
