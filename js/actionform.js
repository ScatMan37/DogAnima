
function reDirection(t) {
// Redirige la page courante vers index.php	

   var obj = 'window.location.replace("index.php")';
   t = t * 1000;
   setTimeout(obj, t);
}

function getPageWidth() {
// Donne la largeur et la longueur du document
	
   if (document.body) {
      var larg = (document.body.clientWidth);
      var haut = (document.body.clientHeight);
   }
   return larg;
}   