let readlineSync = require('readline-sync');
let logic = require("./lab-two");

logic.makeCalendar(2021);

var year = readlineSync.question('What is the year? ');

var month = readlineSync.question('What is the month? ');

var day = readlineSync.question('What is the day? ');

logic.getDayOfTheWeekForUserDate(year, month, day);