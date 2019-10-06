export const secondsToString = (seconds) => {
  const _date = new Date(seconds);
  return dateToString(_date)
};

export const dateToString = (_date) => {
  return `${_date.getDate()}/${_date.getMonth()+1}/${_date.getFullYear()}`
};