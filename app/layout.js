import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
  title: "ScaleX — Build. Scale. Dominate.",
  description: "ScaleX is a premium digital agency offering Website Development, App Development, and Content Creator Growth systems for businesses and creators.",
  keywords: "website development, app development, YouTube growth, digital agency, ScaleX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <div style={{
      position: 'fixed', top: '1rem', left: 0, right: 0,
      zIndex: 1000, display: 'flex', justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <nav style={{
        background: 'rgba(5, 5, 8, 0.7)',
        backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '100px',
        padding: '0.6rem 0.8rem 0.6rem 1.4rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        gap: '2rem',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
        pointerEvents: 'auto',
        maxWidth: '100%',
        minWidth: '320px',
      }}>
        <a href="/" data-hover style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontSize: '1.25rem', fontWeight: 900,
            background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
          }}>ScaleX</span>
        </a>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" data-hover className="nav-link">Home</a>
          <a href="/services" data-hover className="nav-link">Services</a>
          <a href="/creator" data-hover className="nav-link">Creator Growth</a>
          <a href="/contact" data-hover style={{
            background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
            color: 'white', padding: '0.45rem 1.25rem', borderRadius: '50px',
            fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none',
            whiteSpace: 'nowrap', boxShadow: '0 0 20px rgba(168,85,247,0.3)',
            transition: 'all 0.3s ease', marginLeft: '0.5rem',
          }}>☕ Book Call</a>
        </div>
      </nav>
      {/* Add a tiny style block just for the nav link hover effect */}
      <style dangerouslySetInnerHTML={{__html: `
        .nav-link {
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.4rem 0.8rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: white;
          background: rgba(255,255,255,0.08);
        }
      `}} />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '4rem 1.25rem 2rem',
      textAlign: 'center',
      background: 'rgba(0,0,0,0.4)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{
          fontSize: '1.8rem', fontWeight: 900,
          background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem',
        }}>ScaleX</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '2rem' }}>
          Build Your Digital Presence. Scale Your Brand.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <a href="/" data-hover style={footerLinkStyle}>Home</a>
          <a href="/services" data-hover style={footerLinkStyle}>Services</a>
          <a href="/creator" data-hover style={footerLinkStyle}>Creator Growth</a>
          <a href="/contact" data-hover style={footerLinkStyle}>Contact</a>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <a href="https://wa.me/919556436685?text=Hi%20I%20want%20to%20know%20about%20your%20services"
            target="_blank" rel="noopener noreferrer" data-hover
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
            💬 WhatsApp Us
          </a>
          <a href="mailto:biz.abhisek@gmail.com" data-hover
            style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.4)', color: '#c084fc', padding: '0.6rem 1.5rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
            ✉️ Email Us
          </a>
        </div>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(6,182,212,0.3), transparent)', marginBottom: '1.5rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem' }}>
          © 2025 ScaleX Digital Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  fontSize: '0.88rem',
  transition: 'color 0.3s ease',
};
