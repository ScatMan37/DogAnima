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

// Test l'e-mail
function isEMail(emailStr) {
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

// Test si un champ est vide
function isempty(atextfield) {
   if ((atextfield.value.length == 0) || (atextfield.value == null)) {
      return true;
   } else { return false; }
}

// Test le Nom
function checkLastName(name) {
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
	      name.focus(); 
	      return false;
	  }
   }       
   name.value = name.value.toUpperCase();
   document.getElementById('answer').style.color="#ececec";
   return true; 
}	

// Test le Prénom
function checkFirstName(name) {
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
	  name.focus(); 
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
	      name.focus(); 
	      return false;
	  }
   }       
   document.getElementById('answer').style.color="#ececec";
   return true; 
}

// Test le numéro de téléphone
function checkTel(tel) {
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

// Test l'email
function checkEMail(em) {
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

// Test si il y a un message
function checkMessage(mes) {
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

// Teste la Captcha littérale
function checkCaptchaLit(codecapt, code) {
   var bloc;	
   var r;
   if (isempty(codecapt) || (codecapt.value != code.value)) {
	  //r=confirm("Champ vide ou code faux - Entrez le code !"); 
	  //if (r == false) { 
	  //   location.href="contact.php"; 
	  //   return false; 
	  //}
	  document.getElementById('answer').style.color="red";
	  bloc = document.getElementById('answer');
	  bloc.innerHTML = "*[Champ vide ou code faux - Entrez le code !]";
	  codecapt.focus();
	  return false;
   }
   document.getElementById('answer').style.color="#ececec";
   return true;
}

// Met le focus sur intervenant qui n'est pas obligatoire
function checkIntervenant(interv) {
   document.getElementById('answer').style.color="#ececec";
   interv.focus();
}	

// Met le focus sur le sujet qui est obligatoire
function checkSubject(sub) {
   document.getElementById('answer').style.color="#ececec";
   sub.focus();
}	

// Teste les différents champs du formulaire
function ValidateFormCL(form)
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
   
   if (!checkCaptchaLit(form.codecapt, form.code)) {
      return false;
   }	   
   
   document.getElementById('answer').style.color="#ececec";
   
   return true;
} 
