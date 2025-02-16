const calculateDurationWeeks = (startedAt: string, endedAt: string) => {
  const startDate: Date = new Date(startedAt);
  const endDate: Date = new Date(endedAt);

  const durationMs: number = endDate.getTime() - startDate.getTime();
  const durationDays = durationMs / (1000 * 60 * 60 * 24);
  const durationWeeks = Math.round(durationDays / 7);

  return durationWeeks;
};

export default calculateDurationWeeks;
