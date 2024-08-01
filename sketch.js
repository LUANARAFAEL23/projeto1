

function setup() {

  createCanvas(600, 600);

}

function draw() {

  background("pink");

  fill("lightpink");

  textSize(50);

  textAlign(CENTER,CENTER);

  let maximo = width;

  let manimo = 0;

  let palavra = "EU AMO SORA <3";

  let aparecer = map(mouseX, 0, width,1, palavra.length);

  let inicio = palavra.substring(0,aparecer);

  text(inicio, 300, 300);

}



