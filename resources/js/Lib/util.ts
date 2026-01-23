import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toLocalDate({
  ISO_date,
  locales = "id-ID",
  options
}: {
  ISO_date: string
  locales?: Intl.LocalesArgument
  options?: Intl.DateTimeFormatOptions
}) {
  return (new Date(ISO_date)).toLocaleDateString(locales, options || { day: "2-digit", month: "short", year: "numeric" })
}
