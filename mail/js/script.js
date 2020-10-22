// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull’esito del controllo

// variabili
var richiestaEmail = prompt("Inserici la tua Email");
var emailUtenti = ["pinco@gmail.com", "pallino@gmail.com", "ciao@gmail.com", "arrivederci@gmail.com", "addio@gmail.com", "ciaone@gmail.com"];
var convalida = false;


for (var i = 0; i < emailUtenti.length; i++) {

  // email in lista
  if (richiestaEmail === emailUtenti[i]) {
    convalida = true;
    document.getElementById("Risultato").innerHTML = ("sei autorizzato")
  }

}

console.log(convalida);

// se email non in lista
if (convalida == false) {
  document.getElementById("Risultato").innerHTML = (" non sei autorizzato")
}
