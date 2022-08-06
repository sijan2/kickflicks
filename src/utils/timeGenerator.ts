//generating array of hours upto 24
const hours: any[] = [];
for (let i = 0; i < 24; i++) {
  hours.push(i);
}

//generating array of minutes upto 60 with every 15 minutes
//also write 00 for 0
const minutes: any[] = [];
for (let i = 0; i < 60; i += 15) {
  minutes.push(i);
}

//generating random time from above arrays
//converting the arrays into 12 hour format
const timeGenerator = () => {
  const hour = hours[Math.floor(Math.random() * hours.length)];
  const minute = minutes[Math.floor(Math.random() * minutes.length)];
  const ampm = Math.floor(Math.random() * 2) === 0 ? 'AM' : 'PM';
  const hour12 = hour > 12 ? hour - 12 : hour;
  let myMinute = minute;
  let formattedMinute = ('0' + myMinute).slice(-2);
  return `${hour12}:${formattedMinute} ${ampm}`;
};
export default timeGenerator;
