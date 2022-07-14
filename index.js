function passedDaysOfThisYear(){
  const startOfJalaliYear = jalali().locale('fa').startOf('year');

  const currentDate = moment();
  const startOfYear = converJalaliToGregorian(startOfJalaliYear);

  // passed days of this year
  const passedDays = currentDate.diff(startOfYear, 'days') + 1;

  return passedDays;
}

function converJalaliToGregorian(date) {
  // convert jalali to gregorian
  const gregorian = jalali.from(date, 'fa').format();

  // convert to momentjs format
  return moment(gregorian);
}


// element definition
const curentTimeElement = document.getElementById('date');
const serialElement = document.getElementById('serial');
const linkElement = document.getElementById('link')

function showCurrentDate(){
  const currentJalaliDate = jalali().locale('fa').format('YYYY/MM/DD hh:mm:ss');
  curentTimeElement.innerHTML = currentJalaliDate; 
}

function showSerialNumber(){
  const currentYearNumber = jalali().locale('fa').format('YYYY')
  const shortNumber = currentYearNumber.slice(2,4);
  const passedDays = passedDaysOfThisYear();
  
  serialElement.innerHTML = shortNumber+'/'+passedDays;
}

showCurrentDate();
showSerialNumber();

setInterval(() => showCurrentDate() ,1000);
setInterval(() => showSerialNumber() ,1000 * 60 * 60 );
