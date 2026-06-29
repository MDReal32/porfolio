const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatYearMonth(value: string): string {
  // expects "YYYY-MM"
  const [year, month] = value.split("-");
  const index = Number(month) - 1;

  if (!year || isNaN(index) || !MONTHS[index]) {
    return value; // fallback, don’t break resume
  }

  return `${MONTHS[index]} ${year}`;
}

export function formatRange(start: string, end: string): string {
  const from = formatYearMonth(start);
  const to = end === "Present" ? "Present" : formatYearMonth(end);
  return `${from} – ${to}`;
}
