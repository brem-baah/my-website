export default function OpenSource() {
  return (
    <section id="code" className="section section-alt">
      <div className="container">
        <div className="section-header center reveal">
          <span className="section-label">Open Source</span>
          <h2 className="section-title">Code &amp; <span>Repositories</span></h2>
          <p className="section-desc">
            I believe in building in public. Explore my latest projects, experiments, and contributions.
          </p>
        </div>

        <div className="oss-grid reveal reveal-delay-1">
          {/* Repo Card */}
          <div className="repo-card">
            <div className="repo-header">
              <i className="fa-brands fa-github" />
              <span className="repo-name">jwils-consult-web</span>
            </div>
            <p className="repo-desc">
              Full repository for the JWILS Strategy Consult &amp; Digital Institute website — static site optimized for Netlify.
            </p>
            <div className="repo-meta">
              <span>
                <i className="fa-solid fa-circle" style={{ color: '#f7df1e', fontSize: '0.65rem' }} />
                JavaScript
              </span>
              <span><i className="fa-solid fa-star" /> 5</span>
              <span><i className="fa-solid fa-code-fork" /> 2</span>
            </div>
            <a
              href="https://github.com/brem-baah/jwils"
              target="_blank"
              rel="noreferrer"
              className="repo-link"
            >
              View Repo <i className="fa-solid fa-arrow-right" />
            </a>
          </div>

          {/* CTA Card */}
          <div className="repo-cta">
            <i className="fa-brands fa-github" style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.15)', marginBottom: 14 }} />
            <h3>Explore More on GitHub</h3>
            <p>Check out my other repositories including AI experiments, WordPress themes, and client project starters.</p>
            <a
              href="https://github.com/brem-baah?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              <i className="fa-brands fa-github" /> Visit My Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
