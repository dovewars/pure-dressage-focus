import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-gold mb-4">
              Total Dressage Focus
            </h3>
            <p className="text-text-secondary mb-4">
              Empowering riders to achieve excellence through intelligent scoring and progress tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/calculator" className="text-text-secondary hover:text-gold transition-colors">
                  Score Calculator
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-text-secondary hover:text-gold transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-text-secondary hover:text-gold transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-gold transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle text-center">
          <p className="text-text-muted">
            © {new Date().getFullYear()} Total Dressage Focus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}