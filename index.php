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
<a href="#" id="default-title" class="text-xxl text-align-center"> JARDIN MANIFESTO GARDEN </a>
    <!-- <img id="title-image" src="../gg_manifesto-garden/assets/images/title-test.jpeg" alt="title"> -->
  </div>

  <nav id="buttons-container" class="text-sm">
  <input id="manifesto-button" class="buttons text-sm" type="button" value="Manifesto">
  <input id="share-button" type="button" class="buttons text-sm" value="Share">

  <input id="contribute-button" class="buttons text-sm" type="button" value="Contribute <3">

  <div>Theme: 
    <select id="theme-dropdown"  class="buttons text-sm">
      <option value="theme0">e-garden</option>
      <option value="theme1">bibliography</option>
      <option value="theme2">irl garden</option>
      <option value="theme3">webzine</option>

    </select>
   </div>

  <input id="language-button" class="buttons text-sm" type="button" value="Français">
 </nav>
 </header>

 <div id="title-bar-manifesto-container" class="title-bar">
    <div class="title-bar-text">Table of Content | Table des Matières</div>
    <div class="title-bar-controls">
      <input id="manifesto-container-close-button" class="close-buttons" type="button" value="X">
    </div>
  </div>
 <div id="manifesto-container" class="window text-lg">
  <!-- content -->
  <div>
    <ul class="tree-view">
      <!-- AXIS 1 -->
      <li>
        <h3>BIBLIOGRAPHY | BIBLIOGRAPHIE </h3>
        <details open>
          <summary>nom 1 | name 1</summary>
          <ul>
            <li>lien 1</li>
            <li>lien 2</li>
            <li>lien 3</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 2 -->
      <li>
        <details open>
          <summary>nom 2 | name 2</summary>
          <ul>
            <li>lien 1</li>
            <li>lien 2</li>
            <li>lien 3</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 3 -->
      <li>
        <details open>
          <summary>nom 3 | name 3</summary>
          <ul>
            <li>lien 1</li>
            <li>lien 2</li>
            <li>lien 3</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 4 -->
      <li>
        <details open>
          <summary>nom 4 | name 4</summary>
          <ul>
            <li>lien 1</li>
            <li>lien 2</li>
            <li>lien 3</li>
          </ul>
        </details>
      </li>

      <!-- AXIS 5 -->
      <li>
        <details open>
          <summary>nom 5 | name 5</summary>
          <ul>
            <li>lien 1</li>
            <li>lien 2</li>
            <li>lien 3</li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

<div id="title-bar-credit-container" class="title-bar">
  <div class="title-bar-text">About | À propos</div>
  <div class="title-bar-controls">
  <input id="credits-container-close-button" class="close-buttons" type="button" value="X">
  </div>
</div>
 <div id="credits-container" class="window">
<!-- content -->
  <div class="text-lg">
  Dans l’optique d’encadrer ses orientations organisationnelles à venir, Galerie Galerie, a entrepris la rédaction d’une charte de valeurs et d’une politique interne : Manifesto Garden. Adaptée à la réalité des conditions hypermédiatique de GG, cette charte s’inscrit dans un désir éthique et de bonne pratique, et servira à guider les activités à venir de l’organisme tout en faisant office de prise de position critique face aux réalités politiques, territoriales, économiques et même identitaires du Web et des espaces dits de «metaverse». Défense de la valeur et de la légitimité des pratiques artistiques ancrées dans la matérialité web, protection et utilisation des approches dites “open source” ou de code source ouvert, soutien à la diversité des créateur·trice·s web et à leur agentivité en ligne, utilisation de l’art web comme levier de littératie numérique, développement d’une approche éco responsable quant à l’utilisation de l’Internet à des fins artistiques, etc. : le Manifeste Galerie Galerie, publié au www.galeriegalerieweb.com en 2023, se voudra un outil à la fois réflexif et stratégique, permettant de mieux encadrer les décisions (artistiques, administratives, de gouvernance, logistiques, etc.) de l’organisme, mais aussi, de renforcer sa vision organisationnelle en misant sur des valeurs féministes, décoloniales, inclusives et expérimentales. Avec des engagements clairs et transparents, GG espère ainsi contribuer à la consolidation de pratiques saines en termes de recherche, de production et de commissariat en ligne, et servir d’exemple face à l’utilisation responsable du Web comme un outil de création et de diffusion.
  <h3><li>Special thanks | Remerciements</li></h3>
  <li>contributeur 1</li>
  <li>contributeur 2</li>
  <li>contributeur 3</li>
  <li>contributeur 4</li>
  <br>
  <img class="logo_credits" src="../gg_manifesto-garden/assets/images/GalerieGalerie_Blanc.png" alt="">
  <br>
<img class="logo_credits" src="../gg_manifesto-garden/assets/images/Logo_CAM_blanc.png" alt="">
  </div>
 </div>


 <footer>
 <div id="left-footer-container">
<span id="footnote-title" class="text-body">Footnotes:  </span> <marquee id="scrolling-message" class="text-body">instructions here</marquee>
</div>

 <div id="right-footer-container">
<img id="logo" src="../gg_manifesto-garden/assets/images/gg_gurl.gif" alt="logo galerie galerie">
<div> 

    <span id="update" class="text-sm">Last Update</span> : <span class="text-sm">12/2024</span> 
  </div>
</div>
</footer>

    <!-- HIGH LEVEL ELEMENTS -->
<div id="main">
<!-- TITLE-CONTAINER -->
 <div id="intro-container">
  <div id="intro-container-footer">
    <input id="intro-container-close-button" class="text-md" type="button" value="꧁ Enter the Garden꧂">
  </div>
</div>

</div> 
  </body>

</html>
