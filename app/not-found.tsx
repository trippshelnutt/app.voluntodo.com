import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 dark:bg-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Page not found
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
