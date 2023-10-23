export const getListDate = (numberDays) => {
  const date = new Date();
  let i = 0;
  const days = new Array(numberDays).fill(0).map(() => {
    date.setDate(date.getDate() + i);
    i = 1;
    const day = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return day;
  });

  return days;
};
