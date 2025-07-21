"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const media = [
    { image: "/image5.png", video: "/image5.mp4" },
    { image: "/image2.png", video: null },
    { image: "/image3.png", video: "/image3.mp4" },
  ];
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 5000); // Change media every 5 seconds

    return () => clearInterval(interval);
  }, [media.length, mounted]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {media.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentMediaIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 scale-175 sm:scale-100">
              {item.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain sm:object-cover"
                  style={{
                    objectPosition: "center 30%",
                  }}
                >
                  <source src={item.video} type="video/mp4" />
                  {/* Fallback to image if video fails */}
                  <Image
                    src={item.image}
                    alt={`Dressage horse and rider ${index + 1}`}
                    fill
                    className="object-contain sm:object-cover"
                    style={{
                      objectPosition: "center 30%",
                    }}
                  />
                </video>
              ) : (
                <Image
                  src={item.image}
                  alt={`Dressage horse and rider ${index + 1}`}
                  fill
                  className="object-contain sm:object-cover"
                  style={{
                    objectPosition: "center 30%",
                  }}
                  priority={index === 0}
                />
              )}
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-charcoal)]/40 via-[var(--primary-charcoal)]/70 to-[var(--primary-dark)] sm:from-[var(--primary-charcoal)]/60 sm:via-[var(--primary-charcoal)]/80 z-10" />
      </div>

      {/* Content */}
      <div className="absolute top-[200px] left-0 right-0 sm:relative sm:top-auto z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up space-y-0 sm:space-y-[40px]">
          <div className="space-y-6 sm:space-y-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-[family-name:var(--font-heading)] font-bold">
              <span className="block sm:inline">Master Your</span>{" "}
              <span className="gold-shimmer block sm:inline">
                Dressage Journey
              </span>
            </h1>

            <div className="hidden sm:flex justify-center">
              <div className="w-16 h-1 bg-gold" />
            </div>

            <p
              className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
              style={{ paddingTop: "10px" }}
            >
              Track scores. Analyze progress. Achieve excellence.
            </p>
          </div>

          {/* Desktop buttons - inside content container */}
          <div className="hidden sm:block" style={{ paddingTop: "40px" }}>
            <div className="flex flex-row gap-4 justify-center items-center">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center text-base sm:text-lg font-semibold text-[var(--primary-charcoal)] bg-[var(--primary-gold)] rounded-lg hover:bg-[var(--primary-gold)]/90 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary-gold)]/20"
                style={{ padding: "14px 32px" }}
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
                className="inline-flex items-center justify-center text-base sm:text-lg font-semibold text-[var(--text-primary)] border-2 border-[var(--border-strong)] rounded-lg hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-all"
                style={{ padding: "12px 32px" }}
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile buttons - absolutely positioned */}
      <div className="absolute top-[400px] left-0 right-0 sm:hidden z-20 px-4">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Link
            href="/calculator"
            className="inline-flex items-center justify-center text-base font-semibold text-[var(--primary-charcoal)] bg-[var(--primary-gold)] rounded-lg hover:bg-[var(--primary-gold)]/90 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--primary-gold)]/20"
            style={{ padding: "14px 32px" }}
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
            className="inline-flex items-center justify-center text-base font-semibold text-[var(--text-primary)] border-2 border-[var(--border-strong)] rounded-lg hover:border-[var(--primary-gold)] hover:text-[var(--primary-gold)] transition-all"
            style={{ padding: "12px 32px" }}
          >
            View Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
