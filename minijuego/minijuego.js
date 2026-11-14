let personaje;
let balas = [];
let vida;


function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);

  personaje = new Personaje(width/2, height -40);
}


function draw() {
  background(0, 0, 12);

  personaje.mover();
  personaje. dibujar();

  if (random(1) < 0.05) {
    balas.push(new Bala(random(width), -20));
  }

  for (let i = balas.length - 1; i >= 0; i--) {
    balas[i].mover();
    balas[i].dibujar();

    if (personaje.colision(balas[i])) {
      personaje.cambiarColor();
      balas.splice(i, 1);
    } else if (balas [i].fueraDePantalla()) {
      balas.splice(i, 1);
    }
  }
}
