import { team, stats } from '../data/data';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const timeline = [
  { year: '2016', title: 'Awal Perjalanan', desc: 'RAS Studio didirikan oleh Rafli Abadissalam di Bandung dengan satu kamera dan mimpi besar.' },
  { year: '2018', title: 'Studio Pertama', desc: 'Membuka studio pertama dengan peralatan profesional dan mulai menerima klien korporat.' },
  { year: '2020', title: 'Ekspansi Layanan', desc: 'Menambahkan layanan videografi, product photography, dan event documentation.' },
  { year: '2022', title: 'Penghargaan Nasional', desc: 'Meraih penghargaan Best Photography Studio Indonesia dari asosiasi fotografer nasional.' },
  { year: '2024', title: 'Studio Modern', desc: 'Renovasi besar dengan studio 3 ruang, peralatan terbaru, dan tim yang lebih besar.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── PAGE HEADER ── */}
      <section
        id="about-header"
        className="pt-32 pb-20 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at top, #1a1000 0%, #000000 60%)' }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-amber-400 text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 bg-amber-400/10 rounded-full border border-amber-400/20">
            Tentang Kami
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mengenal{' '}
            <span className="text-gradient">RAS Studio</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Kisah kami dimulai dari kecintaan terhadap seni fotografi dan tekad untuk mengabadikan setiap momen berharga dengan kualitas terbaik.
          </p>
        </div>
      </section>

      {/* ── VISI MISI ── */}
      <section id="vision-mission-section" className="py-24 px-4 sm:px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Visi & Misi"
            title="Arah & Tujuan Kami"
            subtitle="Setiap langkah yang kami ambil selalu berpijak pada nilai-nilai yang kami percaya."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visi */}
            <Card id="vision-card">
              <div className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl mb-6">
                  🔭
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Visi
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Menjadi studio fotografi terdepan di Indonesia yang dikenal karena kualitas artistik yang tak tertandingi, inovasi teknologi, dan kemampuan mengabadikan setiap momen dengan keindahan yang mengabadi.
                </p>
              </div>
            </Card>

            {/* Misi */}
            <Card id="mission-card">
              <div className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl mb-6">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Misi
                </h3>
                <ul className="space-y-3">
                  {[
                    'Menghadirkan layanan fotografi berkualitas tinggi yang terjangkau',
                    'Terus berinovasi dalam teknik dan teknologi fotografi terbaru',
                    'Memberikan pengalaman sesi foto yang menyenangkan dan profesional',
                    'Membangun hubungan jangka panjang dengan setiap klien kami',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── TIMELINE / SEJARAH ── */}
      <section id="history-section" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            label="Sejarah"
            title="Perjalanan Kami"
            subtitle="Dari studio kecil di Bandung hingga menjadi salah satu studio foto terkemuka di Indonesia."
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/50 via-amber-400/20 to-transparent md:-translate-x-0.5" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  id={`timeline-item-${item.year}`}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 top-6 z-10" />

                  <div className={`md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-amber-400 font-bold text-lg">{item.year}</span>
                    <h3 className="text-white font-semibold text-xl mt-1 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section id="about-stats-section" className="py-16 bg-gray-950 border-y border-amber-400/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team-section" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="Tim Kami"
            title="Orang-orang Di Balik Lensa"
            subtitle="Tim profesional kami terdiri dari fotografer berpengalaman, editor handal, dan spesialis kreatif yang berdedikasi."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.id} id={`team-card-${member.id}`}>
                <div className="p-6 text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-3xl font-bold text-black mx-auto mb-4 shadow-lg shadow-amber-400/20">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-amber-400 text-xs font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{member.bio}</p>
                  <span className="inline-block text-xs bg-amber-400/10 text-amber-400/80 border border-amber-400/20 rounded-full px-3 py-1 mb-3">
                    {member.speciality}
                  </span>
                  <div className="text-gray-600 text-xs">{member.instagram}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="about-cta"
        className="py-20 px-4 bg-gradient-to-br from-amber-950/30 to-black border-t border-amber-400/10 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Bergabunglah Bersama{' '}
          <span className="text-gradient">Keluarga Kami</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Jadilah bagian dari lebih dari 500 klien yang telah mempercayakan momen berharga mereka kepada RAS Studio.
        </p>
        <Link
          to="/contact"
          id="about-cta-button"
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300"
        >
          📞 Hubungi Kami
        </Link>
      </section>
    </div>
  );
}
