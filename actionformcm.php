<!DOCTYPE html>
<!--                            
    Projet DogAnima            
    actionformcm.php             
    Création 09/12/2015        
    MAJ du 20/01/2016
    Auteur : Gouthière Laurent 
--> 
<html> 
<head>
<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
<meta name="viewport" content="width=device-width" />
<!--[if lt IE 9]>
<script src="http://github.com/aFarkas/html5shiv/blob/master/dist/html5shiv.js"></script>
<![endif]-->
<title>DogAnima - Contact</title>
<link rel="icon" type="img/x-ico" href="img/doganima.ico" />
<link href="css/menu.css" type="text/css" rel="stylesheet" media="screen" />
<link href="css/styles.css" type="text/css" rel="stylesheet" media="screen" />
</head>
<body>
<?php include ("header.inc.php"); ?>
<div class="center">
<h1>
Merci de nous avoir contact&eacute;
</h1>
<?php
if (($_POST["lastname"] == "") || ($_POST["firstname"] == "") || ($_POST["tel"] == "") ||
    ($_POST["email"] == "") || ($_POST["subject"] == "") || ($_POST["message"] == "") ||
	($_POST["priority"] == "") || ($_POST["numcapt"] == "")) {
    header('location:contactcm.php');
}
?>
Message de contact envoyé le :
<?php 
print($_POST["dateforw"]); print(" : Php");
print("<br />");
print("Message de contact envoyé le : ");
print($_POST["dateforwjs"]); print (" : JavaScript");
?>
<br />
Message de contact reçu le :
<?php
print(date("d/m/o H:i:s")); print (" : Php");
?>

<br />
<br />
<div class="justify">
<table class="center2">
<tr>
<td class="valigntop">
<b>Nom</b> :&nbsp; 
</td>
<td>
<?php print($_POST["lastname"]);?>
</td>
</tr>
<tr>
<td class="valigntop">
<b>Prénom</b> :&nbsp;
</td>
<td>
<?php print($_POST["firstname"]);?>
</td>
</tr>
<tr>
<td class="valigntop">
<b>Téléphone</b> :&nbsp;
</td>
<td>
<?php print($_POST["tel"]);?>
</td>
</tr>
<tr>
<td class="valigntop">
<b>e-mail</b> :&nbsp;
</td>
<td>
<?php print($_POST["email"]);?>
</td>
</tr>
<tr>
<td class="valigntop">
<b>Sujet</b> :&nbsp;
</td>
<td class="valigntop">
<?php print($_POST["subject"]);  ?>           
</td>
</tr>
<tr>
<td class="valigntop">					
<b>Intervenant</b>&nbsp;:&nbsp;
</td>
<td class="valigntop">
<?php print($_POST["intervenant"]);?>
</td>
</tr>
<tr>
<td class="valigntop">
<b>Message</b> :&nbsp; 
</td>
<td class="valigntop">
<?php print($_POST["message"]);?>
</td>
</tr>
<tr>
<td class="valigntop">
Priorité    :&nbsp; 
</td>
<td class="valigntop">
<?php switch ($_POST["priority"]) {
	  case 1: echo "Urgent";
              break;
      case 2: echo "Haute";
              break; 					
	  case 3: echo "Normale";
              break; 							  
}; ?>   
</td>
</tr>
</table>
<br />
Redirection dans 20 secondes ! (JavaScript)
<br />	 
<br />	  
</div>
</div>
<script src="js/actionform.js" type="text/javascript" charset="utf-8"></script>
<!-- Largeur de la page -->
&nbsp;Largeur de la page :
&nbsp;<script type="text/javascript">document.write(getPageWidth());</script>&nbsp;pixels
<br /><br />
</section>
<?php include("footer.inc.php"); ?>
<!-- Redirection vers index.php dans 20 secondes ou au choix -->
<script type="text/javascript">reDirection('20');</script>
</body>
</html>