
var currDate = new Date();
var currHour = currDate.getHours();
var greeting;
var icon;

if (currHour > 18) {
 greeting = 'Swell Evening';
 icon = moon-o
} else if (currHour > 12) {
 greeting = 'Good afternoon';
} else if (currHour > 0) {
 greeting = 'Moooornin.';
} else {
 greeting = 'Heya, welcome!';
}
document.getElementById('greeting').innerHTML = ('<h3>' + greeting + '<h3>');

document.getElementById("icon").innerHTML = ('<i class="fa fa-' + icon + '" aria-hidden="true"></i>');