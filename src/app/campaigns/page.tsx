import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function CampaignsPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Educational Campaigns"
        description="Explore our initiatives that are making a difference in gender equality education."
        backgroundImage="/campaigns-header.jpg"
      />

      {/* Current Campaigns */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">Current Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Break the Glass Ceiling',
                description: 'Empowering women in leadership positions across industries.',
                image: '/campaigns/leadership.jpg',
                date: 'January - March 2025',
              },
              {
                title: 'STEM for All',
                description: 'Promoting equal opportunities in science and technology fields.',
                image: '/campaigns/stem.jpg',
                date: 'Ongoing',
              },
              {
                title: 'Equal Pay Initiative',
                description: 'Advocating for wage equality and transparency in the workplace.',
                image: '/campaigns/equal-pay.jpg',
                date: 'February - June 2025',
              },
              {
                title: 'Safe Spaces Campaign',
                description: 'Creating inclusive environments free from harassment and discrimination.',
                image: '/campaigns/safe-spaces.jpg',
                date: 'March - August 2025',
              },
            ].map((campaign, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#2E7D32] font-semibold mb-2">{campaign.date}</div>
                  <h3 className="text-2xl font-bold text-[#1C5310] mb-2">{campaign.title}</h3>
                  <p className="text-gray-600">{campaign.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-[#1C5310]/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'People Reached' },
              { number: '100+', label: 'Educational Events' },
              { number: '25+', label: 'Partner Organizations' },
              { number: '90%', label: 'Positive Feedback' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl font-bold text-[#1C5310] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Gender Equality Workshop',
                date: 'March 15, 2025',
                location: 'FEU Manila Campus',
                type: 'Workshop',
              },
              {
                title: 'Women in Tech Summit',
                date: 'April 5, 2025',
                location: 'Virtual Event',
                type: 'Conference',
              },
              {
                title: 'Leadership Symposium',
                date: 'May 20, 2025',
                location: 'FEU Tech Building',
                type: 'Symposium',
              },
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-sm text-[#2E7D32] font-semibold mb-2">{event.type}</div>
                <h3 className="text-xl font-bold text-[#1C5310] mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="bg-[#1C5310] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Campaigns</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Be part of the change. Join our educational campaigns and help create a more equitable future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/get-involved"
              className="bg-white text-[#1C5310] px-8 py-3 rounded-full font-semibold hover:bg-[#2E7D32] hover:text-white transition-colors"
            >
              Get Involved
            </a>
            <a
              href="/resources"
              className="bg-[#2E7D32] text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1C5310] transition-colors"
            >
              View Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
