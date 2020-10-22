// Chiedi all’utente la sua email
// controlla che sia nella lista di chi può accedere
// stampa un messaggio appropriato sull’esito del controllo

// variabili
var richiestaEmail = prompt("Inserici la tua Email");
// array, lista email presenti in archivio
var emailUtenti = ["pinco@gmail.com", "pallino@gmail.com", "ciao@gmail.com", "arrivederci@gmail.com", "addio@gmail.com", "ciaone@gmail.com"];
// variabile di controllo
var convalida = false;

// verifico che la mail inserita sia presente
for (var i = 0; i < emailUtenti.length; i++) {

// condizione: La mail inserita dall'utente deve corrispondere ad una presente nell'elenco
  // se la mail inserita è presente
  if (richiestaEmail === emailUtenti[i]) {
    convalida = true;
    document.getElementById("Risultato").innerHTML = ("sei autorizzato")
  }
}

//console.log(convalida);

// se la mail inserita non è presente
if (convalida == false) {
  document.getElementById("Risultato").innerHTML = (" non sei autorizzato")
}
