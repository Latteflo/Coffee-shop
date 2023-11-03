import { FC } from 'react';

import './notFound.css';

const NotFound: FC = () => {
  return (
    <section className="not-found-section">
      <h1>404</h1>
      <p>Oops! The page you're looking for does not exist.</p>
      <a href="/">Go back to Home</a>
    </section>
  );
}

export default NotFound;
