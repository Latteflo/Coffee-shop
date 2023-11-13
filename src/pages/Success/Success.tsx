import { FC } from 'react';
import './success.css';

const Success: FC = () => {
  return (
    <section className="success-section">
      <p>Transaction successfully processed!</p>
      <a href="/">Go back to Home</a>
    </section>
  );
}

export default Success;
