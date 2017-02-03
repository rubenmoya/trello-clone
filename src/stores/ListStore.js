import { action, observable } from 'mobx';
import ListModel from '../models/ListModel';

const lists = [
  { name: 'Test', cards: [{ name: 'Card one' }, { name: 'Card two' }] },
  { name: 'MobX', cards: [{ name: 'Card three' }, { name: 'Card four' }] },
];

class ListStore {
  @observable lists = [];

  @action load() {
    this.lists = lists.map(list => ListModel.deserialize(list));
  }
}

const store = new ListStore();
window.listStore = store;
export default store;
