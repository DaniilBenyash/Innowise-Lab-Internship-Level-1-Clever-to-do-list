import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export const Button = React.forwardRef(function Button(
  { onClick, text, className, children },
  ref
) {
  const buttonStyle = classNames(className, { [styles.button]: !className });
  return (
    <button type="button" onClick={onClick} className={buttonStyle} ref={ref}>
      <>
        {text}
        {children}
      </>
    </button>
  );
});
