import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format an ISO yyyy-MM date into a localized "Mon YYYY" string.
 */
export function formatMonthYear(iso: string, locale: string): string {
  const [year, month] = iso.split("-").map(Number)
  if (!year || !month) return iso
  const date = new Date(Date.UTC(year, month - 1, 1))
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date)
}
