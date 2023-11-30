var today = new Date();
var hourNow = today.getHours();
var greeting;
var icon;

if (hourNow < 12){
  greeting = "Moooornin";
  icon = "coffee";
}
else if (hourNow < 20){
  greeting = 'Good afternoon!';
  icon = "sun-o";
}
else if (hourNow < 24){
  greeting = "Good evening"
  icon = "moon-o";
}
else {
  greeting = "Heeeya, welcome";
}
document.getElementById('greeting1').innerHTML = ('<h1>' + greeting + '<h1>');

//document.getElementById('user-instructions').classList.add('pinkTest');

document.getElementById("icon").innerHTML = ('<i class="fa fa-' + icon + '" aria-hidden="true"></i>');