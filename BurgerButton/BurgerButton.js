import React from 'react';
import T from 'prop-types';

import s from './BurgerButton.module.css';

const BurgerButton = ({ isClick }) => (
  <div className={s.burgerBtn}>
    <div className={isClick ? s['burgerBtn__top--click'] : s.burgerBtn__top} />
    <div
      className={isClick ? s['burgerBtn__center--click'] : s.burgerBtn__center}
    />
    <div
      className={isClick ? s['burgerBtn__bottom--click'] : s.burgerBtn__bottom}
    />
  </div>
);

BurgerButton.propTypes = {
  isClick: T.bool.isRequired,
};

export default BurgerButton;
