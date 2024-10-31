let userInput = document.getElementById('date');

// To maximize the date selection to today
userInput.max = new Date().toISOString().slice(0, 10);

// Result in the Html Page
let result = document.getElementById('result');

function calculatAge(){
    let birthDate = new Date(userInput.value);

    // taking the month, date and year into account from the input
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() +1;
    let y1 = birthDate.getFullYear();

    // current date
    let today = new Date();

    // taking the month, date and year into account from today
    let d2 =  today.getDate();
    let m2 = today.getMonth() +1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    // Calculate year difference
    y3 = y2 - y1;

    // Calculate month difference and adjust the year if necessary
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // Borrow one year
        m3 = 12 + m2 - m1;
    }

    // Calculate day difference and adjust the month if necessary
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        if (m3 > 0) {
            m3--; // Borrow one month
        } else {
            m3 = 11;
            y3--;
        }
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old `;
}

function getDayInMontth(year, month){
    return new Date(year,month,0).getDate();
}