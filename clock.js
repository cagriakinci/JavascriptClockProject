// Adın, myName id'sine yazdırılması
let isimDOM = document.querySelector("#myName");

let isim = prompt("Adınız Nedir?");
isimDOM.innerHTML = isim

// Tarih bilgisini text2 class'ına yazdırma

function showTime(){
    let saatDOM = document.querySelector("#myClock");
    let simdi = new Date().toLocaleDateString('tr-TR');
    saatDOM.innerHTML = simdi;
}

setInterval(showTime, 500)