<?php
//check if there has been something posted to the server to be processed
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['action']))
{
 
  try {


    /******************************************
    * Create databases and  open connections*
    ******************************************/
 
    // Create (connect to) SQLite database in file
    $file_db = new PDO('sqlite:../../db_manifesto-garden/axisTable.db');

  // Set errormode to exceptions
    $file_db->setAttribute(PDO::ATTR_ERRMODE,
                            PDO::ERRMODE_EXCEPTION);
    // echo("opened or connected to the database axisTable <br>");
   }
    catch(PDOException $e) {
    // Print PDOException message
    echo $e->getMessage();
  }

   try {
    //   {
      $querySelect='SELECT * FROM axisTable';
      $result = $file_db->query($querySelect);
      if (!$result) die("Cannot execute query.");
    //   }
    // get a row...
    // MAKE AN ARRAY::
    $res = array();
    $i=0;
    while($row = $result->fetch(PDO::FETCH_ASSOC))
    {
      // note the result from SQL is ALREADy ASSOCIATIVE
      $res[$i] = $row;
      $i++;
    }//end while
    // endcode the resulting array as JSON
    $myJSONObj = json_encode($res);
    echo $myJSONObj;
    exit();
 
  } //end try
     catch(PDOException $e) {
       // Print PDOException message
       echo $e->getMessage();
 
     }
    
}//POST
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, content="width = device-width", user-scalable=0>

    <title>JARDIN MANIFEST✿ GARDEN</title>
    <audio controls hidden id="chimeSound">
      <source src="/assets/sounds/dust-chime.mp3" type="audio/mpeg">
      </audio>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="https://unpkg.com/98.css">     <!-- Windows 98 aesthetic -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/mediaqueries.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> 
    <script src="js/libraries/jquery-ui.js"></script> 
        <!-- My script(s) -->
        <script src="js/script.js"></script>
        <script src="js/MedInfoBox.js"></script>
        <script src="js/Axis.js"></script>
        <script src="js/Links.js"></script>
        <script src="js/InfoBox.js"></script>

    <!-- Library script(s) go here -->
  </head>

  <body id="body">
    <div id="bg-img" alt="background image"></div>
    <div id="map">
      <!-- sticky elements generated in script (flower, boxes) -->
    </div>

    <header>
<div id="main-title-container" class="text-xxl text-align-center">
<div id="default-title" class="text-xxl text-align-center"> JARDIN MANIFESTO GARDEN </div>
    <!-- <img id="title-image" src="../gg_manifesto-garden/assets/images/title-test.jpeg" alt="title"> -->
  </div>

  <nav id="buttons-container" class="text-md">
  <input id="manifesto-button" class="buttons text-md" type="button" value="Manifesto">
  <input id="index-button" type="button" class="buttons text-md" value="Index">
  <input id="contribute-button" class="buttons text-md" type="button" value="Contribute">

  <div>Seed: 
    <select id="seed-dropdown"  class="buttons text-md">
      <option value="seed0">✿</option>
      <option value="seed1">★</option>
      <option value="seed2">❀</option>
      <option value="seed3">♪</option>
      <option value="seed4">♥</option>
    </select>
   </div>

   <div>Theme: 
    <select id="theme-dropdown"  class="buttons text-md">
      <option value="theme0">lilac</option>
      <option value="theme1">pink</option>
      <option value="theme2">black</option>
      <option value="theme3">blue</option>
    </select>
   </div>

  <input id="language-button" class="buttons text-md" type="button" value="Français">
 </nav>
 </header>

 <!-- https://docs.google.com/document/d/1DH8e74ChIlntGXoX_TLG2UUrhECgsD-x/edit#heading=h.9007833k6617 PAGE 1 (Manifesto) section -->
 <div id="title-bar-index-container" class="title-bar">
    <div class="title-bar-text">Table of Content | Table des Matières</div>
    <div class="title-bar-controls">
    <input id="index-container-close-button" class="close-buttons" type="button" value="X">
    </div>
  </div>
 <div id="index-container" class="window text-lg">
  <!-- Bilingual content -->
  <div>
    <ul class="tree-view">
      <!-- AXIS 1 -->
      <li>
        <h3>BIBLIOGRAPHIE | BIBLIOGRAPHY</h3>
        <details open>
          <summary>CRÉATION ET EXPÉRIMENTATION | CREATION AND EXPERIMENTATION</summary>
          <ul>
          <li><a href="https://leetusman.com/archiving-artist-spaces/">Archiving Artist-Run Spaces</a> (2021-2023) </li>
            <li><a href="https://www.galeriegalerieweb.com/webtheque/">Galerie Galerie's Webtheque</a> (2018)</li>
            <li><a href="https://www.are.na/"></a>(2014)</li>
            <li><a href="http://www.spiderlanguage.net/domains.html">isi-pîkiskwêwin-ayapihkêsîsak</a> (1996)</li>
            <li><a href="https://www.cameronsworld.net/">Cameron's World</a> (2015) </li>
            <li><a href="https://www.youtube.com/@coryarcangel">Cory Arcangel</a> (2009-)</li>
            <li><a href="https://www.naiveweekly.com/">Naïve Weekly</a> (2018-)</li>
            <li><a href="https://www.galeriegalerieweb.com/webtheque/the-wig/">A White Institution's Guide For Welcoming Artists of Color* And Their Audiences »</a> (2016-2020)</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 2 -->
      <li>
        <details open>
          <summary>ÉDUCATION DÉCENTRALISÉE | DECENTRALIZED EDUCATION</summary>
          <ul>
            <li><a href="https://www.instagram.com/do.not.research/">Do Not Research</a> (2020-)</li>
            <li><a href="https://publicdomainreview.org/">The Public Domain Review</a> (2011-)</li>
            <li><a href="https://www.penguinrandomhouse.ca/books/761644/against-platforms-by-mike-pepi/9781685891374">Against Platforms</a> (2025)</li>
            <li><a href="https://www.patreon.com/cafesnake">café snake</a> (2024-)</li>
            <li><a href="https://artbase.rhizome.org/wiki/Main_Page">Rhizom ArtBase</a> (1999-)</li>
            <li><a href="https://www.leslibraires.ca/livres/load-une-histoire-d-internet-t-carl-bessette-9782925197614.html">Load - Une histoire d'Internet T.1: Les géants</a> (2025)</li>
            <li><a href="https://www.youtube.com/@contrapoints">ContraPoints</a> (2017-)</li>
            <li><a href="https://www.instagram.com/bradtroemel">Brad Troemel</a> (2016-)</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 3 -->
      <li>
        <details open>
          <summary>TRANSPARENCE ET OUVERTURE | TRANSPARENCY AND OPENNESS</summary>
          <ul>
          <li><a href="https://earthstar-project.org/">earthstar</a> (2019-)</li>
            <li><a href="https://schoolofcommons.org/">school of commons (SoC)</a> (2019-)</li>
            <li><a href="https://www.betterworldbooks.com/product/detail/floss-art-9781906496180">FLOSS+Art</a> (2008)</li>
            <li><a href="https://mackenzie.art/digital-art/detail/">Digital Exhibitions Toolkit and Art Installation Launcher (DETAIL)</a> (2021-2024)</li>
            <li><a href="https://webrecorder.net/">Werecorder</a> (2014-)</li>
            <li><a href="https://leafletjs.com/">Leaflet.js</a> (2011-)</li>
            <li><a href="https://p5js.org/">p5.js</a> (2013-)</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 4 -->
      <li>
        <details open>
          <summary>MÉLIMÉLO À TOUT PRIX | MISHMASH AT ALL COSTS</summary>
          <ul>
            <li><a href="http://nunasoft.com/">Nunasoft</a> (2004-)</li>
            <li><a href="https://docs.google.com/document/u/1/d/1BRlF2_zhNe86SGgHa6-VlBO-QgirITwCTugSfKie5Fs/mobilebasic?fbclid=IwAR3Ag8EUNfxEN4ui3Vkx5Cb2IU0VG6ppslRE_T8GVJej1wx4KjF0BAStXqQ"></a> (2020)</li>
            <li><a href="https://open.spotify.com/episode/3iVxO7q0uPZ5NAjUHdqXJq?si=aJpdEA80QymoKJ-I9qRBuw&nd=1&dlsi=f0976fb85dab40a0">Épisode 3 - Congo : Le laboratoire de la barbarie algorithmique (Le Poids du Cloud) (in French)</a> (2025)</li>
            <li><a href="https://virtualcarelab.com/">Virtual Care Lab</a> (2020)</li>
            <li><a href="https://site.sarahgarcin.com/web-frugal/">Une site web frugal</a> (2021)</li>
            <li><a href="https://solar.lowtechmagazine.com/">Low-Tech Magazine</a> (2007)</li>
            <li><a href="https://www.galeriegalerieweb.com/wepinasowina/">wēpināsowina.net</a> (203-2023)</li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

<div id="title-bar-manifesto-container" class="title-bar">
  <div class="title-bar-text">Le Manifeste | The Manifesto</div>
  <div class="title-bar-controls">
  <input id="manifesto-container-close-button" class="close-buttons" type="button" value="X">
  </div>
</div>

 <div id="manifesto-container" class="window">
<!-- content -->
  <div  id="manifesto-content-fr" class="text-lg">
  <i>Il peut exister d'autres façons d'imaginer le cyberspace, non pas comme un lieu né de la cupidité, de la peur et de la faim, mais plutôt comme un lieu de nourrissement. Un lieu où les gens peuvent trouver leurs propres rêves. Pas seulement des fantasmes de fuite, mais des rêves d'humanité et de façons de préserver le territoire.¹ 
<br>(traduction libre)</i>
<br>― Loretta Todd 
<br>
<!-- TO INDENT & SIZE FONTS -->
<br>En 1998, Mark Bernstein lançait Hypertext Gardens², posant les bases du concept de « jardin numérique » ou « digital garden » : un espace en ligne où l’on peut s’aventurer librement, comme dans un parc ou un jardin, un lieu qui invite à la métamorphose, à l’errance, à l’exploration et à la réflexion.³<br>
<br>Aujourd'hui, en 2025, le Web, tout en jouant un rôle central dans l’organisation du monde, est de plus en plus façonné et déformé par des forces capitalistes, coloniales et extractivistes. Les structures technologiques sous-jacentes en sont les témoins et les instruments, influençant tant la manière dont nous communiquons que la manière dont nous consommons.<br>
<br>Pourtant, le Web demeure un médium indiscipliné, un terrain malléable où réside un potentiel subversif. Pour la chercheuse Linda Leung, ce potentiel émerge de la convergence entre production et consommation : le·la producteur·trice est aussi consommateur·trice, et vice-versa — bien que ces pratiques mobilisent des compétences numériques inégales⁴. Chaque acte de navigation devient alors profondément situé : influencé par l’intention, l’humeur, la littératie, la classe sociale ou l’héritage culturel, etc. Selon Leung, utiliser le Web, c’est déjà le façonner. C’est un lieu d’interaction et de co-création, où réel et virtuel s’entrelacent.<br>
<br>Ici, Galerie Galerie, plateforme d’art en ligne à but non lucratif basée à Tio’tia:ke/Mooniyang/Montréal, vous invite à découvrir et à errer dans son propre jardin : le Jardin Manifesto Garden. Ce projet hypermédiatique, conçu comme un manifeste-outil, se déploie à la fois comme une ligne éditoriale, un espace critique, un terrain de jeu et une incitation à l'exploration. Il est micro refuge où est cultivé un Web plus calme, plus organique et plus expérimental, loin des impératifs de rapidité, de captation, de performance et de rentabilité qui dominent les mégaplateformes. Ici, Galerie Galerie revendique une posture résolument positive envers la technologie, tout en reconnaissant ses racines violentes. Car l’Internet, issu de logiques militaires et coloniales, porte encore les traces de ces origines : pollution numérique, chaînes d’approvisionnement opaques, exploitation des corps et des ressources (#Congo). Face à ces systèmes de domination encore à l’œuvre, cultiver des alternatives devient une forme de résistance.
<br>Créé en collaboration avec l’artiste Wawa Li, le Jardin Manifesto Garden de Galerie Galerie se matérialise sous la forme d'un site web artistique bilingue. Il est composé de quatre axes distincts, qui tissent des liens entre des sources existantes et des créations nouvelles réalisées par des collaborateur·trices sur demande. Il favorise le mélange des idées, des pratiques, et des sensibilités, tout en proposant un espace organique et ludique, propice à la déambulation et à l’apprentissage. C’est un lieu qui se veut vivant et évolutif, destiné à semer des alternatives et à encourager la pensée divergente.<br>
<br>La « mort » du Web a été proclamée à plusieurs reprises. En 2013, l’artiste Hito Steyerl se posait la question : Is the internet dead?⁵. Une interrogation qu’elle disait littérale, non métaphorique. Que reste-t-il du Web une fois que sa promesse d’émancipation s’estompe? <br>
<br>Nous croyons qu'il demeure un lieu d’invention critique, d’expression poétique et de création. Et c’est là, précisément, que nous faisons germer notre jardin.<br>
<br>Flânez dans le jardin et SIOUPLAIT, tombez dans le trou du lapin! 🐇
<br>
<br>-- 
<br> ¹ Todd, Loretta. « Aboriginal Narratives in Cyberspace ». Dans Transference, Technology, Tradition: Native New Media, sous la direction de Claxton, Dana, Candice Hopkins, Steven Loft et Melanie Townsend, Banff, Alberta, Canada : Walter Phillips Gallery Editions, 2005, p.152–163.
<br> ² Bernstein, Mark. https://www.eastgate.com/garden/, 1998.
<br> ³ Pour en savoir plus sur les jardins numériques : Appleton, Maggie. A Brief History & Ethos of the Digital Garden. https://maggieappleton.com/garden-history, 2020.
<br> ⁴ Leung, Linda. Virtual Ethnicity: Race, Resistance and the World Wide Web. Londres : Angleterre : Routhledge, 2017.
<br> ⁵ Steyerl, Hito. « Too Much World: Is the Internet Dead? ». e-flux, no 49, 2013.
<br> ⁶ Appleton, Maggie. A Brief History & Ethos of the Digital Garden. https://maggieappleton.com/garden-history, 2020.
<br>
<br>--
<h3>SÉLECTION DES SOURCES</h3>
Pour sélectionner les sources ici partagées, Galerie Galerie a choisi de s'appuyer sur sa communauté et de prendre en compte les enjeux spécifiques liés à sa situation géopolitique. Nous sommes conscientes que ce processus de sélection peut comporter des biais, façonnés par le contexte dans lequel nous évoluons.
Comme le souligne Maggie Appleton, « [...] le savoir et les néologismes vivent toujours au sein des communautés »⁶. Ce jardin est un espace de contribution collective, où chacun·e peut nourrir la conversation, à sa manière.
Si vous souhaitez contribuer à l'enrichissement du Jardin Manifesto Garden, n’hésitez pas à partager vos sources préférées ou vos idées à l’adresse info@galeriegalerieweb.com.

  <h3>CRÉDITS | CREDITS</h3>
<li>Idée originale : Wawa Li, Sophie Latouche, Marie-Charlotte Castonguay-Harvey</li>
<li>Conception web et identitée visuelle : Wawa Li</li>
<li>Texte : Sophie Latouche, Marie-Charlotte Castonguay-Harvey</li>
<li>Oeils extérieurs : Daphné B., Roby Provost-Blanchard</li>
<li>Collaborateurices : Gabrielle Bernatchez, Antoine Thériault, Paris Marx, Ruba Al-Sweel, Ruby Thelot</li>
  <br>
  <br>--
  <br>
  <br>Ce projet est rendu possible grâce au soutien du Conseil des arts de Montréal.
  <br> 
  <!-- ?? mettre dans un div logo pour espacer en bas / plus esthétique -->
   <div id="manifesto-logo-container">
   <a href="https://conseildesarts.ca/"><img class="logo_credits" src="../gg_manifesto-garden/assets/images/Logo_CAM_blanc.png" alt=""></a>
   <img class="logo_credits" src="../gg_manifesto-garden/assets/images/GalerieGalerie_Blanc.png" alt="">
   </div>

  </div>

<!-- ENG CONTENT -->
  <div id="manifesto-content-eng" class="text-lg">
CONTENT MANIFESTO ENG
  </div>

 </div>



 <footer>
 <div id="left-footer-container">
<span id="footnote-title" class="text-body">Footnotes:  </span> <marquee id="scrolling-message" class="text-body">Stroll through the garden and fall down the rabbit hole! Hophop! 🐇</marquee>
</div>

 <div id="right-footer-container">
<img id="logo" src="../gg_manifesto-garden/assets/images/gg_gurl.gif" alt="logo galerie galerie">
<div> 

    <span id="update" class="text-sm">Last Update</span> : <span class="text-sm">05/15/2025</span> 
  </div>
</div>
</footer>

    <!-- HIGH LEVEL ELEMENTS -->
<div id="main">

<!-- TITLE-CONTAINER -->
 <div id="intro-container">

    <div id="title-bar-intro-container" class="title-bar">
    <div class="title-bar-text">Welcome | Bienvenu.es</div>
    <div class="title-bar-controls">
      <input id="index-container-close-button" class="close-buttons" type="button" value="X">
    </div>
</div>

  <div id="intro-container" class="window text-lg">
      <div class="intro-content">
        <p>You just found the Manifesto-Garden. <br> Pick the flower to enter. </p>
        <p>Tu as trouvé le portail du Jardin Manifesto. <br> Récolte la fleur pour entrer. </p>
      </div>
    <!-- PT ENLEVER -->
      <div class="intro-footer">
        <!-- <h4>GG 2025</h4> -->
        <!-- <input id="intro-container-close-button" class="text-md" type="button" value="꧁ Enter the Garden ꧂"> -->
      </div>
  </div>

</div>

<div>
<span id="intro-container-close-button">꧁ ✿ ꧂</span>

<div id="intro-garden-left" class="intro-garden">
&nbsp;&nbsp;&nbsp;✿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✿✿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✿✿&nbsp;✿&nbsp;&nbsp;&nbsp;&nbsp;✿&nbsp;<br>✿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✿<br>
✿✿<br>
<!-- ✿&nbsp;✿✿✿<br> -->
</div>
<div id="intro-garden-right" class="intro-garden">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✿✿&nbsp;&nbsp;✿✿&nbsp;✿&nbsp;&nbsp;&nbsp;✿&nbsp;✿&nbsp;✿<br>
✿&nbsp;&nbsp;&nbsp;✿✿&nbsp;&nbsp;&nbsp; ✿✿&nbsp;✿&nbsp;&nbsp;&nbsp;&nbsp;✿&nbsp;✿&nbsp;
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✿
</div>

</div>

</div> 
  </body>

</html>
