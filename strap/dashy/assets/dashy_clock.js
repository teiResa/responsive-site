function Time() {
 var date = newDate();

 // Get current hour, minute, and second
 var hour = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();


 // Updating hour, minute, and second
 // if they are less than 10
 hour = update(hour);
 minute = update(minute);
 second = update(second);

 // Adding time elements to the div
 document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second;

 // Set Timer to1 sec (1000 ms)
 setTimeout(Time, 1000);
}

 // Function to updatetime elements if they arelessthan10
 // Append 0 before time elements if they are less than 10
function update(t) {
 if (t < 10) {
 return"0" + t;
 }
 else {
 return t;
 }
}

Time();