import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="About Us"
        description="Learn about our mission, vision, and the team behind our gender equality initiatives."
        backgroundImage="/about-header.jpg"
      />

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#1C5310] mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To promote and advance gender equality through education, advocacy, and community engagement. 
                We work tirelessly to create a world where everyone has equal opportunities regardless of their gender.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#1C5310] mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where gender equality is the norm, not the exception. Where every individual can reach their 
                full potential without facing gender-based discrimination or barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#1C5310]/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Equality',
                description: 'We believe in equal rights and opportunities for all individuals, regardless of gender.',
                icon: '🤝',
              },
              {
                title: 'Education',
                description: 'We are committed to spreading awareness and knowledge about gender equality.',
                icon: '📚',
              },
              {
                title: 'Empowerment',
                description: 'We work to empower individuals to stand up for their rights and the rights of others.',
                icon: '💪',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#1C5310] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">ADVOCACY TEAM</h2>
          
          {/* Leadership */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1C5310] mb-8 text-center">Leadership</h3>
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/team/placeholder.jpg"
                    alt="Migs Balatbat"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1C5310] mb-1">Migs Balatbat</h3>
                <p className="text-gray-600">Advocacy Leader</p>
              </div>
            </div>
          </div>

          {/* Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1C5310] mb-8 text-center">Development</h3>
            <div className="max-w-md mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/manalo.jpg"
                    alt="Angelo Manalo"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#1C5310] mb-1">Angelo Manalo</h3>
                <p className="text-gray-600">Advocacy Web Developer</p>
              </div>
            </div>
          </div>

          {/* Associates */}
          <div>
            <h3 className="text-2xl font-bold text-[#1C5310] mb-8 text-center">Associates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Andrei Jayniel Cortado',
                  role: 'Advocacy Associate',
                },
                {
                  name: 'Christian Kevin Zarceno',
                  role: 'Advocacy Associate',
                },
                {
                  name: 'Jericho Santos',
                  role: 'Advocacy Associate',
                },
                {
                  name: 'Joel Baquiran Jr.',
                  role: 'Advocacy Associate',
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src="/team/placeholder.jpg"
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C5310] mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-[#1C5310] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Be part of the change. Join our community of advocates and help create lasting impact.
          </p>
          <a
            href="/get-involved"
            className="inline-block bg-white text-[#1C5310] px-8 py-3 rounded-full font-semibold hover:bg-[#2E7D32] hover:text-white transition-colors"
          >
            Get Involved Today
          </a>
        </div>
      </section>
    </div>
  );
}
