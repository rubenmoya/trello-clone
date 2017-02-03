import { observable, action } from 'mobx';
import uuid from '../utils/uuid';
import CardModel from './CardModel';

export default class ListModel {
  id = uuid();
  @observable name;
  @observable cards = [];

  @action addCard(name) {
    this.cards.push(new CardModel(name));
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      cards: this.cards,
    };
  }

  static deserialize(json) {
    const list = new ListModel();
    list.id = json.id || uuid();
    list.name = json.name || '';
    list.cards = json.cards.map(card => CardModel.deserialize(card));
    return list;
  }
}
