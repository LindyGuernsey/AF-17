let nowDate = new Date();
let dateStr = nowDate.toLocalString('en-US');
window.setInterval(myDateFunction, 1000);
let dateDiv = document.getElementById('date-div-id');
dateDiv.innerHTML = dateStr;