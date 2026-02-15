import React from 'react';

export default function ComingSoonBadge() {
  return (
    <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 dark:bg-indigo-900">
      <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400">
        <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-600 dark:bg-indigo-400" />
      </span>
      <span className="ml-3 text-sm font-semibold text-indigo-900 dark:text-indigo-200">
        Coming Soon
      </span>
    </div>
  );
}
