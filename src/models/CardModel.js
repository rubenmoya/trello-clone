import { observable } from 'mobx';
import uuid from '../utils/uuid';

export default class CardModel {
  id = uuid();
  @observable name;
  @observable description;

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  serialize() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }

  static deserialize(json) {
    const card = new CardModel(json.name, json.description);
    card.id = json.id || uuid();
    return card;
  }
}
