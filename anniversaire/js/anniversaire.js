// création des variables objets des éléments que l'on va manipuler à répétition
var happyBirthdayRectangleElt = document.getElementById('happyBirthdayRectangle');
var happyBirthdaySmallRectangle = $('.HappyBirthdaySmallRectangle');

// Afin de ne pas ralentir le chargement de la page,
// on déclare une fonction anonyme au moment ou celle-ci à fini de charger
// Puis on prépare le son avec un objet audio
// qui permet d'ajuster les réglages (volume, autoplay..)
// et on déclare la fonction de détection du clic qui va
// lancer le son à ce moment pour être sur que tout est prêt 
// au moment du clic
$(document).ready(function()
{
    var obj = document.createElement("audio");
    obj.src = "sounds/party_horn-Mike_Koenig.mp3";
    obj.volume = 1;
    obj.autoplay = false;
    obj.preLoad = true;
    obj.control = false;

    $('.HappyBirthdaySmallRectangle:eq(2)').on('click', function(){
        obj.play();
    })
});


// frame d'animation qui va permettre de faire clignoter la couleur
// du premier rectangle en alternant le rouge et le vert
function flashHappyBirthdayRectangle(){
    var styleRectangle = window.getComputedStyle(happyBirthdayRectangleElt);
    var styleRectangleBackgroundColor = styleRectangle.getPropertyValue("color");
    if (styleRectangleBackgroundColor === "rgb(255, 0, 0)"){
        setTimeout(function(){$('#happyBirthdayRectangle').css('color', '#AFE309');}, 200);
        
    }
    else {
        setTimeout(function(){$('#happyBirthdayRectangle').css('color', 'red');}, 200);
    }
    requestAnimationFrame(flashHappyBirthdayRectangle);
}


// série d'évènements click qui vont faire apparaitre le bouton suivant
$('#happyBirthdayRectangle').on('click', function(event){
    $('.HappyBirthdaySmallRectangle:eq(0)').fadeIn();
    $('.HappyBirthdaySmallRectangle:eq(0)').css('background-color', 'rgb(255, 168, 168)');  
});


$('.HappyBirthdaySmallRectangle:eq(0)').on('click', function(event){
    $('.HappyBirthdaySmallRectangle:eq(1)').css('background-color', 'rgb(237, 127, 255)');  
    $('.HappyBirthdaySmallRectangle:eq(1)').fadeIn();
});


$('.HappyBirthdaySmallRectangle:eq(1)').on('click', function(event){
    $('.HappyBirthdaySmallRectangle:eq(2)').css('background-color', 'rgb(158, 255, 117)');  
    $('.HappyBirthdaySmallRectangle:eq(2)').fadeIn();
});


$('.HappyBirthdaySmallRectangle:eq(2)').on('click', function(event){
    $('#happyBirthdayRectangle').css('color', '#AFE309');
    $('#happyBirthdayRectangle').css('font-weight', 'bold');
    requestAnimationFrame(flashHappyBirthdayRectangle);
    $('#card').css('background', 'url("img/birthday-card.jpg")');
    $('#card').css('background-size', 'cover');

    // selection de l'ensemble des boutons de la classe HappyBirthdaySmallRectangle
    // et appel de la méthode fadeOut()
    $('.HappyBirthdaySmallRectangle').fadeOut();
});