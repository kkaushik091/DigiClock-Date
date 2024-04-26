const date = document.getElementsByClassName("date");
const calendar = document.getElementsByClassName("calendar");

date[0].innerHTML = moment().format("MMM Do YY");

setInterval(updateDate, 1000);
function updateDate() {
  calendar[0].innerHTML = moment().format("h:mm:ss a");
}
