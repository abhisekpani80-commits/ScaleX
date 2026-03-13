'use client';
import TiltCard from './components/TiltCard';

export default function Home() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{
      padding: '5rem 1.25rem 3rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dynamic Orbs */}
      <div className="orb orb-purple orb-float" style={{ width: 400, height: 400, top: '-20%', left: '-10%', opacity: 0.15 }} />
      <div className="orb orb-cyan orb-float-reverse" style={{ width: 300, height: 300, bottom: '20%', right: '-5%', opacity: 0.15 }} />
      
      {/* Background Dots */}
      <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div className="fade-in-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)',
          padding: '0.4rem 1rem', borderRadius: '100px', marginBottom: '2rem',
        }}>
          <span style={{ fontSize: '1rem', animation: 'blink 2s infinite' }}>✨</span>
          <span style={{ color: '#c084fc', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Next-Gen Digital Agency
          </span>
        </div>

        <h1 className="fade-in-up anim-delay-1" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          Build Your <br />
          <span className="shimmer-text">Digital Presence.</span><br />
          Scale Your Brand.
        </h1>

        <p className="fade-in-up anim-delay-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 2.5rem' }}>
          We design stunning websites, engineered mobile apps, and automated YouTube growth systems for creators and businesses ready to dominate.
        </p>

        <div className="fade-in-up anim-delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/services" data-hover className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>🚀 Explore Services</a>
          <a href="https://wa.me/919556436685?text=Hi%20ScaleX,%20I%20want%20to%20build%20my%20digital%20presence" target="_blank" rel="noopener noreferrer" data-hover className="btn-whatsapp" style={{ padding: '0.9rem 2.2rem', fontSize: '1rem' }}>
            💬 Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: 'Website Development',
      desc: 'High-converting, lightning-fast React & Next.js websites with premium 3D aesthetics.',
      icon: '🌐',
      link: '/services#website',
      color: 'cyan',
    },
    {
      title: 'App Development',
      desc: 'Full-stack mobile applications deployed on Play Store with custom UI/UX design.',
      icon: '📱',
      link: '/services#app',
      color: 'purple',
    },
    {
      title: 'YouTube Growth System',
      desc: '0 to 100K Strategy. We manage editing, strategy, and upload systems automatically.',
      icon: '📺',
      link: '/creator#youtube',
      color: 'pink',
    },
    {
      title: 'Fan Page Network',
      desc: 'Leverage our 50+ channel network doing 100M+ monthly views for instant promotion.',
      icon: '🔥',
      link: '/creator#fanpage',
      color: 'green',
    }
  ];

  return (
    <section style={{ padding: '3rem 1.25rem 5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="fade-in-up" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
          Everything You Need to <span className="gradient-text">Scale</span>
        </h2>
        <p className="fade-in-up anim-delay-1" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto' }}>
          End-to-end digital solutions designed for conversion and retention.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {services.map((s, idx) => (
          <TiltCard key={s.title} intensity={15} glare={true} className={`scale-in anim-delay-${idx + 1}`}>
            <a href={s.link} data-hover style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className={`glass neon-border-${s.color}`} style={{
                borderRadius: '24px', padding: '2.5rem 2rem', height: '100%',
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <div style={{
                  width: 65, height: 65, borderRadius: '20px',
                  background: `linear-gradient(135deg, var(--neon-${s.color}) 20%, transparent)`,
                  border: `1px solid rgba(255,255,255,0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', opacity: 0.9,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginTop: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1 }}>{s.desc}</p>
                <div style={{
                  color: `var(--neon-${s.color})`, fontWeight: 700, fontSize: '0.85rem',
                  display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem',
                }}>
                  Explore Service <span style={{ transition: 'transform 0.2s', marginTop: '2px' }}>→</span>
                </div>
              </div>
            </a>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section style={{ padding: '0 1.25rem 5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass neon-border-purple" style={{
        borderRadius: '30px', padding: '3.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(6,182,212,0.03))',
        position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        {/* Dynamic Inner Orbs */}
        <div className="orb orb-cyan orb-pulse" style={{ width: 300, height: 300, top: '-50%', left: '20%', opacity: 0.2 }} />
        
        <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
          Why Brands Trust <span className="gradient-text">ScaleX</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
          {[
            { metric: '50+', label: 'Channel Network' },
            { metric: '100M+', label: 'Monthly Views' },
            { metric: '24/7', label: 'Priority Support' },
            { metric: '0→100K', label: 'Growth Strategies' },
          ].map(stat => (
            <div key={stat.label}>
              <p style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: '0.25rem', color: 'white' }}>{stat.metric}</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
