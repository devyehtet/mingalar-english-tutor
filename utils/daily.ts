export const getDailyIndex = (total: number, date: Date = new Date()): number => {
  if (total <= 0) return 0;
  const localMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNumber = Math.floor(localMidnight.getTime() / 86400000);
  const index = dayNumber % total;
  return index < 0 ? index + total : index;
};
