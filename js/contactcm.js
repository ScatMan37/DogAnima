// Fichier contactcl.js
// Pour contactcl.php
// Projet DogAnima
// Auteur: Laurent Gouthière
// Création: 12/12/2015
// MAJ du 20/01/2015

// J'ai essayé du RegExp et la fonction match sans succés si j'ai le temps j'essayerai à nouveau pour simplifier le code.
//
// Il faut remarquer que j'utilise la fenêtre confirm par ce qu'elle offre un bouton annuler. C'est pratique par ce que sinon
// on ne peut pas sortir du JavaScript et on ne peut pas aller sur une autre page du menu. En fait la fonction annuler permet
// de sortir du formulaire (seule solution pour le moment)
// On ne peut pas utiliser OnBlur et les fenêtre alert ou confirm car c'est complétement incompatible avec les autres navigateurs; Seul OnClick
// est compatible

var resultat;
var bloc;
var chiffre1 = randomize(10);
bloc = document.getElementById('n1');
bloc.innerHTML = chiffre1;
var chiffre2 = randomize(10); 
bloc = document.getElementById('n2');
bloc.innerHTML = chiffre2;
resultat = parseInt(chiffre1) + parseInt(chiffre2);

function randomize(n) {
// Renvoie un nombre aléatoire de 1 à n	

   return (Math.floor((n)*Math.random()+1));
} 
  
function checkCaptchaMat(numcapt, resultat) {
// Test la Captcha Mathématique
	
   var bloc;	
   if (numcapt == resultat) {
	  // alert("Résultat exact");
	  document.getElementById('answer').style.color="#ececec";
	  return true;
   } else {
	  // alert("Résultat faux");
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide - Entrez le résultat de la somme !]";
	  form.numcapt.focus(); 
	  return false;
   }
}

function isEMail(emailStr) {
// Test l'e-mail	

  var emailPat=/^(.+)@(.+)$/;
  var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
  var validChars="\[^\\s" + specialChars + "\]";
  var quotedUser="(\"[^\"]*\")"
  var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;
  var atom=validChars + '+';
  var word="(" + atom + "|" + quotedUser + ")";
  var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
  var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");
  var matchArray=emailStr.match(emailPat);
  if (matchArray==null) {
    return false;
  } 	
  var user=matchArray[1];
  var domain=matchArray[2];
  if (user.match(userPat)==null)
   return false;
  var IPArray=domain.match(ipDomainPat);
  if (IPArray!=null) {
    for (var i=1;i <= 4;i++) {
      if (IPArray[i]>255)
        return false;
    }
    return true;
  }
  var domainArray=domain.match(domainPat);
  if (domainArray==null)
    return false;
  var atomPat=new RegExp(atom,"g");
  var domArr=domain.match(atomPat);
  var len=domArr.length;
  if (domArr[domArr.length-1].length<2 || 
    domArr[domArr.length-1].length>3) {
    return false;
  }
  if (len < 2) return false;
  return true;
}

function isempty(atextfield) {
// Test si un champ est vide
	
   if ((atextfield.value.length == 0) || (atextfield.value == null)) {
      return true;
   } else { return false; }
}

function checkLastName(name) {
// Test le Nom	

   var bloc; 
   var r;
   if (isempty(name)) {
	  // r=confirm("Champ vide - Entrez le nom !");
	  // if (r == false) { 
	  //   location.href="contact.php"; 
	  //   return false; 
	  // }
	  name.value = name.value.toUpperCase();  
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide - Entrez le Nom !]";
	  form.lastname.focus(); 
	  return false;	
   }	
   for (var i = 0; i < name.value.length; i++) {
	  if ((name.value.charAt(i) == "1") || (name.value.charAt(i) == "2") ||
	      (name.value.charAt(i) == "3") || (name.value.charAt(i) == "4") ||
		  (name.value.charAt(i) == "5") || (name.value.charAt(i) == "6") ||
		  (name.value.charAt(i) == "7") || (name.value.charAt(i) == "8") ||
		  (name.value.charAt(i) == "9") || (name.value.charAt(i) == "0")) {
	     // r=confirm("Caractère non valide - Entrez le nom !");
		 // if (r == false) { 
	     //    location.href="contact.php";
	     //    return false; 
	     // }   
	      name.value = name.value.toUpperCase();  
	      document.getElementById('answer').style.color="red";
	      bloc = document.getElementById('answer');
	      bloc.innerHTML = "*[Caractère non valide - Entrez le Nom !]";
	      form.lastname.focus(); 
	      return false;
	  }
   }       
   name.value = name.value.toUpperCase();
   document.getElementById('answer').style.color="#ececec";
   return true; 
}	

function checkFirstName(name) {
// Test le Prénom
	
   var bloc; 
   var r;
   if (isempty(name)) {
	  //r=confirm("Champ vide - Entrez le Prénom !");
	  //if (r == false) { 
	  //   location.href="contact.php";
	  //   return false; 
	  //}
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide - Entrez le Prénom !]";
	  form.firstname.focus(); 
	  return false;	
   }	
   for (var i = 0; i < name.value.length; i++) {
	  if ((name.value.charAt(i) == "1") || (name.value.charAt(i) == "2") ||
	      (name.value.charAt(i) == "3") || (name.value.charAt(i) == "4") ||
		  (name.value.charAt(i) == "5") || (name.value.charAt(i) == "6") ||
		  (name.value.charAt(i) == "7") || (name.value.charAt(i) == "8") ||
		  (name.value.charAt(i) == "9") || (name.value.charAt(i) == "0")) {
	      // r=confirm("Caractère non valide - Entrez le Prénom !");
		  // if (r == false) { 
	      //   location.href="contact.php"; 
	      //   return false; 
	      //}  
	      document.getElementById('answer').style.color="red";
	      bloc = document.getElementById('answer');
	      bloc.innerHTML = "*[Caractère non valide - Entrez le Prénom !]";
	      form.firstname.focus();
	      return false;
	  }
   }       
   document.getElementById('answer').style.color="#ececec";
   return true; 
}

function checkTel(tel) {
// Test le numéro de téléphone

   var bloc;
   var r;   
   if (isempty(tel)) {
	  //r=confirm("Champ vide - Entrez le Téléphone !");
	  //if (r == false) { 
	  //   location.href="contact.php"; 
	  //   return false; 
	  //}
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide - Entrez le Téléphone !]";
	  tel.focus(); 
	  return false;	
   }	 	
   for (var i = 0; i < tel.value.length; i++) {
	  if ((tel.value.charAt(i) != "1") && (tel.value.charAt(i) != "2") &&
	     (tel.value.charAt(i) != "3") && (tel.value.charAt(i) != "4") &&
		 (tel.value.charAt(i) != "5") && (tel.value.charAt(i) != "6") &&
		 (tel.value.charAt(i) != "7") && (tel.value.charAt(i) != "8") &&
		 (tel.value.charAt(i) != "9") && (tel.value.charAt(i) != "0")) {	
		 //r=confirm("Caractère non valide - Entrez le Téléphone !");
		 //if (r == false) { 
	     //   location.href="contact.php";  
	     //   return false; 
	     //}  
	     document.getElementById('answer').style.color="red";
	     bloc = document.getElementById('answer');
	     bloc.innerHTML = "*[Caractère non valide - Entrez le Téléphone !]";
	     tel.focus(); 
	     return false;
	     }
   }
   document.getElementById('answer').style.color="#ececec";
   return true; 
}

function checkEMail(em) {
// Test l'email
	
   var bloc;  	
   var r;
   if (isempty(em) || (!isEMail(em.value))) { 
      //r=confirm("Champ vide ou e-mail non valide - Entrez l'e-mail !"); 	
	  //if (r == false) { 
	  //   location.href="contact.php";  
	  //   return false; 
	  //}
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide ou e-mail non valide - Entrez l'e-mail !]";
      em.focus();
      return false; 
   } 	
   document.getElementById('answer').style.color="#ececec";	
   return true; 
}	

function checkMessage(mes) {
// Test si il y a un message
	
   var bloc;	
   var r;
   if (isempty(mes)) {
      //r=confirm("Champ vide - Entrez le message !");
	  //if (r == false) { 
	  //   location.href="contact.php"; 
	  //   return false; 
	  //}
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide - Entrez le message !]";
      mes.focus();
      return false;
   }	
   document.getElementById('answer').style.color="#ececec";
   return true;
}	

function checkIntervenant(interv) {
// Met le focus sur intervenant qui n'est pas obligatoire
	
   document.getElementById('answer').style.color="#ececec";
   interv.focus();
}	

function checkSubject(sub) {
// Met le focus sur le sujet qui est obligatoire	
   document.getElementById('answer').style.color="#ececec";
   sub.focus();
}	

function ValidateFormCM(form)
// Teste les différents champs du formulaire
{  
   /* var bloc;  
      var r;
   */
   if (!checkLastName(form.lastname)) {  
	  return false;
   }
   
   if (!checkFirstName(form.firstname)) { 
      return false; 
   }
   
   if (!checkTel(form.tel)) { 
      return false; 
   }
   
   if (!checkEMail(form.email)) { 
      return false; 
   }
   
   // L'intervenant n'est pas un champ obligatoire
   /*
   if (isempty(form.intervenant)) {
      r=confirm("Champ vide - Entrez l'intervenant !");
	  if (r == false) { 
	     location.href="contact.php";  
	     return false; 
	  }
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide - Entrez l'intervenant !]";
      form.intervenant.focus();
      return false;
   }
   */
   
   if (!checkMessage(form.message)) {
      return false;
   }
   
   if (!checkCaptchaMat(form.numcapt.value, resultat)) {
      return false;
   }	   
   
   document.getElementById('answer').style.color="#ececec";
   
   return true;
} 