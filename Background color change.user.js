// ==UserScript==
// @name        Background color change
// @match   https://aaemr.org/*
// @description Changes the background color
// @version     1
// @grant       none
// ==/UserScript==

document.body.style.backgroundColor = "#ffcc99";
document.querySelector("#head1>img").src="https://previews.123rf.com/images/tsekhmister/tsekhmister1504/tsekhmister150400090/39335785-cochon-qui-est-repr%C3%A9sent%C3%A9-sur-un-fond-blanc.jpg"
document.querySelector("#head1>h1").textContent="haha EMR"
document.querySelector("header#head1").style.backgroundColor = "#eeccaa"
document.querySelector("footer").style.backgroundColor = "#eeccaa"


document.querySelector(".menuBar>ul").children[1].innerHTML = 'theBest<div class="dropdown-content">\n                    <a href="../planning.php?promo=m2" onclick="return confirm(\'Confirmez-vous le versement de 10 bitcoins à Anaëlle ?\')">Planning de frappes</a>\n                    <a href="../posterfrappes.php?poster=m2">Déposer sa frappe</a>\n                    <a href="../frappes.php?promo=m2" <a href="../planning.php?promo=m2" onclick="return confirm(\'Confirmez-vous le versement de 10 bitcoins à Anaëlle ?\')">Frappes</a>\n                    <a href="../delationm2.php">Problème avec une frappe</a>\n                    <a href="../annalesfrappes.php?promo=m2">Annales de frappes</a>\n                    <a href="../annalespartielsm2.php">Annales de partiels</a>\n                    <a href="../polys.php?promo=m2">Diaporamas</a>\n                    <a href="../annalesPolys.php?promo=m2">Annales Diaporamas</a>\n                    <a href="../annalessemio.php">Annales de sémio</a>\n                    <a href="../listeBinome.php?promo=m2">Binômes</a>\n                </div>\n'
document.querySelector("#diapo").src="https://www.cdiscount.com/pdt2/4/9/4/1/700x700/9782211232494/rw/caca-boudin.jpg"





