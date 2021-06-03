var slike = [
    "slike/mercedes1.jpg",
    "slike/golf6.jpg",
    "slike/golf7.jpg",
    "slike/bmw1.jpg",
    "slike/polo.jpg",
    "slike/ibiza.jpg",
]

var galerija = document.getElementById('galerija');

for (let i = 0; i < slike.length; i++) {
   galerija.innerHTML += "<img src="+slike[i]+" onclick='prikazSlike("+i+")'>";
}

function prikazSlike(pozicija) {
    document.getElementById("prikazSlikeSpolja").style.display = "block";
    var polje = document.getElementById("prikazSlikeUnutra");
    polje.innerHTML = '<div id="izlaz" onclick="izlaz()">x</div>'
    if (pozicija == 0) {
        polje.innerHTML += "<span onClick='prikazSlike("+(slike.length-1)+")'><</span>";
    } else {
        polje.innerHTML += "<span onClick='prikazSlike("+(pozicija-1)+")'><</span>";
    }
    polje.innerHTML += "<img src="+slike[pozicija]+">";
    if (pozicija == (slike.length - 1)) {
        polje.innerHTML += "<span onClick='prikazSlike("+0+")'>></span>";
    } else {
        polje.innerHTML += "<span onClick='prikazSlike("+(pozicija+1)+")'>></span>";
    }
}

function izlaz() {
    document.getElementById("prikazSlikeSpolja").style.display = "none";
}