import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div className={css.section}>
      <p className={css.title}>{title}</p>
      <hr className={css.hr}></hr>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
