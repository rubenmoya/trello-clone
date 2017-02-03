import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import styles from './Card.css';

@observer
export default class Card extends Component { // eslint-disable-line
  static propTypes = {
    card: PropTypes.shape({
      description: PropTypes.string,
      name: PropTypes.string,
    }),
  };

  render() {
    const { name, description } = this.props.card;
    return (
      <article>
        <div className={styles.card}>
          {name}
          {description}
        </div>
      </article>
    );
  }
}
