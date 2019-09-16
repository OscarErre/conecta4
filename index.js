var panel = new Array(7).fill(0).map(() => new Array(6).fill(0));
var currentPlayer = 0;

console.table(panel);

function deslizarFicha(idCol){
    var col=parseInt(idCol[4]);
    var fil = panel[col].findIndex(0);

    panel[col][fil]=currentPlayer;
    
    if (comprobarCuatro(col,fil)) {
        endGame();
    }
    if (col>=7) {
        //la columna está llena, desactivar el onClick;
    }
    changePlayer();
}


function changePlayer () {

    currentPlayer=(currentPlayer+1)%1;

}
function comprobarCuatro (x,y){
    let ini, fin;
    // comprobamos si hay 4 en raya Horizontalmente:
    if (y>0){
        for (let i=y; i>0; i--){
            if (panel[x][i]===currentPlayer){
                ini=i;
            } else break;
        }
    } else ini=y;
    for (let i=y; i<6;i++){
        if (panel[x][i]===currentPlayer){
            fin=i;
        } else break;
    }
    if (((fin-ini)+1)===4) { return true; }

    //comrpobamos si hay 4 en raya verticalmente:
    if (x>0){
        for (let i=x; i>0; i--){
            if (panel[i][y]===currentPlayer){
                ini=i;
            } else break;
        }
    } else ini=y;

    for (let i=x; i<7;i++){
        if (panel[i][y]===currentPlayer){
            fin=i;
        } else break;
    }
    if (((fin-ini)+1)===4) { return true; }

    return false;
}





var slideIndex = 1;
showSlides(slideIndex,'player1avatar');
showSlides(slideIndex,'player2avatar');

function plusSlides(n,player) {
  showSlides(slideIndex += n,player);
}

function showSlides(n,player) {
  var i;
  var slides = document.getElementsByClassName(player);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}