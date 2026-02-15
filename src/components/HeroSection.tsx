import ComingSoonBadge from './ComingSoonBadge';
import { HERO_HEADLINE, HERO_SUBTITLE, CTA_TEXT, CTA_URL } from '@/src/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12 sm:py-20 md:py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />

      <div className="w-full max-w-3xl text-center">
        {/* Badge */}
        <ComingSoonBadge />

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          {HERO_HEADLINE}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
          {HERO_SUBTITLE}
        </p>

        {/* CTA Button */}
        {CTA_URL ? (
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            {CTA_TEXT}
          </a>
        ) : (
          <button
            disabled
            className="mt-8 rounded-lg bg-gray-300 px-8 py-3 font-semibold text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
          >
            {CTA_TEXT}
          </button>
        )}

        {/* Email signup teaser */}
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
          Be the first to know when we launch
        </p>
      </div>
    </section>
  );
}
