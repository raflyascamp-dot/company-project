export default function SectionTitle({ label, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {label && (
        <span className="inline-block text-amber-400 text-xs font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-amber-400/10 rounded-full border border-amber-400/20">
          {label}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${
          light ? 'text-white' : 'text-white'
        }`}
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
