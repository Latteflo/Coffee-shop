import { FC } from 'react';
import './blog.css';

const articles = [
  {
    id: 1,
    title: 'The Art of Brewing Coffee',
    description: 'Discover the secrets behind making the perfect cup of coffee.',
    image: 'https://via.placeholder.com/450',
  },
  {
    id: 2,
    title: 'Exploring Coffee Origins',
    description: 'A journey through the coffee-producing regions of the world.',
    image: 'https://via.placeholder.com/450',
  },
  {
    id: 3,
    title: 'Latte Art 101',
    description: 'Learn the basics of creating beautiful latte art.',
    image: 'https://via.placeholder.com/450',
  },
  // ... more articles
];



const Blog: FC = () => {
  return (
    <section className="blog-section">
      <h2>Latest Articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;