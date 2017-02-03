import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import styles from './CardForm.css';

class CardForm extends Component {

  handleForm = (event) => {
    if (event.keyCode && event.keyCode !== 13) return;
    event.preventDefault();

    const textarea = ReactDOM.findDOMNode(this.textareaNode);
    const value = textarea.value.trim();
    if (value) {
      this.props.list.addCard(value);
      this.props.onClose();
    } else {
      textarea.focus();
    }
  };

  render() {
    return (
      <article className={styles.cardComposer}>
        <div className={styles.card}>
          <textarea
            onKeyDown={this.handleForm}
            autoFocus
            ref={textareaNode => (this.textareaNode = textareaNode)}
          />
        </div>
        <button className={styles.submit} onClick={this.handleForm}>Add</button>
        <button className={styles.close} onClick={this.props.onClose}>X</button>
      </article>
    );
  }
}

CardForm.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onClose: PropTypes.func,
};

export default CardForm;
