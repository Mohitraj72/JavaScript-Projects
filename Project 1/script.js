const endDate = "12 April 2024 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = end - now / 1000;
    console.log(diff);
    console.log(Math.floor(diff / 3600 /24));
    // Conver into Days 

}

clock()