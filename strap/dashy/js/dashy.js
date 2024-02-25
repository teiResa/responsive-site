// DATE AND TIME
window.onload = function(){
 setInterval(function() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var date = (today.getMonth()+1)+'月 (yuè) '+today.getDate() + '日 (rì)';
    // today.getFullYear()+' 年 (nián) -'+

    function update(t) {
     today.getHours 
     if (t < 10) {
     return"0" + t;
     }
     else {
     return t;
     }
    }

    var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    // var dateTime = date+' '+time;
    
    document.getElementById('datehere').innerHTML = daylist[day] +',' + ' ' + date;
    // get the 0 before the first 9 months, unless it is tedious
    document.getElementById('timehere').innerHTML = time ;
 }, 1000);
}

//AQI 
//request usage token    9bfe0bf2919c491feb3536ff828cf5ddb0547e64

(function  (w,  d,  t,  f)  {  
 w[f]  =  w[f]  ||  function  (c,  k,  n)  {  
  s  =  w[f],  k  =  s['k']  =  (s['k']  ||  (k  ?  ('&k='  +  k)  :  ''));  s['c']  =  
   c  =  (c  instanceof  Array)  ?  c  :  [c];  s['n']  =  n  =  n  ||  0;  L  =  d.createElement(t),  e  =  d.getElementsByTagName(t)[0];  
  L.async  =  1;  L.src  =  '//feed.aqicn.org/feed/'  +  (c[n].city)  +  '/'  +  (c[n].lang  ||  '')  +  '/feed.v1.js?n='  +  n  +  k;  
  e.parentNode.insertBefore(L,  e);  
 };  
})(window,  document,  'script',  '_aqiFeed'); 


_aqiFeed({  
	container:"city-aqi-container",  
	city:"beijing",  
	lang:"cn"  
});  

//  https://aqicn.org/faq/2015-09-18/map-web-service-real-time-air-quality-tile-api/

var  OSM_URL  =  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';  
var  OSM_ATTRIB  =  '&copy;  <a  href="http://openstreetmap.org/copyright">OpenStreetMap</a>  contributors';  
var  osmLayer  =  L.tileLayer(OSM_URL,  {  attribution:  OSM_ATTRIB  });  

var  WAQI_URL  =  "https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=9bfe0bf2919c491feb3536ff828cf5ddb0547e64";  
var  WAQI_ATTR  =  'Air  Quality  Tiles  &copy;  <a  href="http://waqi.info">waqi.info</a>';  
var  waqiLayer  =  L.tileLayer(WAQI_URL,  {  attribution:  WAQI_ATTR  });  

var  map  =  L.map('map').setView([51.505,  -0.09],  11);  
map.addLayer(osmLayer).addLayer(waqiLayer);  