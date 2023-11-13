import { FC } from 'react';
import './canceled.css';

const Canceled: FC = () => {
  return (
    <section className="canceled-section">
      <p>Transaction canceled.</p>
      <a href="/">Go back to Home</a>
    </section>
  );
}

export default Canceled;
