'use client';
import TiltCard from '../components/TiltCard';

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <DevLabHero />
      <WebsiteDevSection />
      <AppDevSection />
      <ServicesDisclaimer />
    </div>
  );
}

/* ── UNIQUE HEADER: Cyber/Dev Terminal Style ── */
function DevLabHero() {
  return (
    <section style={{
      padding: '5rem 1.25rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(6,182,212,0.05) 0%, transparent 60%)',
      borderBottom: '1px solid rgba(6,182,212,0.1)',
    }}>
      {/* Animated scanline */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)',
        animation: 'scanLine 4s linear infinite',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Dot bg */}
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Orbs */}
      <div className="orb orb-cyan orb-float" style={{ width: 350, height: 350, top: '-20%', right: '-5%' }} />
      <div className="orb orb-green orb-float-reverse" style={{ width: 250, height: 250, bottom: '-10%', left: '-5%' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        {/* Terminal path */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: "'Courier New', monospace",
          fontSize: '0.78rem',
          color: 'rgba(6,182,212,0.6)',
          marginBottom: '1.5rem',
          background: 'rgba(6,182,212,0.06)',
          border: '1px solid rgba(6,182,212,0.15)',
          borderRadius: '8px',
          padding: '0.4rem 0.85rem',
        }}>
          <span style={{ color: '#10b981' }}>~/scalex</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
          <span style={{ color: '#22d3ee' }}>services</span>
          <span className="cursor-dot" />
        </div>

        {/* Heading with bracket notation */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="code-bracket" style={{ fontSize: '1.2rem', color: 'rgba(6,182,212,0.35)' }}>{'<'}</span>
          <h1 style={{
            display: 'inline',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            <span className="gradient-text-cyber">Dev</span>{' '}
            <span style={{ color: 'white' }}>Workshop</span>
          </h1>
          <span className="code-bracket" style={{ fontSize: '1.2rem', color: 'rgba(6,182,212,0.35)' }}>{'>'}</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2rem' }}>
          Premium websites and full-stack mobile apps engineered to convert, retain, and scale your business.
        </p>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {['⚡ Fast Delivery', '🔒 Secure', '🌍 SEO Optimized', '📱 Mobile-First', '🔧 Maintained'].map(pill => (
            <span key={pill} style={{
              background: 'rgba(6,182,212,0.08)',
              border: '1px solid rgba(6,182,212,0.2)',
              borderRadius: '100px', padding: '0.3rem 0.8rem',
              fontSize: '0.78rem', color: '#22d3ee', fontWeight: 600,
              transition: 'all 0.2s ease',
            }}>{pill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteDevSection() {
  return (
    <section id="website" style={{ padding: '4rem 1.25rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass neon-border-cyan" style={{ borderRadius: '24px', padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{
            width: 60, height: 60, borderRadius: '16px', flexShrink: 0,
            background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(6,182,212,0.05))',
            border: '1px solid rgba(6,182,212,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.8rem',
          }}>🌐</div>
          <div>
            <span className="tag tag-cyan" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>Website Development</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 800, color: 'white' }}>
              Professional Website Development
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div className="price-badge" style={{ background: 'linear-gradient(135deg,rgba(6,182,212,0.1),rgba(168,85,247,0.08))', borderColor: 'rgba(6,182,212,0.4)' }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>First Time Setup</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg,#06b6d4,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹30,000</span>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>+</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginBottom: '1rem' }}>Starting from ($360)</p>
            <div className="divider" style={{ margin: '0.75rem 0' }} />
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', marginBottom: '0.6rem' }}>Price varies by:</p>
            {['Complexity', 'Custom features', 'Business requirements'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                <span style={{ color: '#22d3ee', fontSize: '0.75rem' }}>▸</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem' }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="price-badge" style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.1),rgba(6,182,212,0.07))', borderColor: 'rgba(16,185,129,0.4)' }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>Yearly Maintenance</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg,#10b981,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹10,000</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginBottom: '1rem' }}>Per year ($120)</p>
            <div className="divider" style={{ margin: '0.75rem 0' }} />
            {['Hosting management', 'Security updates', 'Performance monitoring', 'Technical support'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 700 }}>✓</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.84rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="disclaimer">⚠️ Final price may vary depending on project complexity. All services are negotiable based on the project scope.</div>

        <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 Discuss Your Website</a>
          <a href="/contact" data-hover className="btn-outline">☕ Book a Call</a>
        </div>
      </div>
    </section>
  );
}

function AppDevSection() {
  return (
    <section id="app" style={{ padding: '2rem 1.25rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass neon-border-purple" style={{ borderRadius: '24px', padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{
            width: 60, height: 60, borderRadius: '16px', flexShrink: 0,
            background: 'linear-gradient(135deg,rgba(168,85,247,0.2),rgba(168,85,247,0.05))',
            border: '1px solid rgba(168,85,247,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
          }}>📱</div>
          <div>
            <span className="tag tag-purple" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>App Development</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 800, color: 'white' }}>Full Mobile App Development</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
          {[{ icon:'🎨',label:'Full App Design'},{icon:'⚙️',label:'Backend Setup'},{icon:'🚀',label:'Play Store Launch'},{icon:'🔧',label:'Maintenance'}].map(item => (
            <TiltCard key={item.label} intensity={8} glare={false} className="glass card-hover" style={{ borderRadius: '12px', padding: '1rem', border: '1px solid rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{item.label}</span>
            </TiltCard>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
          <div className="price-badge" style={{ background: 'linear-gradient(135deg,rgba(168,85,247,0.12),rgba(6,182,212,0.06))', borderColor: 'rgba(168,85,247,0.4)' }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>First Year (All-In)</p>
            <span style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg,#a855f7,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹3,00,000</span>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginTop: '0.25rem' }}>Design + Build + Launch ($3,600)</p>
          </div>
          <div className="price-badge" style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.1),rgba(6,182,212,0.07))', borderColor: 'rgba(16,185,129,0.4)' }}>
            <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.6rem' }}>After First Year</p>
            <span style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg,#10b981,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹20,000</span>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginTop: '0.25rem' }}>Yearly maintenance ($240)</p>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>📋 Changes Policy</h3>
          {[
            { badge: 'FREE', badgeClass: 'tag-green', desc: 'One full revision after completion — included.' },
            { badge: '₹1,000', badgeClass: 'tag-cyan', desc: 'Small changes after revision ($12 each).' },
            { badge: '₹5,000', badgeClass: 'tag-pink', desc: 'Major changes after revision ($60 each).' },
          ].map(p => (
            <div key={p.badge} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className={`tag ${p.badgeClass}`} style={{ whiteSpace: 'nowrap', marginTop: '2px' }}>{p.badge}</span>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="disclaimer">📌 Client must describe requirements clearly before development begins. All services are negotiable.</div>
        <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 Discuss Your App</a>
          <a href="/contact" data-hover className="btn-outline">☕ Book a Call</a>
        </div>
      </div>
    </section>
  );
}

function ServicesDisclaimer() {
  return (
    <section style={{ padding: '0 1.25rem 5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.12)', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.85rem', lineHeight: 1.7 }}>
          💡 <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Disclaimer:</strong> Prices are starting rates. Final pricing varies by project complexity. All services are fully negotiable.
        </p>
      </div>
    </section>
  );
}
