import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function IssuesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Key Issues"
        description="Explore the critical challenges we're addressing in the fight for gender equality."
        backgroundImage="/issues-header.jpg"
      />

      {/* Issues Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Workplace Discrimination',
                description: 'Addressing gender-based discrimination in hiring, promotion, and pay equity.',
                image: '/issues/workplace.jpg',
                stats: '78% of women report experiencing workplace discrimination',
              },
              {
                title: 'Education Access',
                description: 'Ensuring equal access to quality education and STEM opportunities.',
                image: '/issues/education.jpg',
                stats: '130 million girls worldwide are out of school',
              },
              {
                title: 'Gender-Based Violence',
                description: 'Combating violence and harassment against individuals based on gender.',
                image: '/issues/violence.jpg',
                stats: '1 in 3 women experience gender-based violence',
              },
              {
                title: 'Healthcare Inequality',
                description: 'Fighting for equal access to healthcare services and medical research.',
                image: '/issues/healthcare.jpg',
                stats: 'Women are 50% more likely to be misdiagnosed in certain conditions',
              },
            ].map((issue, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1C5310] mb-2">{issue.title}</h3>
                  <p className="text-gray-600 mb-4">{issue.description}</p>
                  <div className="bg-[#1C5310]/5 p-4 rounded-lg">
                    <p className="text-[#1C5310] font-semibold">{issue.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-[#1C5310] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">The Impact of Gender Inequality</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '$160T', label: 'Lost in Global Wealth Due to Gender Pay Gap' },
              { number: '2.7B', label: 'Women Legally Restricted from Same Jobs as Men' },
              { number: '12M', label: 'Girls Married Before Age 18 Annually' },
              { number: '40%', label: 'of Countries Lack Equal Pay Laws' },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1C5310] mb-6">Take Action Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in addressing these critical issues and creating positive change in our communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved"
              className="bg-[#1C5310] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2E7D32] transition-colors"
            >
              Get Involved
            </a>
            <a
              href="/resources"
              className="bg-white text-[#1C5310] px-8 py-3 rounded-full font-semibold border-2 border-[#1C5310] hover:bg-[#1C5310] hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
