import React, { Component, PropTypes } from 'react';
import { observer, PropTypes as MobxTypes } from 'mobx-react';
import { observable } from 'mobx';
import Card from '../Card';
import CardForm from './CardForm';
import styles from './List.css';

@observer
class List extends Component {
  @observable cardForm = false;
  @observable titleForm = false;

  static propTypes = {
    list: PropTypes.shape({
      addCard: PropTypes.func,
      cards: MobxTypes.observableArray,
      name: PropTypes.string,
    }),
  };

  onChangeTitle = (event) => {
    if (event.keyCode && event.keyCode !== 13) return;
    this.props.list.name = event.target.value;
    this.titleForm = false;
  }

  render() {
    const { cards, name } = this.props.list;
    return (
      <section className={styles.list}>
        <header className={styles.header}>
          { this.titleForm
              ? <input onFocus={e => e.target.select()} onKeyDown={this.onChangeTitle} onBlur={this.onChangeTitle} defaultValue={name} autoFocus />
              : <h2 onClick={() => (this.titleForm = true)}>{name}</h2>
          }
        </header>
        <section className={styles.cards}>
          {cards.map(card => <Card card={card} />)}
          {this.cardForm && <CardForm list={this.props.list} onClose={() => (this.cardForm = false)} />}
        </section>
        { this.cardForm ||
          <button className={styles.newCard} onClick={() => (this.cardForm = true)}>
            Add a new card
          </button>
        }
      </section>
    );
  }
}

export default List;
