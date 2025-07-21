import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-sm z-50"
      style={{ paddingLeft: "60px", paddingRight: "60px" }}
    >
      <div className="flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span
            className="text-4xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <span className="text-[var(--text-primary)]">Pure</span>{" "}
            <span className="gold-shimmer">Dressage Focus</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/calculator"
            className="text-[var(--text-secondary)] hover:text-[var(--primary-gold)] transition-colors font-medium text-lg"
          >
            Calculator
          </Link>
          <Link
            href="#courses"
            className="text-[var(--text-secondary)] hover:text-[var(--primary-gold)] transition-colors font-medium text-lg"
          >
            Courses
          </Link>
          <Link
            href="#about"
            className="text-[var(--text-secondary)] hover:text-[var(--primary-gold)] transition-colors font-medium text-lg"
          >
            About
          </Link>
          <Link
            href="/calculator"
            className="inline-block bg-[var(--primary-gold)] text-[var(--primary-charcoal)] rounded-lg font-semibold hover:bg-[var(--primary-gold)]/90 transition-all hover:shadow-lg hover:shadow-[var(--primary-gold)]/20"
            style={{ padding: "12px 32px" }}
          >
            Try Calculator
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-[var(--text-primary)]">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
