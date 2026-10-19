import { services } from '../data/data';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── PAGE HEADER ── */}
      <section
        id="services-header"
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
            Layanan Kami
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Solusi Fotografi{' '}
            <span className="text-gradient">Terlengkap</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Dari kebutuhan personal hingga korporat — kami menyediakan berbagai layanan fotografi profesional yang disesuaikan dengan kebutuhan Anda.
          </p>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="services-grid-section" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Paket Layanan"
            title="Pilih Layanan Anda"
            subtitle="Setiap layanan kami dirancang untuk memberikan pengalaman terbaik dan hasil yang memuaskan."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} id={`service-card-${service.id}`}>
                <div className="p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-5">{service.icon}</div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-400 text-xs">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & Duration */}
                  <div className="border-t border-white/5 pt-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs uppercase tracking-wide">Harga</span>
                      <span className="text-amber-400 font-bold text-sm">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs uppercase tracking-wide">Durasi</span>
                      <span className="text-gray-300 text-sm">{service.duration}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    id={`service-book-${service.id}`}
                    className="mt-5 block text-center py-3 border border-amber-400/30 text-amber-400 text-sm font-medium rounded-xl hover:bg-amber-400/10 hover:border-amber-400/60 transition-all duration-300"
                  >
                    Book Sekarang
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works-section" className="py-24 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="Cara Kerja"
            title="Proses Sederhana"
            subtitle="Kami memastikan proses booking hingga pengiriman foto semudah dan senyaman mungkin."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '📅', title: 'Booking', desc: 'Pilih layanan dan jadwal yang sesuai melalui form kontak atau WhatsApp kami.' },
              { step: '02', icon: '💬', title: 'Konsultasi', desc: 'Tim kami akan menghubungi Anda untuk diskusi konsep, lokasi, dan kebutuhan spesifik.' },
              { step: '03', icon: '📸', title: 'Sesi Foto', desc: 'Nikmati sesi foto profesional bersama tim fotografer kami yang ramah dan berpengalaman.' },
              { step: '04', icon: '🖼️', title: 'Pengiriman', desc: 'Terima foto final hasil edit dalam waktu yang telah disepakati melalui galeri online.' },
            ].map((item) => (
              <div
                key={item.step}
                id={`how-it-works-step-${item.step}`}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-20 h-20 rounded-full bg-gray-900 border border-amber-400/20 flex items-center justify-center text-3xl group-hover:border-amber-400/60 group-hover:bg-amber-400/5 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-amber-400 bg-black border border-amber-400/30 rounded-full w-6 h-6 flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="services-cta"
        className="py-20 px-4 text-center bg-gradient-to-br from-amber-950/30 to-black border-t border-amber-400/10"
      >
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Ada Pertanyaan Tentang{' '}
          <span className="text-gradient">Layanan Kami?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Tim kami siap membantu Anda memilih layanan yang paling sesuai dengan kebutuhan dan budget Anda.
        </p>
        <Link
          to="/contact"
          id="services-cta-button"
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
        >
          💬 Konsultasi Gratis
        </Link>
      </section>
    </div>
  );
}
