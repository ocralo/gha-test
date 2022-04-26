import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Button({ children }) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Button;
