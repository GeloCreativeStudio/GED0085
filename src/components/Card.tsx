interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-[#1C5310]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
