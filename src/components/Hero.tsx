"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = ["/image5.png", "/image2.png", "/image3.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Dressage horse and rider ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-charcoal)]/60 via-[var(--primary-charcoal)]/80 to-[var(--primary-dark)] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-heading)] font-bold">
            Master Your <span className="gold-shimmer">Dressage Journey</span>
          </h1>

          <div className="w-24 h-1 bg-gold mx-auto" />

          <p
            className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
            style={{ paddingTop: "10px" }}
          >
            Track scores. Analyze progress. Achieve excellence.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ paddingTop: "40px" }}
          >
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center text-lg font-semibold text-[var(--primary-charcoal)] bg-[var(--primary-gold)] rounded-lg hover:bg-[var(--primary-gold)]/90 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary-gold)]/20"
              style={{ padding: "16px 40px" }}
            >
              Try Calculator
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              href="#courses"
              className="inline-flex items-center justify-center text-lg font-semibold text-[var(--text-primary)] border-2 border-[var(--border-strong)] rounded-lg hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-all"
              style={{ padding: "14px 40px" }}
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
