import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export default function PageHeader({ title, description, backgroundImage = '/hero-bg.jpg' }: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-r from-[#1C5310] to-[#2E7D32] text-white px-4">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
