export function clsx(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function cn(...inputs: (string | undefined | null | false | { [key: string]: boolean })[]): string {
  return inputs
    .flat()
    .map((input) => {
      if (typeof input === 'string') {
        return input;
      }
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([_, v]) => v)
          .map(([k]) => k)
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
