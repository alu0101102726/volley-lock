function timeBetweenDates (toDate) {
  let dateEntered = toDate;
  let now = new Date();
  let difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.querySelector("#days").textContent = days;
    document.querySelector("#hours").textContent =hours;
    document.querySelector("#minutes").textContent =minutes;
    document.querySelector("#seconds").textContent =seconds;
  }
}

export {timeBetweenDates}