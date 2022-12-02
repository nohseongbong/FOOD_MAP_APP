import Realm from 'realm';

export interface StoreType {
  id: number;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  // TODO:: 즐겨찾기 상태 추가
}

class Store {
  public static schema: Realm.ObjectSchema;
}

Store.schema = {
  name: 'Store',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    category: 'string',
    latitude: 'double',
    longitude: 'double',
  },
};

const realm = new Realm({ schema: [Store.schema] });

export default realm;
