/* Your Code Here */

let createEmployeeRecord = (array) => {
     return  {
     firstName: array[0],
     familyName: array[1],
     title: array[2],
     payPerHour: array[3],
     timeInEvents: [],
     timeOutEvents: []
    }

};

let createEmployeeRecords = (newArr) => {
    return newArr.map((array) =>  createEmployeeRecord(array));
};

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    
    return this;
};

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return this;
};

function hoursWorkedOnDate(timeStamp) {
    let inTime = this.timeInEvents.find((emp) => {
        return emp.date === timeStamp;
    });
    let outTime = this.timeOutEvents.find((emp) => {
        return emp.date === timeStamp;
    });
    return (outTime.hour - inTime.hour) / 100;
};

function wagesEarnedOnDate(timeStamp){
    let payCheck = hoursWorkedOnDate.call(this, timeStamp) * this.payPerHour;
    return parseFloat(payCheck.toString());
};

function calculatePayroll(arrayOfEmp){
    return arrayOfEmp.reduce((acc, record) => {
        return acc + allWagesFor.call(record);
    }, 0)
};

const findEmployeeByFirstName = (srcArry, firstName) => {
    return srcArry.find((emp) => {
        return emp.firstName === firstName;
    })
};

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}