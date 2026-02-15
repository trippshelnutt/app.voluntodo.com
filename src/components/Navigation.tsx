import React from 'react';
import { SITE_TITLE } from '@/src/lib/constants';

export default function Navigation() {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-slate-950">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {SITE_TITLE}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
