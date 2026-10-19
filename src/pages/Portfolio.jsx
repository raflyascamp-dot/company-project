import { useState } from 'react';
import { portfolio, clients } from '../data/data';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

const categories = ['Semua', 'Portrait', 'Prewedding', 'Product', 'Event', 'Family'];

const cardGradients = {
  Portrait: 'from-purple-900/60 to-indigo-900/60',
  Prewedding: 'from-rose-900/60 to-pink-900/60',
  Product: 'from-teal-900/60 to-cyan-900/60',
  Event: 'from-orange-900/60 to-amber-900/60',
  Family: 'from-green-900/60 to-emerald-900/60',
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? portfolio
    : portfolio.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── PAGE HEADER ── */}
      <section
        id="portfolio-header"
        className="pt-32 pb-20 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at top, #1a1000 0%, #000000 60%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 bg-amber-400/10 rounded-full border border-amber-400/20">
            Karya Kami
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Portofolio &{' '}
            <span className="text-gradient">Galeri</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Koleksi karya terbaik kami yang mencerminkan kualitas, kreativitas, dan dedikasi dalam setiap sesi foto.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section id="portfolio-grid-section" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" id="portfolio-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-tab-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30'
                    : 'bg-gray-900 text-gray-400 border border-white/10 hover:border-amber-400/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                className={`relative bg-gradient-to-br ${cardGradients[item.category] || 'from-gray-900 to-gray-800'} border border-white/5 rounded-2xl overflow-hidden group card-hover cursor-pointer`}
              >
                {/* Decorative image placeholder with pattern */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 2px, transparent 2px)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl opacity-40">📷</span>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium tracking-widest uppercase text-amber-400 bg-black/60 backdrop-blur-sm border border-amber-400/30 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-gray-400 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold text-white mb-1"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-amber-400/70 text-xs mb-3 font-medium">{item.client}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 bg-white/5 border border-white/5 rounded-full px-3 py-1"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <div className="text-5xl mb-4">📷</div>
              <p>Belum ada karya dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section id="clients-section" className="py-24 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Klien Kami"
            title="Dipercaya Oleh"
            subtitle="Beberapa brand dan institusi terkemuka yang telah mempercayakan kebutuhan fotografi mereka kepada kami."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div
                key={client.id}
                id={`client-card-${client.id}`}
                className="bg-gray-900/40 border border-white/5 rounded-2xl p-6 text-center hover:border-amber-400/20 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xl font-bold text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {client.name.charAt(0)}
                </div>
                <div className="text-white font-medium text-sm mb-1">{client.name}</div>
                <div className="text-gray-600 text-xs">{client.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials-section" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Testimoni"
            title="Kata Mereka"
            subtitle="Kepuasan klien adalah ukuran keberhasilan kami yang sesungguhnya."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Budi Santoso',
                role: 'CEO, PT Maju Bersama',
                text: 'Hasil foto sangat memuaskan! Tim RAS Studio sangat profesional dan hasilnya melebihi ekspektasi kami. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Rina Kusuma',
                role: 'Bride — Prewedding 2024',
                text: 'Foto prewedding kami luar biasa indah. Fotografernya sabar, kreatif, dan hasil editingnya sempurna. Terima kasih RAS Studio!',
                rating: 5,
              },
              {
                name: 'Maya Pratiwi',
                role: 'Owner, Glow Beauty Brand',
                text: 'Product photography dari RAS Studio meningkatkan penjualan online kami secara signifikan. Kualitas foto sangat premium!',
                rating: 5,
              },
            ].map((t, i) => (
              <div
                key={i}
                id={`testimonial-card-${i + 1}`}
                className="bg-gray-900/60 border border-white/5 rounded-2xl p-7 hover:border-amber-400/20 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="portfolio-cta"
        className="py-20 px-4 text-center bg-gradient-to-br from-amber-950/30 to-black border-t border-amber-400/10"
      >
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ingin Karya Anda{' '}
          <span className="text-gradient">Ada Di Sini?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Book sesi foto Anda sekarang dan jadilah bagian dari koleksi karya terbaik RAS Studio.
        </p>
        <Link
          to="/contact"
          id="portfolio-cta-button"
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
        >
          📅 Book Sesi Foto
        </Link>
      </section>
    </div>
  );
}
