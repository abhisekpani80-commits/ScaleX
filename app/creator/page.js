'use client';
import TiltCard from '../components/TiltCard';

export default function CreatorPage() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <CreatorHubHero />
      <YouTubeSection />
      <FanPageSection />
      <EditingTeamSection />
      <CoffeeCallSection />
      <CreatorDisclaimer />
    </div>
  );
}

/* ── UNIQUE HEADER: Creator Studio / YouTube energy ── */
function CreatorHubHero() {
  return (
    <section style={{
      padding: '4rem 1.25rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Warm gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(245,158,11,0.05) 50%, transparent 100%)',
      }} />

      {/* Animated grid */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Large orbs for depth */}
      <div className="orb orb-pink orb-float" style={{ width: 500, height: 500, top: '-30%', right: '-10%', opacity: 0.2 }} />
      <div className="orb orb-amber orb-float-reverse" style={{ width: 300, height: 300, bottom: '-10%', left: '-5%', opacity: 0.15 }} />
      <div className="orb orb-purple orb-pulse" style={{ width: 200, height: 200, top: '20%', left: '20%' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
        {/* Live badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          marginBottom: '1.5rem',
        }}>
          <span style={{
            background: 'linear-gradient(135deg,#ec4899,#ef4444)',
            color: 'white', fontWeight: 800, fontSize: '0.7rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '0.3rem 0.75rem', borderRadius: '100px',
            animation: 'badgePulse 2s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(236,72,153,0.5)',
          }}>● LIVE</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>Creator Growth Systems</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 7vw, 4rem)',
          fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: '1.25rem',
        }}>
          <span style={{ color: 'white' }}>We Don't Just</span>
          <br />
          <span className="gradient-text-creator">Grow Creators.</span>
          <br />
          <span style={{ color: 'white', fontSize: '0.75em', fontWeight: 700, opacity: 0.75 }}>We Build Empires.</span>
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '560px', marginBottom: '2rem' }}>
          From 0 to 100K subscribers. 100M+ monthly views. A full editing team. Everything a creator needs — under one roof.
        </p>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[
            { val: '50+', label: 'Channel Network', color: '#ec4899' },
            { val: '100M+', label: 'Monthly Views', color: '#f59e0b' },
            { val: '0→100K', label: 'Sub Guarantee', color: '#a855f7' },
          ].map(s => (
            <div key={s.val} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '14px', padding: '0.9rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.15rem',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: s.color }}>{s.val}</span>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#youtube" data-hover style={{
            background: 'linear-gradient(135deg, #ec4899, #a855f7)',
            color: 'white', padding: '0.9rem 2rem', borderRadius: '50px',
            fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
            boxShadow: '0 0 30px rgba(236,72,153,0.4)',
            transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          }}>📺 Explore Packages</a>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function YouTubeSection() {
  return (
    <section id="youtube" style={{ padding: '3rem 1.25rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass neon-border-pink" style={{ borderRadius: '24px', padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{
            width: 60, height: 60, borderRadius: '16px', flexShrink: 0,
            background: 'linear-gradient(135deg,rgba(236,72,153,0.2),rgba(236,72,153,0.04))',
            border: '1px solid rgba(236,72,153,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
          }}>📺</div>
          <div>
            <span className="tag tag-pink" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>Service 01</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 800 }}>YouTube Growth Program</h2>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg,rgba(236,72,153,0.1),rgba(168,85,247,0.06))',
          border: '1px solid rgba(236,72,153,0.25)', borderRadius: '16px', padding: '1.5rem',
          textAlign: 'center', marginBottom: '2rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Guaranteed Result</p>
          <p style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 900, color: 'white' }}>
            0 → <span style={{ background: 'linear-gradient(135deg,#ec4899,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>100,000</span> Subscribers
          </p>
          <span className="tag tag-green" style={{ marginTop: '0.75rem', display: 'inline-block' }}>✅ Guarantee Included</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
          {[{icon:'🗺️',label:'Growth Strategy'},{icon:'✂️',label:'Editing Team'},{icon:'📅',label:'Upload System'},{icon:'📈',label:'Channel Structure'}].map(item => (
            <TiltCard key={item.label} intensity={8} glare={false} className="glass card-hover" style={{ borderRadius: '12px', padding: '1rem', border: '1px solid rgba(236,72,153,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
              <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>{item.label}</span>
            </TiltCard>
          ))}
        </div>

        <div className="price-badge" style={{ background: 'linear-gradient(135deg,rgba(236,72,153,0.12),rgba(168,85,247,0.07))', borderColor: 'rgba(236,72,153,0.4)', display: 'inline-block', marginBottom: '1.75rem' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Total Investment</p>
          <span style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg,#ec4899,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹2,50,000</span>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '0.25rem' }}>($3,000) — Full growth package</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 I Want This</a>
          <a href="/contact" data-hover className="btn-outline">☕ Book a Call First</a>
        </div>
      </div>
    </section>
  );
}

function FanPageSection() {
  return (
    <section id="fanpage" style={{ padding: '2rem 1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass neon-border-green" style={{ borderRadius: '24px', padding: '2.5rem 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{
            width: 60, height: 60, borderRadius: '16px', flexShrink: 0,
            background: 'linear-gradient(135deg,rgba(16,185,129,0.2),rgba(16,185,129,0.04))',
            border: '1px solid rgba(16,185,129,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
          }}>🔥</div>
          <div>
            <span className="tag tag-green" style={{ marginBottom: '0.4rem', display: 'inline-block' }}>Service 02</span>
            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', fontWeight: 800 }}>Fan Page Network Promotion</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { value: '50+', label: 'Channels', color: '#10b981' },
            { value: '100+', label: 'Clips/Month', color: '#06b6d4' },
            { value: '100M+', label: 'Monthly Views', color: '#a855f7' },
          ].map(stat => (
            <TiltCard key={stat.value} intensity={15} glare={false} className="stat-card" style={{ borderColor: `${stat.color}25`, boxShadow: `0 0 20px ${stat.color}10` }}>
              <p className="num-big" style={{ color: stat.color }}>{stat.value}</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', marginTop: '0.3rem' }}>{stat.label}</p>
            </TiltCard>
          ))}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Best For</p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {['Creator Growth','Product Promotion','Brand Awareness'].map(item => (
              <span key={item} className="tag tag-green">{item}</span>
            ))}
          </div>
        </div>

        <div className="price-badge" style={{ background: 'linear-gradient(135deg,rgba(16,185,129,0.12),rgba(6,182,212,0.07))', borderColor: 'rgba(16,185,129,0.4)', display: 'inline-block', marginBottom: '1.25rem' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Monthly Investment</p>
          <span style={{ fontSize: '2.2rem', fontWeight: 900, background: 'linear-gradient(135deg,#10b981,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹1,00,000</span>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', marginTop: '0.25rem' }}>Per month ($1,200)</p>
        </div>

        <div className="disclaimer">📌 Reach depends on niche and content performance. Cross-platform promotion may cost more.</div>
        <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 Get the Network</a>
          <a href="/contact" data-hover className="btn-outline">☕ Book a Call</a>
        </div>
      </div>
    </section>
  );
}

function EditingTeamSection() {
  return (
    <section style={{ padding: '2rem 1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass neon-border-purple" style={{ borderRadius: '24px', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '14px', background: 'linear-gradient(135deg,rgba(168,85,247,0.2),rgba(168,85,247,0.04))', border: '1px solid rgba(168,85,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>🎬</div>
          <div>
            <span className="tag tag-purple" style={{ marginBottom: '0.3rem', display: 'inline-block' }}>Creative Team</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Editing & Creative Team</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(165px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[{icon:'✂️',label:'Video Editors'},{icon:'✍️',label:'Script Writers'},{icon:'🧠',label:'Content Strategy'}].map(item => (
            <TiltCard key={item.label} intensity={8} glare={false} className="glass card-hover" style={{ borderRadius: '12px', padding: '1rem', border: '1px solid rgba(168,85,247,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
              <span style={{ fontWeight: 600, fontSize: '0.87rem' }}>{item.label}</span>
            </TiltCard>
          ))}
        </div>
        <div style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.18)', borderRadius: '12px', padding: '1rem 1.25rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.6 }}>
            💬 Pricing is discussed <strong style={{ color: 'white' }}>directly</strong> based on your specific requirements. Message us for a custom quote.
          </p>
        </div>
        <div style={{ marginTop: '1.25rem' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp">💬 Get a Custom Quote</a>
        </div>
      </div>
    </section>
  );
}

function CoffeeCallSection() {
  return (
    <section style={{ padding: '2rem 1.25rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{
        borderRadius: '24px', padding: '2.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(217,119,6,0.07))',
        border: '1px solid rgba(245,158,11,0.3)',
        boxShadow: '0 0 50px rgba(245,158,11,0.08)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', fontSize: '9rem', opacity: 0.05, pointerEvents: 'none' }}>☕</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ width: 52, height: 52, borderRadius: '14px', background: 'linear-gradient(135deg,rgba(245,158,11,0.25),rgba(245,158,11,0.05))', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', flexShrink: 0 }}>☕</div>
          <div>
            <span className="tag tag-amber" style={{ marginBottom: '0.3rem', display: 'inline-block' }}>Consultation</span>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800 }}>Business Growth Coffee Call</h2>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.93rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Got a business, brand, or creator vision? Book a paid 1-on-1 consultation where we analyze your situation and hand you a clear growth roadmap.
        </p>
        <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fbbf24' }}>₹790</span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', marginLeft: '0.5rem' }}>($9) per session</span>
        </div>
        <br />
        <a href="/contact" data-hover style={{
          background: 'linear-gradient(135deg,#f59e0b,#d97706)', color: 'white',
          padding: '0.9rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem',
          textDecoration: 'none', display: 'inline-block',
          boxShadow: '0 0 30px rgba(245,158,11,0.4)',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}>☕ Book Your Coffee Call</a>
      </div>
    </section>
  );
}

function CreatorDisclaimer() {
  return (
    <section style={{ padding: '2rem 1.25rem 5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ background: 'rgba(236,72,153,0.03)', border: '1px solid rgba(236,72,153,0.1)', borderRadius: '16px', padding: '1.5rem 2rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.85rem', lineHeight: 1.7 }}>
          💡 <strong style={{ color: 'rgba(255,255,255,0.55)' }}>Disclaimer:</strong> Prices are starting rates. Final pricing varies by complexity and requirements. All services are fully negotiable.
        </p>
      </div>
    </section>
  );
}
