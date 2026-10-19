export default function Card({ children, className = '', id = '' }) {
  return (
    <div
      id={id}
      className={`bg-gray-900/60 border border-white/5 rounded-2xl overflow-hidden card-hover backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
