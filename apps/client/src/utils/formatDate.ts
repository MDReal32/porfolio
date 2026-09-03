const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatYearMonth = (value: string): string => {
  // expects "YYYY-MM"
  const [year, month] = value.split("-");
  const index = Number(month) - 1;

  if (!year || isNaN(index) || !MONTHS[index]) {
    return value; // fallback, don’t break resume
  }

  return `${MONTHS[index]} ${year}`;
};

export const formatRange = (start: string, end: string): string => {
  const from = formatYearMonth(start);
  const to = end === "Present" ? "Present" : formatYearMonth(end);
  return `${from} – ${to}`;
};

export const formatFullDate = (value: string): string => {
  // expects "YYYY-MM-DD"
  const [year, month, day] = value.split("-");
  const index = Number(month) - 1;

  if (!year || !day || isNaN(index) || !MONTHS[index]) {
    return value;
  }

  return `${Number(day)} ${MONTHS[index]} ${year}`;
};
