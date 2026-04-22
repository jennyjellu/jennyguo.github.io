function setup() {
  // This creates the drawing area
  createCanvas(400, 400);
}

function draw() {
  background(220); // Light gray background

  // Bunny Ears
  fill(255);
  ellipse(150, 70, 60, 120);  // left ear
  ellipse(240, 70, 60, 120);  // right ear

  // Bunny Face
  ellipse(200, 170, 150, 150); 

  // Eyes
  var eyesize = 9;
  fill(0);
  ellipse(170, 150, eyesize, eyesize);  // left eye
  ellipse(230, 150, eyesize, eyesize);  // right eye

  // Mouth and Teeth
  line(150, 200, 250, 200);   // mouth line

  fill(255); // White teeth
  var teethsize = 30; 
  rect(185, 200, 15, teethsize); // left tooth
  rect(200, 200, 15, teethsize); // right tooth
}
