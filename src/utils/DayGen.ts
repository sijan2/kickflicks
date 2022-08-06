/**
 * It takes a date object as an argument and returns an object with the day, date, month and year
 * @param {Date} date - Date - The date you want to get the day and date from.
 * @returns An object with the day, date, month, and year.
 */
const DateAndDayGenerator = (date: Date) => {
  const day = date.getDay();
  const month = date.getMonth();
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return {
    day: dayName[day],
    date: date.getDate(),
    month: monthName[month],
    year: date.getFullYear(),
  };
};

export default DateAndDayGenerator;
