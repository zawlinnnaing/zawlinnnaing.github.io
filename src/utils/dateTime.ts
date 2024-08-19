import moment from "moment";

export function formatDuration(startTime: Date, endTime?: Date): string {
  const startMoment = moment(startTime).startOf("month");
  const endMoment = endTime
    ? moment(endTime).endOf("month")
    : moment().endOf("month");

  const different = endMoment.diff(startMoment, "months");
  return formatToYearsAndMonths(different + 1);
}

export function formatToYearsAndMonths(durationInMonths: number): string {
  const numberOfYears = Math.floor(durationInMonths / 12);
  const remainingMonths = durationInMonths % 12;
  const displayMonth = `${remainingMonths} ${
    remainingMonths === 1 ? "mo" : "mos"
  }`;
  const displayYear = `${numberOfYears} ${
    numberOfYears === 1 ? "year" : "years"
  }`;
  if (numberOfYears >= 1) {
    if (remainingMonths === 0) {
      return displayYear;
    }
    return `${displayYear}, ${displayMonth}`;
  }

  return `${displayMonth}`;
}
