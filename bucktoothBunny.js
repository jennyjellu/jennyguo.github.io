function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); 

  // Bunny Ears
  stroke(0);
  fill(255);
  ellipse(150, 70, 60, 120);  // left ear
  ellipse(240, 70, 60, 120);  // right ear

  // Bunny Face
  ellipse(200, 170, 150, 150); 

  // Eyes
  var eyesize = 9;
  fill(0);
  ellipse(170, 150, eyesize, eyesize); 
  ellipse(230, 150, eyesize, eyesize); 

  // Mouth
  line(150, 200, 250, 200);   

  // Teeth
  fill(255);
  var teethsize = 30; 
  rect(185, 200, 15, teethsize); 
  rect(200, 200, 15, teethsize); 
}
