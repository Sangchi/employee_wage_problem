const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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

function calculateDailyWage() {
    const attendance = Math.floor(Math.random() * 3); 
    const hoursWorked = getWorkHours(attendance);
    const dailyWage = hoursWorked * WAGE_PER_HOUR;
    return dailyWage;
}

const dailyWage = calculateDailyWage();
console.log(`Daily Wage: $${dailyWage}`);
