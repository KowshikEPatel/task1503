var request = new XMLHttpRequest();
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q=Mysore&appid=27919e10a7ca047faaa34fed69e5c05a';

request.open('get',url_string,true);
request.send();
request.onload = function(){
    var data  = JSON.parse(this.response);
    console.log(data);
    let h1=document.createElement("h1");
    let str1 = ' Mysore temperature ';
    h1.style.fontWeight="bold";
    h1.style.fontSize="3em";
    h1.style.padding="35px";
    h1.append(str1);
    let h5 = document.createElement("h5");
    let str2="Actual temperature ";
    h5.append(str2,(data.main.temp-273).toFixed(2))
    h1.appendChild(h5);
    let h52 = document.createElement("h5");
    let str3="Feels like ";
    h52.append(str3,(data.main.feels_like-273).toFixed(2));
    let h6 = document.createElement("h6");
    let str4="the solution of other js problems is in solution.js";
    h6.append(str4);
    h52.append(str3,(data.main.feels_like-273).toFixed(2));
    h1.appendChild(h52);
    h1.appendChild(h6);
    document.getElementById("text").append(h1);

}





