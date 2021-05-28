// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
// It is much easier to understand with an example:
//
// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//
// Note that spaces are important.
//
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
//
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

const formatDuration = (input) => {

  let years;
  let days;
  let hours;
  let mins;
  let seconds;

// Years
  if (input >= 31536000 && input != 0) {
    years = Math.floor(input / 31536000);
    days = Math.floor((input - (years * 31536000)) / 365);
    hours = Math.floor((input - (years * 31536000) - (days * 365)) / 24);
    mins = Math.floor((input - (years * 31536000) - (days * 365) - (hours * 24)) / 60);
    seconds = Math.floor((input - (years * 31536000) - (days * 365) - (hours * 24)));
    console.log(`${ years } hour${ years == 1 ? "" : "s" }, ${ days } day${ days == 1 ? "" : "s" }, ${ hours } hour${ hours == 1 ? "" : "s" }, ${ mins } minute${ mins == 1 ? "" : "s" } and ${ seconds } second${ seconds == 1 ? "" : "s"  }.`);
  }

// Days
  if (input >= 86400 && input < 31536000 && input != 0) {
    days = Math.floor(input / 365);
    hours = Math.floor((input - (days * 365)) / 24);
    mins = Math.floor((input - (days * 365) - (hours * 24)) / 60);
    seconds = Math.floor((input - (days * 365) - (hours * 24)));
    console.log(`${ days } day${ days == 1 ? "" : "s" }, ${ hours } hour${ hours == 1 ? "" : "s" }, ${ mins } minute${ mins == 1 ? "" : "s" } and ${ seconds } second${ seconds == 1 ? "" : "s"  }.`);
  }

// Hours
  if (input >= 3600 && input < 86400 && input != 0) {
    hours = Math.floor(input / 3600);
    mins = Math.floor((input - (hours * 3600)) / 60);
    seconds = Math.floor((input - (hours * 3600) - (mins * 60)));
    console.log(`${ hours } hour${ hours == 1 ? "" : "s" }, ${ mins } minute${ mins == 1 ? "" : "s" } and ${ seconds } second${ seconds == 1 ? "" : "s"  }.`)
  }

// Minutes
  if (input >= 60 && input < 3600 && input != 0) {
    mins = Math.floor(input / 60);
    seconds = Math.floor((input - (mins * 60)));
    console.log(`${ mins } minute${ mins == 1 ? "" : "s" } and ${ seconds } second${ seconds == 1 ? "" : "s"  }.`);
  }

// Seconds
  if (input < 60 && input != 0) {
    seconds = input;
    console.log(`${ seconds } second${ seconds == 1 ? "" : "s"  }.`)
  }

}

console.log(formatDuration(86477))
