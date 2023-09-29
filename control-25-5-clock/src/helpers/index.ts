export const calcTime = (mins: number, secs: number) => {
  if (mins === 0 && secs === 0) {
    return {mins: 0, secs: 0};
  }

  if (mins !== 0 && secs === 0) {
    return {mins: mins - 1, secs: 59};
  }

  return {mins, secs: secs - 1};
};
