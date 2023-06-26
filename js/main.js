var clock = new Date();

var hour = clock.getHours();
var hr = document.getElementById("hour");
hr.innerHTML = hour;


var minute = clock.getMinutes();
var min = document.getElementById("minute");
min.innerHTML = minute;


var second = clock.getSeconds();
var sec = document.getElementById("second");
sec.innerHTML = second;



var date = clock.getDate();
var dateNow = document.getElementById("date");
dateNow.innerHTML = date;

var day = clock.getDay();
var dayNow = document.getElementById("day");

var month = clock.getMonth();
var monthNow = document.getElementById("month");
monthNow.innerHTML = month + 1;

var year = clock.getFullYear();
var yearNow = document.getElementById("year");
yearNow.innerHTML = year;

var day1 = document.getElementById("sunday");
var day2 = document.getElementById("monday");
var day3 = document.getElementById("tuesday");
var day4 = document.getElementById("wednesday");
var day5 = document.getElementById("thursday");
var day6 = document.getElementById("friday");
var day7 = document.getElementById("saturday");



setInterval(function () {

    second++;
    sec.innerHTML = second;
    min.innerHTML = minute;
    hr.innerHTML = hour;
    if (second < 9) {
        sec.innerHTML = "0" + second;
    }
    if (second > 59) {
        second = 0;
        sec.innerHTML = second;
        minute++;
        min.innerHTML = minute;
    }
    if (minute < 9) {
        min.innerHTML = "0" + minute;
    }
    if (minute > 59) {
        minute = 0;
        min.innerHTML = minute;
        hour++;
        hr.innerHTML = hour;
    }
    if (hour < 9) {
        hr.innerHTML = "0" + hour;
    }
    if (hour > 23) {
        hour = 0;
        hr.innerHTML = hour;
        date++;
        dateNow.innerHTML = date;
    }
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        if (date > 31) {
            month++;
            monthNow.innerHTML = month + 1;
            date = 1;
            dateNow.innerHTML = date;
        }
        else if (month === 1 || month === 3 || month === 5 || month === 8 || month === 11) {
            if (date > 30) {
                month++;
                monthNow.innerHTML = month + 1;
                date = 1;
                dateNow.innerHTML = date;
            }
        }
        else if (year % 4 == 0) {
            if (date > 29) {
                month++;
                monthNow.innerHTML = month + 1;
                date = 1;
                dateNow.innerHTML = date;
            }
        }
        else if (year % 4 != 0) {
            if (date > 28) {
                month++;
                monthNow.innerHTML = month + 1;
                date = 1;
                dateNow.innerHTML = date;
            }
        }
    }

    switch (day) {
        case 0:
            day1.style.color = "red";
            break;
        case 1:
            day2.style.color = "red";
            break;
        case 2:
            day3.style.color = "red";
            break;
        case 3:
            day4.style.color = "red";
            break;
        case 4:
            day5.style.color = "red";
            break;
        case 5:
            day6.style.color = "red";
            break;
        case 6:
            day7.style.color = "red";
            break;

    }



}, 1000, second)
