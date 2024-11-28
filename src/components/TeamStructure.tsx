'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
  priority?: boolean;
}

const teamData: TeamMember[] = [
  {
    name: 'Migs Balatbat',
    role: 'Advocacy Leader',
    imageUrl: '/images/Balatbat.jpg',
    priority: true
  },
  {
    name: 'Manalo',
    role: 'Web Developer',
    imageUrl: '/images/Manalo.jpg',
    priority: true
  },
  {
    name: 'Andrei Jayniel Cortado',
    role: 'Associate'
  },
  {
    name: 'Christian Kevin Zarceno',
    role: 'Associate',
    imageUrl: '/images/Zarceno.jpg'
  },
  {
    name: 'Jericho Santos',
    role: 'Associate',
    imageUrl: '/images/Santos.jpg'
  },
  {
    name: 'Joel Baquiran Jr.',
    role: 'Associate',
    imageUrl: '/images/Baquiran.jpg'
  }
];

const TeamMemberCard = ({ member, delay = 0 }: { member: TeamMember; delay?: number }) => {
  const initials = member.name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 80px, 96px"
            priority={member.priority}
            className="object-cover rounded-full border-2 border-[#FFB81C] transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full rounded-full border-2 border-[#FFB81C] bg-[#1C5310] flex items-center justify-center text-[#FFB81C] text-xl font-bold transition-transform duration-300 hover:scale-105">
            {initials}
          </div>
        )}
      </div>
      <h4 className="text-[#1C5310] font-semibold text-center text-sm md:text-base">
        {member.name}
      </h4>
      <p className="text-gray-600 text-xs md:text-sm text-center">
        {member.role}
      </p>
    </motion.div>
  );
};

const ConnectingLine = ({ className = '' }: { className?: string }) => (
  <div className={`bg-[#1C5310]/20 ${className}`} />
);

export default function TeamStructure() {
  const leaderAndDev = teamData.slice(0, 2);
  const associates = teamData.slice(2);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Leader and Developer Section */}
        <div className="space-y-16">
          {leaderAndDev.map((member, index) => (
            <div key={member.name} className="relative flex flex-col items-center">
              {index > 0 && <ConnectingLine className="absolute -top-16 left-1/2 w-px h-16 transform -translate-x-1/2" />}
              <TeamMemberCard member={member} delay={index * 0.2} />
            </div>
          ))}
        </div>

        {/* Associates Section */}
        <div className="mt-16 relative">
          <ConnectingLine className="absolute -top-16 left-1/2 w-px h-16 transform -translate-x-1/2" />
          
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-xl font-bold text-[#1C5310] mb-8"
          >
            Advocacy Associates
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {associates.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#1C5310]/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-[#FFB81C]/5 to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
