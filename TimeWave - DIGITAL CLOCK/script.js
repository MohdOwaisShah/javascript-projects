//For Time
let timeContainer = document.querySelector(".clock p");

let showingCurrentTime = () => {
    let currTime = new Date().toLocaleTimeString();
    timeContainer.innerText = currTime;
}

//For Date
let dateContainer = document.querySelector(".date p");

let showingDate = () => {
    let currDate = new Date();
    let date = currDate.getDate();
    let month = currDate.getMonth();
    let year = currDate.getFullYear();

    dateContainer.innerText = `${date}/${month + 1}/${year}`;
}

showingDate();

//calling both function after 1 sec
setInterval(() => {
    showingCurrentTime();
    showingDate();
}, 1000);
