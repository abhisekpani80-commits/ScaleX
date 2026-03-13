'use client';
import TiltCard from '../components/TiltCard';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <CoffeeHero />
      <ContactCards />
      <UseCasesSection />
      <TrustSection />
    </div>
  );
}

/* ── UNIQUE HEADER: Cozy Coffee Shop Vibe ── */
function CoffeeHero() {
  return (
    <section style={{
      padding: '4rem 1.25rem 3rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, rgba(120,53,15,0.25) 0%, rgba(146,64,14,0.1) 30%, transparent 70%)',
      borderBottom: '1px solid rgba(245,158,11,0.1)',
    }}>
      {/* Warm ambient glow */}
      <div className="orb orb-amber orb-pulse" style={{ width: 600, height: 600, top: '-30%', left: '-10%', opacity: 0.2, filter: 'blur(100px)' }} />
      <div className="orb orb-pink orb-float-reverse" style={{ width: 350, height: 350, top: '10%', right: '-10%', opacity: 0.12 }} />

      {/* Subtle dot texture */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.3,
        backgroundImage: 'radial-gradient(rgba(245,158,11,0.12) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
        {/* Top label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '2.5rem',
            animation: 'float 3s ease-in-out infinite',
            display: 'inline-block',
          }}>☕</span>
          <div>
            <p style={{ fontSize: '0.72rem', color: 'rgba(245,158,11,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>ScaleX — Let's Connect</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)' }}>We respond within 24 hours, always.</p>
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
          <span style={{ color: 'white' }}>Let's Have a</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 60%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Virtual Coffee ☕</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6em', fontWeight: 600 }}>and build something great together.</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2.5rem' }}>
          Whether you're buying a service, asking a question, or dreaming up a big vision — we're here. No hard sells. Just honest conversations and real solutions.
        </p>

        {/* Quick contact row */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20discuss%20my%20project"
            target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            💬 WhatsApp Now
          </a>
          <a href="mailto:biz.abhisek@gmail.com" data-hover style={{
            background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)',
            color: '#fbbf24', padding: '0.9rem 2rem', borderRadius: '50px',
            fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
            transition: 'all 0.3s ease',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>✉️ Send Email</a>
        </div>
      </div>
    </section>
  );
}

function ContactCards() {
  return (
    <section style={{ padding: '3rem 1.25rem', maxWidth: '950px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>

        {/* WhatsApp */}
        <TiltCard intensity={12} className="glass card-hover" style={{
          borderRadius: '20px', padding: '2rem', textAlign: 'center',
          border: '1px solid rgba(37,211,102,0.25)',
          boxShadow: '0 4px 30px rgba(37,211,102,0.08)',
          display: 'flex', flexDirection: 'column'
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: '20px', margin: '0 auto 1.25rem',
            background: 'linear-gradient(135deg, rgba(37,211,102,0.2), rgba(18,140,126,0.1))',
            border: '1px solid rgba(37,211,102,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
          }}>💬</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>WhatsApp</h3>
          <p style={{ color: '#34d399', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>+91 9556436685</p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.84rem', marginBottom: '1.5rem', lineHeight: 1.5, flexGrow: 1 }}>
            Fastest response. We're online most of the day.
          </p>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20discuss%20my%20project"
            target="_blank" rel="noopener noreferrer" data-hover
            style={{
              background: 'linear-gradient(135deg,#25D366,#128C7E)',
              color: 'white', padding: '0.65rem 1.5rem', borderRadius: '50px',
              fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
              display: 'inline-block', boxShadow: '0 0 20px rgba(37,211,102,0.25)',
              transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            }}>💬 Message Us</a>
        </TiltCard>

        {/* Email */}
        <TiltCard intensity={12} className="glass card-hover" style={{
          borderRadius: '20px', padding: '2rem', textAlign: 'center',
          border: '1px solid rgba(168,85,247,0.25)',
          boxShadow: '0 4px 30px rgba(168,85,247,0.08)',
          display: 'flex', flexDirection: 'column'
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: '20px', margin: '0 auto 1.25rem',
            background: 'linear-gradient(135deg,rgba(168,85,247,0.2),rgba(168,85,247,0.04))',
            border: '1px solid rgba(168,85,247,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
          }}>✉️</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>Email</h3>
          <p style={{ color: '#c084fc', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.5rem', wordBreak: 'break-all' }}>biz.abhisek@gmail.com</p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.84rem', marginBottom: '1.5rem', lineHeight: 1.5, flexGrow: 1 }}>
            For detailed project briefs or formal inquiries.
          </p>
          <a href="mailto:biz.abhisek@gmail.com" data-hover style={{
            background: 'rgba(168,85,247,0.14)', border: '1px solid rgba(168,85,247,0.4)',
            color: '#c084fc', padding: '0.65rem 1.5rem', borderRadius: '50px',
            fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none',
            display: 'inline-block', transition: 'all 0.3s ease',
          }}>✉️ Send Email</a>
        </TiltCard>

        {/* Coffee Call */}
        <TiltCard intensity={12} style={{
          borderRadius: '20px', padding: '2rem', textAlign: 'center',
          background: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(217,119,6,0.06))',
          border: '1px solid rgba(245,158,11,0.3)',
          boxShadow: '0 4px 40px rgba(245,158,11,0.1)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column'
        }}>
          <div style={{ position: 'absolute', bottom: '-30px', right: '-20px', fontSize: '7rem', opacity: 0.06, pointerEvents: 'none' }}>☕</div>
          <div style={{
            width: 64, height: 64, borderRadius: '20px', margin: '0 auto 1.25rem',
            background: 'linear-gradient(135deg,rgba(245,158,11,0.25),rgba(245,158,11,0.06))',
            border: '1px solid rgba(245,158,11,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
          }}>☕</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>Coffee Consultation</h3>
          <p style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fbbf24', marginBottom: '0.2rem' }}>₹790</p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>($9) — 60 min strategy session</p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.84rem', marginBottom: '1.5rem', lineHeight: 1.5, flexGrow: 1 }}>
            We analyze your goals and hand you a custom growth roadmap.
          </p>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20book%20a%20coffee%20consultation%20call" target="_blank" rel="noopener noreferrer" data-hover style={{
            background: 'linear-gradient(135deg,#f59e0b,#d97706)',
            color: 'white', padding: '0.65rem 1.5rem', borderRadius: '50px',
            fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none',
            display: 'inline-block', boxShadow: '0 0 20px rgba(245,158,11,0.35)',
            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}>☕ Book Now — ₹790</a>
        </TiltCard>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section style={{ padding: '0 1.25rem 2rem', maxWidth: '950px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.3rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.25rem' }}>
        Reach Out For <span className="gradient-text-warm">Anything</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {[
          { icon: '💰', title: 'Buy a Service', desc: 'Ready to invest? Let\'s get your project started right away.' },
          { icon: '🤔', title: 'Ask Questions', desc: 'Not sure what you need? We\'ll guide you with no pressure.' },
          { icon: '🗺️', title: 'Discuss a Project', desc: 'Big vision? Let\'s map out your roadmap together on a call.' },
        ].map(c => (
          <TiltCard key={c.title} intensity={10} className="glass card-hover" style={{ borderRadius: '16px', padding: '1.4rem', border: '1px solid rgba(245,158,11,0.12)' }}>
            <div style={{ fontSize: '1.7rem', marginBottom: '0.7rem' }}>{c.icon}</div>
            <h3 style={{ fontWeight: 700, marginBottom: '0.35rem', fontSize: '0.98rem' }}>{c.title}</h3>
            <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.84rem', lineHeight: 1.6 }}>{c.desc}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section style={{ padding: '1rem 1.25rem 5rem', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg,rgba(245,158,11,0.07),rgba(168,85,247,0.07))',
        border: '1px solid rgba(245,158,11,0.18)',
        borderRadius: '20px', padding: '2rem', textAlign: 'center',
      }}>
        <p style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🤝</p>
        <h3 style={{ fontWeight: 800, marginBottom: '0.6rem', fontSize: '1.1rem' }}>No ghosting. 24-hour response. Always.</h3>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
          We take every inquiry seriously. Your growth is our business.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20discuss%20my%20project" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 WhatsApp</a>
          <a href="mailto:biz.abhisek@gmail.com" data-hover className="btn-primary">✉️ Email Us</a>
        </div>
      </div>
    </section>
  );
}
