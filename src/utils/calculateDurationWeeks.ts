const calculateDurationWeeks = (startedAt: string, endedAt: string) => {
  const startDate: Date = new Date(startedAt);
  const endDate: Date = new Date(endedAt);

  const durationMs: number = endDate.getTime() - startDate.getTime();
  const durationDays = durationMs / (1000 * 60 * 60 * 24);
  const durationWeeks = Math.round(durationDays / 7);

  if (durationWeeks > 4) {
    const months = Math.floor(durationWeeks / 4);
    const weeks = durationWeeks % 4;

    return `${months}개월${weeks ? ` ${weeks}주` : ''}`;
  }

  return `${durationWeeks}주`;
};

export default calculateDurationWeeks;
