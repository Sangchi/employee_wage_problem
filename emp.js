const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function calculateDailyWage() {
    const attendance = Math.floor(Math.random() * 3); 

    let hoursWorked;

    switch (attendance) {
        case 0: 
            hoursWorked = 0;
            break;
        case 1: 
            hoursWorked = PART_TIME_HOURS;
            break;
        case 2: 
            hoursWorked = FULL_TIME_HOURS;
            break;
    }

    const dailyWage = hoursWorked * WAGE_PER_HOUR;
    return dailyWage;
}

const daily = calculateDailyWage();
console.log(`Daily Wage: $${daily}`);
