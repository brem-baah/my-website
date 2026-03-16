import { blogPosts } from '../data';

export default function Blog() {
  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">Latest Insights</span>
          <h2 className="section-title">Blog &amp; <span>Articles</span></h2>
          <p className="section-desc">
            Thoughts on web development, AI tools, and the digital landscape in Ghana and beyond.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <article key={i} className="blog-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="blog-img">
                <img src={post.img} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-body">
                <span className="blog-date">
                  <i className="fa-regular fa-calendar" style={{ marginRight: 6 }} />
                  {post.date}
                </span>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.link} className="blog-link">
                  Read More <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
