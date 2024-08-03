export const formatDateDifference = (date: Date): string => {
  const now = new Date();
  const differenceInMilliseconds = now.getTime() - date.getTime();

  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInWeeks = Math.floor(differenceInDays / 7);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  if (differenceInYears > 0) {
    return `${differenceInYears} year${differenceInYears > 1 ? "s" : ""} ago`;
  } else if (differenceInMonths > 0) {
    return `${differenceInMonths} month${
      differenceInMonths > 1 ? "s" : ""
    } ago`;
  } else if (differenceInWeeks > 0) {
    return `${differenceInWeeks} week${differenceInWeeks > 1 ? "s" : ""} ago`;
  } else if (differenceInDays > 0) {
    return `${differenceInDays} day${differenceInDays > 1 ? "s" : ""} ago`;
  } else if (differenceInHours > 0) {
    return `${differenceInHours} hour${differenceInHours > 1 ? "s" : ""} ago`;
  } else if (differenceInMinutes > 0) {
    return `${differenceInMinutes} minute${
      differenceInMinutes > 1 ? "s" : ""
    } ago`;
  } else {
    return `${differenceInSeconds} second${
      differenceInSeconds > 1 ? "s" : ""
    } ago`;
  }
};
