// Show crrent date in the work experience card
let dateObj = new Date();
let month = dateObj.getMonth(); //months from 1-12
let year = dateObj.getFullYear();

const newdate = year + "-" + month;
document.getElementById("today").innerHTML = newdate;

// Show current year in the footer
// document.getElementById("year").innerHTML = new Date().getFullYear();