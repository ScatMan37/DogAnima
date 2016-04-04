<!DOCTYPE html>
<!--           
    Projet DogAnima            
    contactcm.php               
    Création 13/11/2015         
	MAJ du 20/01/2015
    Auteur : Gouthière Laurent 
	Rem    : OnBlur n'est pas compatible avec tous les navigateurs. On est obligé d'utiliser OnClick. Par contre le logo ne s'affiche pas
	sous Safari et les fenêtre confirm ne veulent pas se fermer. J'ai supprimer OnBlur et remplacé par OnClick. De même j'ai supprimé les fenêtres 
	alert ou confirm qui sont complétement incompatibles avec les autres navigateurs.
	Focus et OnClick ne marche pas sur Firefox je remet OnClick. Sans compter qu'avec les fenêtres et OnBlur cela devient impossible d'accéder
	au menu.
--> 
<html>
<head>
<meta charset="utf-8" lang="fr" />
<meta name="viewport" content="width=device-width" />
<!--[if lt IE 9]>
<script src="http://github.com/aFarkas/html5shiv/blob/master/dist/html5shiv.js"></script>
<![endif]-->
<!--
<meta name="keywords" content="DogAnima,Indre et Loire,tours,garde de chien,petsitting,famille d&#39;accueil,pension,chien"/>
-->
<meta name="robots" content="noindex,nofollow" />
<meta name="description" content="Garde de chien en accueil ou à domicile en Indre et Loire DogAnima"/>
<title>DogAnima - Contact de l'association soit par formulaire soit par téléphone ou Fax</title>
<link rel="icon" type="img/x-ico" href="img/doganima.ico" />
<link href="css/menu.css" type="text/css" rel="stylesheet" media="screen" />
<link href="css/styles.css" type="text/css" rel="stylesheet" media="screen" />
</head>
<?php include ("header.inc.php"); ?>
<div class="left">
<h1 class="title"><strong><em>Nous contacter</em></strong></h1>
</div>
<section>
<p></p>
<table class="contact">
<tr>
<td>
<form action="actionformcm.php" method="post" enctype="multipart/form-data" name="form" OnSubmit="return ValidateFormCM(this);">
<div class="center">Pour nous contacter, veuillez remplir le formulaire suivant :</div>
<br />
<table class="center75">
<tr>
<td class="valigntop">
<div class="right" id="answer">&nbsp;</div>
</td>
</tr>
</table>
<table class="center75">
<tr>
<td class="valigntop">
* Nom    :
</td>
<td class="valigntop">
<div class="left"> 
<input type="text" name="lastname" size="35" OnClick="checkLastName(lastname);"/>
</div>
</td>
</tr>
<tr>
<td class="valigntop">
* Pr&eacute;nom    :
</td>
<td class="valigntop">
<div class="left">
<input type="text" name="firstname" size="35" OnClick="checkFirstName(firstname);"/>
</div>
</td>
</tr>
<tr>
<td class="valigntop">
* Téléphone :
</td>
<td class="valigntop">
<div class="left">
<input type="text" name="tel" size="10" OnClick="checkTel(tel);"/>
</div>
</td>
</tr>
<tr>
<td class="valigntop">
* e-mail                 :
</td>
<td class="valigntop">
<div class="left">
<input type="text" name="email" size="35" OnClick="checkEMail(email);"/>
</div>
</td>
</tr>
<tr>
<td class="valigntop">
* Sujet   :
</td>
<td class="valigntop">
<div class="left">
<input type="radio" name="subject" value="Demande de contact" checked/> Demande de contact<br />
<input type="radio" name="subject"  value="Demande d'information"/> Demande d'information<br />
<input type="radio" name="subject"  value="Suggestion d'amélioration"/> Suggestion d'amélioration
</div>
</td>
</tr>
<tr>
<td class="valigntop">
Intervenant&nbsp;:
</td>
<td class="valigntop">
<div class="left">
<input type="text" name="intervenant" size="35" OnClick="checkIntervenant(intervenant);"/>
</div>
</td>
</tr>
<tr>
<td class="valigntop">
* Message :
</td>
<td class="valigntop">
<div class="left">
<textarea rows="7" name="message" cols="50" maxlength="400" OnClick="checkMessage(message);">
</textarea>
</div>
</td>
</tr>
<tr>
<td class="valigntop">
Priorit&eacute; :
</td>
<td class="valigntop">
<div class="left">
<select name="priority" size="1">
<option value="3">Normale</option>
<option value="2">Haute</option>
<option value="1">Urgente</option>
</select>
<br />
</div>                                                                 
</td>                                       
</tr>                                  
<tr>
<td class="valigntop">
<br />
* Code :
</td>
<td class="valigntop">

<!-- Captcha Mathématique -->
<div class="center">
<div class="left" style="margin-left: 38%;">
Nombre aléatoire&nbsp;&nbsp;<span id="n1">&nbsp;</span><br />
Nombre aléatoire&nbsp;&nbsp;<span id="n2">&nbsp;</span><br />
Entrer la somme&nbsp;&nbsp;<input type="text" name="numcapt" size="3" OnClick="checkCaptchaMat(numcapt, resultat);"/>
</div>
</div>
<!-- Date en Php -->
<input type="hidden" name="dateforw" value= "<?php echo date("d/m/o H:i:s");?>" />

<!-- Date en JavaScript -->
<script type="text/javascript">var d=new Date(); document.write('<input type="hidden" name="dateforwjs" value="'+d.toLocaleString()+'"/>');</script>
<br />
<br />
<input type="button" value="Annuler" OnBlur="form.reset();" />
<input type="submit" style="color: #00F;" value="Envoyer" />
<br />
<div class="left">
* : Champs obligatoires.
</div>
</td>
</tr>
</table>                                    
</form>
<p></p>
</td>
</tr>
</table>
<table class="center75">
<tr>
<td class="valigntop">
<div class="left">
<strong><em>Notre adresse</em></strong>
</div>

<div class="center2">
Association DogAnima<br/>
Château de la Villaine<br/>
La Faisanerie<br/>
37320 Esvres<p></p>
du Lundi 9h-16h au Vendredi 9h-16h30<br />
Samedi de 9h à 12h<br />
<p></p>
<img src="img/telephone.jpg" height="32" width="32" alt="Téléphone" title="Téléphone" />02 47 58 26 41<br/>
Fax  02 47 58 26 12
</div>
</tr>
</td>
</table>
<br />
<table class="center75">
<tr>
<td class="valigntopw63">
<div class="left">
<strong><em>Nous situer</em></strong>
</div>
<p></p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10827.676108507967!2d0.7867439554216419!3d47.276837374758955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fcda96cbc579d1%3A0xd9d4041b4bc2e4b0!2sCh%C3%A2teau+De+La+Villaine!5e0!3m2!1sfr!2sfr!4v1447349740055" width="600" height="450" style="border: solid 1px #c0c0c0;border-radius: 8px;" allowfullscreen></iframe>
</td>
</tr>
</table>
<br />
</section>
<?php include("footer.inc.php"); ?>
<!-- Script de création et de test de la Captcha Mathématique et tests sur les différents champs -->
<script src="js/contactcm.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>