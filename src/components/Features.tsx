export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Instant Scoring',
      description: 'Calculate your test scores instantly with our intuitive interface'
    },
    {
      icon: '🎯',
      title: 'Progress Tracking',
      description: 'Monitor improvement over time with detailed analytics'
    },
    {
      icon: '🏆',
      title: 'Achieve Goals',
      description: 'Set targets and reach new levels in your dressage journey'
    }
  ];

  return (
    <section id="features" className="py-24 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Why Total Dressage Focus?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-elevated border border-border-subtle rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gold">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}