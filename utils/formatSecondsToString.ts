export const formatSecondsToString = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = ("0" + Math.floor(time % 60)).slice(-2);

  return `${minutes}:${seconds}`;
};
