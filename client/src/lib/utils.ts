import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateForDisplay(myDate: string) {
  const yourDate = new Date(myDate);
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedTime = formatter.format(yourDate);
  return `${yourDate.toLocaleDateString()} ${formattedTime}`;
}

export function formateDateForInput(myDate: string) {
  const yourDate = new Date(myDate);
  const isoString = yourDate.toISOString();
  // Split at the "T" character to get the date part
  const formattedDate = isoString.split("T")[0];
  return formattedDate;
}
