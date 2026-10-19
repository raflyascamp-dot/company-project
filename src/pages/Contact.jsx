import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const serviceOptions = [
  'Portrait Photography',
  'Prewedding Photography',
  'Product Photography',
  'Family Photography',
  'Event Photography',
  'Headshot & Corporate',
  'Lainnya',
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Nama wajib diisi.';
    else if (form.name.trim().length < 3) newErrors.name = 'Nama minimal 3 karakter.';

    if (!form.email.trim()) newErrors.email = 'Email wajib diisi.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Format email tidak valid.';

    if (!form.message.trim()) newErrors.message = 'Pesan wajib diisi.';
    else if (form.message.trim().length < 10) newErrors.message = 'Pesan minimal 10 karakter.';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-gray-900/60 border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none transition-all duration-300 ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-500'
        : 'border-white/10 focus:border-amber-400/60 focus:bg-gray-900'
    }`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── PAGE HEADER ── */}
      <section
        id="contact-header"
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
            Hubungi Kami
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mari{' '}
            <span className="text-gradient">Terhubung</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Punya pertanyaan atau ingin booking sesi foto? Kami siap membantu Anda 7 hari seminggu.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section id="contact-main-section" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Informasi Kontak
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Jangan ragu untuk menghubungi kami melalui berbagai saluran di bawah ini. Tim kami akan merespon dalam waktu 1×24 jam.
                </p>
              </div>

              {/* Contact Details */}
              {[
                { icon: '📍', label: 'Alamat', value: 'Jl. Sudirman No. 42, Bandung\nJawa Barat 40111', link: null },
                { icon: '📱', label: 'WhatsApp / Telepon', value: '+62 812-3456-7890', link: 'tel:+6281234567890' },
                { icon: '✉️', label: 'Email', value: 'hello@rasstudio.id', link: 'mailto:hello@rasstudio.id' },
                { icon: '🕐', label: 'Jam Operasional', value: 'Senin–Sabtu: 09.00–20.00\nMinggu: 10.00–17.00', link: null },
              ].map((item, i) => (
                <div key={i} id={`contact-info-${i}`} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white text-sm hover:text-amber-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white text-sm whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div>
                <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-4">Media Sosial</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'Instagram', icon: '📸', href: 'https://instagram.com/rasstudio' },
                    { name: 'WhatsApp', icon: '💬', href: 'https://wa.me/6281234567890' },
                    { name: 'YouTube', icon: '▶️', href: 'https://youtube.com/@rasstudio' },
                    { name: 'TikTok', icon: '🎵', href: 'https://tiktok.com/@rasstudio' },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      id={`contact-social-${s.name.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.name}
                      className="w-11 h-11 rounded-xl bg-gray-900 border border-white/10 flex items-center justify-center text-lg hover:bg-amber-400/10 hover:border-amber-400/30 transition-all duration-300 hover:scale-110"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  id="success-message"
                  className="bg-gray-900/60 border border-green-500/30 rounded-2xl p-12 text-center"
                >
                  <div className="text-6xl mb-5">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Terima kasih telah menghubungi RAS Studio. Tim kami akan segera merespon pesan Anda dalam waktu 1×24 jam.
                  </p>
                  <button
                    id="send-another-btn"
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-gray-900/40 border border-white/5 rounded-2xl p-8 md:p-10 space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Kirim Pesan
                  </h2>
                  <p className="text-gray-500 text-sm mb-6">
                    Isi form di bawah ini dan kami akan segera menghubungi Anda.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-gray-400 text-xs mb-2 uppercase tracking-wide">
                        Nama Lengkap <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Nama Anda"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-gray-400 text-xs mb-2 uppercase tracking-wide">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-gray-400 text-xs mb-2 uppercase tracking-wide">
                        No. WhatsApp / Telepon
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+62 812-xxxx-xxxx"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass('phone')}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="contact-service" className="block text-gray-400 text-xs mb-2 uppercase tracking-wide">
                        Layanan yang Diminati
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputClass('service')} cursor-pointer`}
                      >
                        <option value="" className="bg-gray-900">Pilih layanan...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-gray-900">{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-gray-400 text-xs mb-2 uppercase tracking-wide">
                      Pesan <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Ceritakan kebutuhan foto Anda, tanggal yang diinginkan, lokasi, dll..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold rounded-xl hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      '📨 Kirim Pesan'
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center">
                    Atau hubungi kami langsung via{' '}
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section id="map-section" className="py-12 px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/40 border border-white/5 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-5xl mb-3">🗺️</div>
              <p className="text-sm">Jl. Sudirman No. 42, Bandung, Jawa Barat 40111</p>
              <a
                href="https://maps.google.com/?q=Jl+Sudirman+42+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                id="map-google-link"
                className="text-amber-400 text-xs hover:underline mt-2 inline-block"
              >
                Buka di Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
