import { makeAutoObservable } from 'mobx';

class MapModel {
  isFocusMap = true;

  constructor() {
    makeAutoObservable(this);
  }

  handleIsFocus = () => {
    this.isFocusMap = !this.isFocusMap;
  };

  get getIsFocusMap() {
    return this.isFocusMap;
  }
}

export const mapModel = new MapModel();
