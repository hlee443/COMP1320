
// Returns the day of the week for a specified date (e.g. October 31, 2019)
const monthCode = {
    jan:"1", feb: "4", mar: "4",
    apr: "0", may: "2", jun: "5",
    jul: "0", aug: "3", sep: "6",
    oct: "1", nov: "4", dec: "6"
}
function getDayOfTheWeek(year, month, day){
    var year = year.toString().substr(-2)
    var check = (year % 12) % 4 + day
    return check;
}

// Returns true (e.g. for 1996, 2000, 2012, etc) or false (e.g. for 1900, 2011, etc.) depending on whether a year is a leap year or not.

/*function isLeapYear(year) {
    return undefined
}
*/

console.log(getDayOfTheWeek(1989,"August",16))