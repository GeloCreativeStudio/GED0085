import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="Resources"
        description="Access educational materials, research, and tools to support gender equality."
        backgroundImage="/resources-header.jpg"
      />

      {/* Resource Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Educational Materials',
                description: 'Lesson plans, worksheets, and guides for educators and students.',
                icon: '📚',
                link: '/resources/education',
              },
              {
                title: 'Research Papers',
                description: 'Academic studies and reports on gender equality issues.',
                icon: '📊',
                link: '/resources/research',
              },
              {
                title: 'Policy Documents',
                description: 'Guidelines, recommendations, and policy frameworks.',
                icon: '📋',
                link: '/resources/policy',
              },
              {
                title: 'Multimedia Resources',
                description: 'Videos, podcasts, and interactive content.',
                icon: '🎥',
                link: '/resources/multimedia',
              },
              {
                title: 'Toolkits',
                description: 'Practical tools and templates for advocacy work.',
                icon: '🛠️',
                link: '/resources/toolkits',
              },
              {
                title: 'Case Studies',
                description: 'Real-world examples and success stories.',
                icon: '📖',
                link: '/resources/cases',
              },
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-[#1C5310] mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a
                  href={category.link}
                  className="text-[#2E7D32] hover:text-[#1C5310] font-semibold transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-[#1C5310]/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Gender Equality in Education Guide',
                type: 'PDF Guide',
                description: 'Comprehensive guide for implementing gender-inclusive practices in educational settings.',
                image: '/resources/education-guide.jpg',
              },
              {
                title: 'Workplace Equality Toolkit',
                type: 'Online Resource',
                description: 'Tools and strategies for promoting gender equality in professional environments.',
                image: '/resources/workplace-toolkit.jpg',
              },
            ].map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="text-sm text-[#2E7D32] font-semibold mb-2">{resource.type}</div>
                  <h3 className="text-xl font-bold text-[#1C5310] mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href="#"
                    className="text-[#2E7D32] hover:text-[#1C5310] font-semibold transition-colors"
                  >
                    Download Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1C5310] text-center mb-12">External Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'UN Women',
                description: 'Resources and research from the United Nations Entity for Gender Equality.',
                link: 'https://www.unwomen.org',
              },
              {
                title: 'WHO Gender Resources',
                description: 'Health-related gender equality resources and statistics.',
                link: 'https://www.who.int/health-topics/gender',
              },
              {
                title: 'World Bank Gender Data',
                description: 'Global data and statistics on gender equality indicators.',
                link: 'https://data.worldbank.org/topic/gender',
              },
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#1C5310] mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2E7D32] hover:text-[#1C5310] font-semibold transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#1C5310] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest resources and updates on gender equality.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
              />
              <button
                type="submit"
                className="bg-[#2E7D32] text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1C5310] transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
