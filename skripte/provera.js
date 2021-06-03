function provera() {
    var forma = document.forma;
    var ime = forma.ime;
    var email = forma.email;
    var poruka = forma.poruka;

    var obavestenje = document.getElementById("obavestenje");

    try {
        if (ime.value == "" ||
            email.value == "" ||
            poruka.value == "") {
                throw "Neophodno je popuniti sva polja";
                // ukoliko se desi throw, onda se odmah skace na catch i ne
                // izvrsava se dalje kod u try bloku,
                // vrednost parametra error u catch-u postaje ono sto smo stavili nakon throw
        }
        else {
             if (ime.value.length > 20) {
                throw "Potpis ne može sadržati preko 20 karaktera";
            } else if (proveraMaila(email.value) == false) {
                throw "Unos e-maila nije ispravan"
            }
        }
        alert("Poruka uspesno poslata");
    } catch (error) {
        obavestenje.innerHTML = error;
    }
}

function proveraMaila(tekst) {
    var znak = false;
    for (var i = 0; i < tekst.length; i++) {
        if (tekst.charAt(i) == '@') {
           znak = true;
        }
    }
    return znak;
}
