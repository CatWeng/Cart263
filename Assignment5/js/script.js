/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

"use strict";

let gems = [
  "actinolite",
  "adamite",
  "aegerine",
  "afghanite",
  "agardite",
  "agate",
  "ajoite",
  "alabaster",
  "albite",
  "alexandrite",
  "almandine",
  "alunite",
  "amazonite",
  "amber",
  "amethyst",
  "ametrine",
  "ammolite",
  "analcime",
  "anatase",
  "andalusite",
  "andesine",
  "andradite",
  "anglesite",
  "anhydrite",
  "ankerite",
  "annabergite",
  "anthophyllite",
  "antigorite",
  "antlerite",
  "anyolite",
  "apache tears",
  "apophyllite",
  "aquamarine",
  "aragonite",
  "astrophyllite",
  "atacamite",
  "augite",
  "aurichalcite",
  "austinite",
  "aventurine",
  "axinite",
  "azurite",
  "barite",
  "baryte",
  "bauxite",
  "bayldonite",
  "benitoite",
  "beryl",
  "beudantite",
  "biotite",
  "bixbite",
  "blue amber",
  "boleite",
  "bone",
  "boracite",
  "bornite",
  "botallackite",
  "botryogen",
  "bowenite",
  "brazilianite",
  "brochantite",
  "bronzite",
  "brookite",
  "brucite",
  "bubblegram",
  "bytownite",
  "cacoxenite",
  "calcite",
  "caledonite",
  "californite",
  "carletonite",
  "carminite",
  "carnallite",
  "carnelian",
  "cassiterite",
  "castorite",
  "cavansite",
  "celestine",
  "celestite",
  "cerussite",
  "ceylonite",
  "chalcedony",
  "chalcopyrite",
  "chambersite",
  "charoite",
  "chlorastrolite",
  "chloromelanite",
  "chondrodite",
  "chrysoberyl",
  "chrysocolla",
  "chrysotile",
  "cinnabar",
  "citrine",
  "clinochlore",
  "clinohumite",
  "clinozoisite",
  "clintonite",
  "conichalcite",
  "copal",
  "coral",
  "cordierite",
  "corundum",
  "creedite",
  "crocidolite",
  "cummingtonite",
  "cuprite",
  "cymophane",
  "danburite",
  "datolite",
  "diaboleite",
  "diamond",
  "diaspore",
  "diopside",
  "dioptase",
  "dolomite",
  "dravite",
  "druzy",
  "dumortierite",
  "eilat stone",
  "ekanite",
  "elaeolite",
  "elbaite",
  "emerald",
  "enstatite",
  "epidosite",
  "epidote",
  "erythrite",
  "esperite",
  "fayalite",
  "feldspar",
  "ferroaxinite",
  "flint",
  "fluorapatite",
  "fluorapophyllite",
  "fluorite",
  "forsterite",
  "garnet",
  "garnierite",
  "gibbsite",
  "glaucophane",
  "goethite",
  "goshenite",
  "grandidierite",
  "grossular",
  "gypsum",
  "halite",
  "hambergite",
  "hanksite",
  "hardystonite",
  "hauyne",
  "helenite",
  "heliodor",
  "hematite",
  "hemimorphite",
  "hessonite",
  "hibonite",
  "hiddenite",
  "humite",
  "iddingsite",
  "idocrase",
  "iolite",
  "ivory",
  "jacinth",
  "jade",
  "jadeite",
  "jarosite",
  "jasper",
  "jeremejevite",
  "jet",
  "kainite",
  "kidney ore",
  "kimberlite",
  "kornerupine",
  "kunzite",
  "kutnohorite",
  "kyanite",
  "labradorite",
  "lammerite",
  "langbeinite",
  "langite",
  "lapis lazuli",
  "larimar",
  "lawsonite",
  "lazurite",
  "leadhillite",
  "lechatelierite",
  "legrandite",
  "lepidolite",
  "leucophanite",
  "linarite",
  "londonite",
  "magnesioaxinite",
  "magnesite",
  "malachite",
  "manganaxinite",
  "manganoan calcite",
  "maw sit sit",
  "melanterite",
  "mendipite",
  "milky quartz",
  "mimetite",
  "moissanite",
  "mookaite",
  "moonstone",
  "morganite",
  "muscovite",
  "musgravite",
  "nacre",
  "natrophilite",
  "nepheline",
  "nephrite",
  "nimite",
  "normandite",
  "obsidian",
  "olenite",
  "olivenite",
  "olivine",
  "olivinite",
  "onyx",
  "opal",
  "orthoclase",
  "pallasite",
  "pantellerite",
  "papagoite",
  "pargasite",
  "pearl",
  "pectolite",
  "peridot",
  "peridotite",
  "petalite",
  "petoskey stone",
  "pezzottaite",
  "pharmacosiderite",
  "phlogopite",
  "phosgenite",
  "pietersite",
  "pimelite",
  "plancheite",
  "plumbogummite",
  "pollucite",
  "polyhalite",
  "posnjakite",
  "poudretteite",
  "prasiolite",
  "prehnite",
  "proustite",
  "pumpellyite",
  "purpurite",
  "pyrite",
  "pyromorphite",
  "pyrope",
  "pyrrhotite",
  "quartz",
  "raspite",
  "rhodizite",
  "rhodochrosite",
  "riebeckite",
  "rosasite",
  "rose quartz",
  "rossmanite",
  "rubellite",
  "ruby",
  "rutile",
  "sapphire",
  "sardonyx",
  "scapolite",
  "scheelite",
  "schorlomite",
  "scolecite",
  "scorodite",
  "selenite",
  "seraphinite",
  "serendibite",
  "serpentite",
  "shattuckite",
  "shigaite",
  "siderite",
  "smithsonite",
  "smoky quartz",
  "soapstone",
  "sodalite",
  "spessartine",
  "spessartite",
  "sphene",
  "spherocobaltite",
  "spinel",
  "spodumene",
  "steatite",
  "stichtite",
  "stilbite",
  "stishovite",
  "stolzite",
  "strengite",
  "sugilite",
  "sunstone",
  "susannite",
  "sylvite",
  "sérandite",
  "taaffeite",
  "tactite",
  "talc",
  "tantalite",
  "tanzanite",
  "thomsonite",
  "thulite",
  "tiger's-eye",
  "tinaksite",
  "tinzenite",
  "titanite",
  "topaz",
  "tourmaline",
  "tremolite",
  "trinitite",
  "tsavorite",
  "tschermakite",
  "tugtupite",
  "turquoise",
  "tusionite",
  "tyrolite",
  "unakite",
  "uvarovite",
  "vanadinite",
  "variscite",
  "vauxite",
  "vermiculite",
  "vesuvianite",
  "villiaumite",
  "wakefieldite",
  "wavellite",
  "weloganite",
  "wolfenite",
  "xenotime",
  "yttrium aluminium garnet",
  "zektzerite",
  "zeolite",
  "zincite",
  "zinnwaldite",
  "zircon",
  "zoisite"
];
let correctGem = "zoisite";
let answers = [];
const NUM_OPTIONS = 6;
let points = 0;

$(document).ready(setup);

function setup() {
  $('#begin').on('click', startGame);
  }

function startGame() {
  $('#begin').remove();
  newRound();
//  console.log("Starting the game!");

  if (annyang) {
    if (annyang) {
         var commands = {
           'Say it again': function(){
             //pretty self explanatory
               speakGem(correctGem);
           },

           'I give up': function() {
             //reset points
             points = 0;
             keepScore();
             //shakes correcct gem
             $('.guess').each(function () {
           if ($(this).text() === correctGem){
             $(this).effect('shake');
           }
         });
             setTimeout(function() {
               $('.guess').remove();
             }, 500);
             setTimeout(newRound,500);
           },
        'i think it is *gem': function(guessed) {
          $('.guess').each(function () {
            if ($(this).text() === guessed){
              if ($(this).text() === correctGem) {
                $('.guess').remove();
                points += 1;
                keepScore();
                setTimeout(newRound,500);
              }
              else {
                $(this).effect('shake');
                speakGem(correctGem);
                points = 0;
                keepScore();
              }
            }
          });
        }
      }
         annyang.addCommands(commands);
         annyang.start();
     }
   }
}

function newRound() {
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
   let answer = gems[Math.floor(Math.random() * gems.length)];
   addButton(answer);
   answers.push(answer);
 }
 correctGem = answers[Math.floor(Math.random() * answers.length)];
 speakGem(correctGem);
}

function addButton(label) {
  let $button = $('<div class="guess"></div>');
  $button.text(label);
  $button.button();
  $button.on('click',function () {
    if ($(this).text() === correctGem) {
      $('.guess').remove(); // NEW
      setTimeout(newRound,500); // NEW
      points +=1;
      keepScore();
    }
    else {
     $(this).effect('shake');
     speakGem(correctGem);
     points = 0;
     keepScore();
    }
  });
  $('body').append($button);
}

function speakGem(name) {
  let reverseGem = name.split('').reverse().join('');
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };
  responsiveVoice.speak(reverseGem,'UK English Female',options);
}

function keepScore(){
  $('#scoreNumber').text(points);
}

function giveUp() {

}
