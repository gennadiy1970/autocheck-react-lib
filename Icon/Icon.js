import React from 'react';
import T from 'prop-types';

const Icon = ({ sprite, id }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`icon icon-${id}`}
    >
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: T.string.isRequired,
};

export default Icon;
