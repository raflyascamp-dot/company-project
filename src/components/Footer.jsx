import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/rasstudio', icon: '📸' },
    { name: 'WhatsApp', href: 'https://wa.me/6281234567890', icon: '💬' },
    { name: 'YouTube', href: 'https://youtube.com/@rasstudio', icon: '▶️' },
    { name: 'TikTok', href: 'https://tiktok.com/@rasstudio', icon: '🎵' },
  ];

  const quickLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/about', label: 'Tentang Kami' },
    { to: '/services', label: 'Layanan' },
    { to: '/portfolio', label: 'Portofolio' },
    { to: '/contact', label: 'Kontak' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-amber-400/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit" id="footer-logo">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center font-bold text-black text-xl shadow-lg">
                R
              </div>
              <div>
                <div className="text-white font-bold text-2xl tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                  RAS <span className="text-amber-400 font-light">Studio</span>
                </div>
                <div className="text-gray-500 text-xs tracking-widest uppercase">Professional Photography</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Studio foto profesional yang mengabadikan setiap momen berharga Anda dengan sentuhan artistik tinggi dan kualitas terbaik. Kami percaya setiap foto memiliki cerita yang layak untuk diceritakan.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  id={`footer-social-${social.name.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:bg-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    id={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 text-sm hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-0.5 bg-amber-400/0 group-hover:bg-amber-400 transition-all duration-300 rounded" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-0.5">📍</span>
                <span className="text-gray-400 text-sm">
                  Jl. Sudirman No. 42, Bandung, Jawa Barat 40111
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">📱</span>
                <a href="tel:+6281234567890" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">✉️</span>
                <a href="mailto:hello@rasstudio.id" className="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                  hello@rasstudio.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 mt-0.5">🕐</span>
                <span className="text-gray-400 text-sm">
                  Senin – Sabtu: 09.00 – 20.00<br />Minggu: 10.00 – 17.00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} RAS Studio. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with ❤️ by{' '}
            <span className="text-amber-400">Rafli Abadissalam</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
