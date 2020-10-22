//Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//lancio dei dadi
buttonLancia = document.getElementById('lancia')

buttonLancia.addEventListener('click',
  function() {
  //esito del lacio dado utente
  var playerUno = Math.floor(Math.random() * 6) + 1;
  alert('Tu giochi il n° ' + playerUno);
  //esito del lacio dado PC
  var playerDue = Math.floor(Math.random() * 6) + 1;
  alert('Il computer gioca il n° ' + playerDue);
  //vittoria utente
  if (playerUno > playerDue) {
  alert('Hai Vinto!');
  //vittoria PC
  } else if (playerUno < playerDue) {
  alert('Hai perso!');
  //Pareggio
  } else {
  alert('Pareggio!');
  }
}
)
