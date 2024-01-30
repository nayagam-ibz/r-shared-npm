import React from 'react';
import styles from './styles/Button.scss';
import Button from 'react-bootstrap/Button';

export const ExampleComponent = ({ text }) => {
  return (
    <div>
      <Button className={`${styles['my-button']} ${styles['disabled']}`}>
        <div className="testing">This is a child divdddddddddddddd</div>
      </Button>
      <Button variant="primary">Primary</Button>

    </div>
  );
};