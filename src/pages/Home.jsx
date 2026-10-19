import { Link } from 'react-router-dom';
import { services, stats, portfolio } from '../data/data';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

export default function Home() {
  const highlightServices = services.slice(0, 3);
  const highlightPortfolio = portfolio.slice(0, 3);

  // Gradient colors for portfolio cards
  const portfolioGradients = [
    'from-purple-900/60 to-indigo-900/60',
    'from-rose-900/60 to-pink-900/60',
    'from-teal-900/60 to-cyan-900/60',
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── HERO ── */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center top, #1a1000 0%, #0d0a00 40%, #000000 100%)',
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-400/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-amber-400/8 rounded-full" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs font-medium tracking-widest uppercase">Professional Photo Studio</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-white">Setiap Momen</span>
            <br />
            <span className="text-gradient">Layak Diabadikan</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            RAS Studio menghadirkan pengalaman fotografi profesional yang mengabadikan cerita unik Anda — dari potret personal hingga event besar dengan sentuhan artistik yang tak tertandingi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              id="hero-cta-primary"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-full hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 text-sm tracking-wide w-full sm:w-auto text-center"
            >
              📅 Book Sesi Foto
            </Link>
            <Link
              to="/portfolio"
              id="hero-cta-secondary"
              className="px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm tracking-wide backdrop-blur-sm w-full sm:w-auto text-center"
            >
              🖼️ Lihat Portofolio
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="stats-section" className="py-16 bg-gray-950 border-y border-amber-400/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section id="about-snippet-section" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 bg-amber-400/10 rounded-full border border-amber-400/20">
              Tentang RAS Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Seni Di Balik Setiap{' '}
              <span className="text-gradient">Jepretan</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Berdiri sejak 2016, RAS Studio telah menjadi pilihan utama ribuan klien di seluruh Indonesia. Kami percaya bahwa fotografi bukan sekadar mengambil gambar — ini adalah seni menceritakan kisah, mengabadikan emosi, dan menciptakan kenangan yang bertahan selamanya.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Dengan tim fotografer berpengalaman, peralatan profesional terkini, dan studio berteknologi tinggi, kami berkomitmen memberikan hasil terbaik untuk setiap klien kami.
            </p>
            <Link
              to="/about"
              id="about-snippet-cta"
              className="inline-flex items-center gap-2 text-amber-400 font-medium hover:gap-4 transition-all duration-300 group"
            >
              Kenali Kami Lebih Dekat
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Visual element - decorative grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📸', label: 'Portrait', color: 'from-purple-900/40 to-indigo-900/40' },
                { icon: '💑', label: 'Wedding', color: 'from-rose-900/40 to-pink-900/40' },
                { icon: '📦', label: 'Product', color: 'from-teal-900/40 to-cyan-900/40' },
                { icon: '🎉', label: 'Event', color: 'from-amber-900/40 to-yellow-900/40' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${item.color} border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300 cursor-default`}
                >
                  <span className="text-5xl">{item.icon}</span>
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* ── SERVICES HIGHLIGHT ── */}
      <section id="services-highlight-section" className="py-24 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Layanan Unggulan"
            title="Yang Kami Tawarkan"
            subtitle="Dari portrait personal hingga product photography komersial — kami hadirkan kualitas terbaik untuk setiap kebutuhan fotografi Anda."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlightServices.map((service) => (
              <Card key={service.id} id={`home-service-card-${service.id}`}>
                <div className="p-8">
                  <div className="text-5xl mb-5">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-amber-400 text-sm font-semibold">{service.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              id="home-view-all-services"
              className="inline-flex items-center gap-2 px-8 py-3 border border-amber-400/40 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 text-sm font-medium"
            >
              Lihat Semua Layanan →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO HIGHLIGHT ── */}
      <section id="portfolio-highlight-section" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Karya Terbaik"
            title="Portofolio Pilihan"
            subtitle="Setiap foto adalah kisah yang berbeda. Berikut beberapa karya terbaik yang kami banggakan."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlightPortfolio.map((item, idx) => (
              <div
                key={item.id}
                id={`home-portfolio-card-${item.id}`}
                className={`relative bg-gradient-to-br ${portfolioGradients[idx]} border border-white/5 rounded-2xl overflow-hidden group cursor-pointer card-hover`}
              >
                <div className="p-8 min-h-48 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-xs font-medium tracking-widest uppercase text-amber-400/80 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1 mb-4">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs text-gray-500 bg-white/5 rounded-full px-3 py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/portfolio"
              id="home-view-all-portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 border border-amber-400/40 text-amber-400 rounded-full hover:bg-amber-400/10 transition-all duration-300 text-sm font-medium"
            >
              Lihat Semua Karya →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        id="cta-banner-section"
        className="py-20 px-4 sm:px-6 bg-gradient-to-br from-amber-950/40 via-yellow-950/20 to-black border-y border-amber-400/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Siap Memulai{' '}
            <span className="text-gradient">Sesi Foto?</span>
          </h2>
          <p className="text-gray-400 text-base mb-8">
            Hubungi kami sekarang dan dapatkan konsultasi gratis. Kami akan membantu mewujudkan foto impian Anda.
          </p>
          <Link
            to="/contact"
            id="cta-banner-button"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300"
          >
            💬 Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
