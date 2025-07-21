import Link from 'next/link';

export default function ComingSoon() {
  const upcoming = [
    {
      title: 'Online Training Courses',
      description: 'Learn from top international trainers with comprehensive video courses',
      image: '/course-preview.jpg', // Placeholder
      cta: 'Learn More',
      link: '#courses'
    },
    {
      title: 'Mobile App',
      description: 'Take your training anywhere with our upcoming iOS and Android apps',
      image: '/app-preview.jpg', // Placeholder
      cta: 'Join Waitlist',
      link: '#waitlist'
    }
  ];

  return (
    <section id="courses" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Coming Soon
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {upcoming.map((item, index) => (
            <div
              key={index}
              className="bg-surface-dark border border-border-subtle rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image placeholder */}
              <div className="h-64 bg-gradient-to-br from-surface-elevated to-surface-dark flex items-center justify-center">
                <div className="text-6xl opacity-20">🐴</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-gold">
                  {item.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-gold font-semibold hover:text-gold/80 transition-colors"
                >
                  {item.cta}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}