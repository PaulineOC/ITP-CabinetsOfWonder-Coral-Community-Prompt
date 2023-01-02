let ctx;

//Image resources:
let oceanBg;
let welcomeScreen;

let bgSound;

function preload() {
  oceanBg = loadImage('Assets/ocean.png');
  welcome = loadImage('Assets/welcome.png');
  soundFormats('mp3');
  // bgSound = loadSound(soundPath);
  // bgSound.setVolume(5);
};

function setup() {
  console.log("Setup");
  ctx = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  image(oceanBg, 0,0, window.innerWidth, window.innerHeight);
  drawBeginningText();
}

function drawBeginningText(){
  textSize(FONT_SIZE);
  const phrase1 = `Thanks for visiting!`;
  textSize(FONT_SIZE2);
  const phrase1Width = textWidth(phrase1);
  const phrase2 = `Place your coral in the community reef to commemorate your visit.`;
  const phrase2Width = textWidth(phrase2);
  text(phrase1, window.innerWidth/2-phrase1Width/2, window.innerHeight/2-FONT_SIZE);
  text(phrase2, window.innerWidth/2-phrase2Width/2, window.innerHeight/2+FONT_SIZE);
}