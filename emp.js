const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HOURS = 160;
const MAX_DAYS = 20;

function getWorkHours(attendance) {
    switch (attendance) {
        case 0: 
            return 0;
        case 1: 
            return PART_TIME_HOURS;
        case 2: 
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}


function calculateMonthlyWage() {
    let totalMonthlyWage = 0;
    let totalHoursWorked = 0;

    for (let daysWorked = 0; daysWorked < MAX_DAYS && totalHoursWorked < MAX_HOURS; daysWorked++) {
        const attendance = Math.floor(Math.random() * 3); 
        const hoursWorked = getWorkHours(attendance);
        totalHoursWorked += hoursWorked;
        const dailyWage = hoursWorked * WAGE_PER_HOUR;
        totalMonthlyWage += dailyWage;
    }

    return totalMonthlyWage;
}

const monthlyWage = calculateMonthlyWage();
console.log(`Monthly Wage: $${monthlyWage}`);

