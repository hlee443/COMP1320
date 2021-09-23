monthCodes = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", 
"JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
daysOfTheWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// This function returns the day of the week
function getDayOfTheWeek (year, month, day) {
    
	// Math to determine what day of the week a given date is
    var lastTwo = (year.toString()).slice(-2);
    var twelves = parseInt(Math.floor(lastTwo / 12))
    var firstR = parseInt(lastTwo) % 12;
    var secondR = Math.floor(firstR / 4);
    var monthDay = parseInt(day);
    
    var monthNumber = monthNames.indexOf(month.toUpperCase());
    var code = monthCodes[monthNumber];
	
	// Math with change if it is a leap year
    var result = isLeapYear(year);
    if (result == false) {
        if (monthNumber == 0 || monthNumber == 1) {
            code -= 1;
        }
        if (1600 <= year && year <= 1699) {
            code += 6;
        }
        else if (1700 <= year && year <= 1799) {
            code += 4;
        } 
        else if (1800 <= year && year <= 1899) {
            code += 2;
        }
        else if (2000 <= year && year <= 2099) {
            code += 6;
        }
        else if (2100 <= year && year <= 2199) {
            code += 4;
        }
    }

    var sum = (twelves + firstR + secondR + monthDay + code) % 7;
    var answer = daysOfTheWeek[sum];

    return answer;
}

// forumula for leap year function found here: https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function makeCalendar(year) {
    monthMore = [1, 3, 5, 7, 8, 10, 12]
    monthLess = [4, 6, 9, 11]
    monthFeb = [2]
    for (let m = 1; m <= 12; m++) {
        if (monthMore.includes(m) == true) {
            var days = 31;
        }
        else if (monthLess.includes(m) == true) {
            var days = 30;
        }
        else if (monthFeb.includes(m) == true) {
            var days = 28;
        }
        for (let d = 1; d <= days; d++) {
            day = getDayOfTheWeek(year, monthNames[m - 1], d);
            console.log(m + "-" + d + "-" + year, "is a", day);
        }
    }
}

function getDayOfTheWeekForUserDate(year, month, date) {
    console.log(getDayOfTheWeek(year, month, date));
}

module.exports = { getDayOfTheWeekForUserDate, makeCalendar };