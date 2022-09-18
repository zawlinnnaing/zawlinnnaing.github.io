import moment from "moment";

export function formatDuration(startTime: string, endTime?: string): string {
  const startMoment = moment(startTime).startOf("month");
  const endMoment = endTime
    ? moment(endTime).endOf("month")
    : moment().endOf("month");

  const different = endMoment.diff(startMoment, "months");
  return formatToYearsAndMonths(different + 1);
}

export function formatToYearsAndMonths(durationInMonths: number): string {
  const numberOfYears = durationInMonths / 12;
  const remainingMonths = durationInMonths % 12;
  if (numberOfYears >= 1) {
    const roundedYears = Math.floor(numberOfYears);
    return `${roundedYears} ${
      roundedYears === 1 ? "year" : "years"
    }, ${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`;
  }

  return `${remainingMonths} ${remainingMonths === 1 ? "mo" : "mos"}`;
}
