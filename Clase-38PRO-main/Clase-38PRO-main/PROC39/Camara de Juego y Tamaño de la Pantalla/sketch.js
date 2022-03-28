var database, canvas;

var gameState =0;
var playerCount=0;
var distance=0;

var form1, game1 ;
var form2
var allplayers, player1;
var matrixCar
var car1, car1img
var car2, car2img
var car3,car3img
var car4,car4img
var track,trackimg


function preload() {
    car1img=loadImage("Sprites/car1.png")
    car2img=loadImage("Sprites/car1.png")
    car3img=loadImage("Sprites/car2.png")
    car4img=loadImage("Sprites/car3.png")
    trackimg=loadImage("Sprites/track.jpeg")
}

function setup(){
    canvas = createCanvas(displayWidth -20,  displayHeight-30); //Ajusta automáticamente el tamaño de la pantalla del dispositivo
    database = firebase.database(); //Crea una base de datos en firebase

    game1 = new Game();
    console.log("PASO 1: game1.getState()");
    game1.getState();

    console.log("PASO 2: game1.start()");
    game1.start();
}//Fin setup


function draw(){
   background(205, 92, 92); //RGB rojoIndian
    
    if(playerCount === 4){
        game1.update(1); //Actualiza el estado del juego, pasando 1 como parámetro a la función update de Game.js
    }//Fin if

    if(gameState === 1){
        clear(); {}
        game1.play(); //Manda a llamar la función play() de Game.js
    }//Fin if
    if (gameState===2){
        game1.end()
    //    form2=new form2()
      //  form2.display()
    }
}//Fin draw

