function setup() {
  print('Hello world!');
  createCanvas(435,435);
}

function draw() {
    background(220, 172, 250);
    const call = 'hello? hello? hello? hello? hello?';
    textSize(30);
    textWrap(CHAR); // textWrap(wrapStyle) avec wrapStyle : WORD or CHAR
    fill(255, 255, 255); // fill(v1, v2, v3, [alpha]) avec v1 : red ou hue, v2 : green ou saturation et v3 : blue ou brightness
    text(call, 0, 0, 435); // text(str, x, y, [x2], [y2]) avec x et y des coordonnées et x2 et y2 la largeur et la longueur de la text box
    fill(255, 255, 255, 95);
    text(call, 0, 25, 435);
    fill(255, 255, 255, 90);
    text(call, 0, 50, 435);
    fill(255, 255, 255, 85);
    text(call, 0, 75, 435);
    fill(255, 255, 255, 80);
    text(call, 0, 100, 435);
    fill(255, 255, 255, 75);
    text(call, 0, 125, 435);
    fill(255, 255, 255, 70);
    text(call, 0, 150, 435);
    fill(255, 255, 255, 65);
    text(call, 0, 175, 435);
    fill(255, 255, 255, 60);
    text(call, 0, 200, 435);
    fill(255, 255, 255, 55);
    text(call, 0, 225, 435);
    fill(255, 255, 255, 50);
    text(call, 0, 250, 435);
    fill(255, 255, 255, 45);
    text(call, 0, 275, 435);
    fill(255, 255, 255, 40);
    text(call, 0, 300, 435);
    fill(255, 255, 255, 35);
    text(call, 0, 325, 435);
    fill(255, 255, 255, 30);
    text(call, 0, 350, 435);
    fill(255, 255, 255, 25);
    text(call, 0, 375, 435);
    fill(255, 255, 255, 20);
    text(call, 0, 400, 435);
    fill(255, 255, 255, 15);
    text(call, 0, 425, 435);
    fill(255, 255, 255, 10);
    text(call, 0, 450, 435);
    strokeWeight(2); // strokeWeight(weight)
    ellipseMode(CENTER); // ellipseMode(mode) avec mode : CENTER, RADIUS, CORNER, or CORNERS
    fill(255);
    ellipse(415, 401, 15); // ellipse(x, y, w, [h])
    fill(0);
    ellipse(411, 398, 1); // oeil gauche
    ellipse(419, 398, 1); // oeil droit
    ellipse(415, 403, 5); // bouche
    line(415, 410, 415, 420); // line(x1, y1, x2, y2)
    line(415, 415, 405, 410); // bras gauche
    line(415, 415, 425, 410); // bras droit
    line(415, 420, 410, 430); // jambe gauche
    line(415, 420, 420, 430); // jambe droite
    line(421, 409, 426, 409); // bas téléphone
    line(426, 409, 428, 403); // haut téléphone

}

/* README

code d'origine :
const scream = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
textSize(20);
textWrap(WORD);
text(scream, 0, 0, 100);
fill(0, 0, 0, 75);
text(scream, 0, 20, 100);
fill(0, 0, 0, 50);
text(scream, 0, 40, 100);
fill(0, 0, 0, 25);
text(scream, 0, 60, 100);
strokeWeight(2);
ellipseMode(CENTER);
fill(255);
ellipse(15, 50, 15, 15);
fill(0);
ellipse(11, 47, 1, 1);
ellipse(19, 47, 1, 1);
ellipse(15, 52, 5, 5);
line(15, 60, 15, 70);
line(15, 65, 5, 55);
line(15, 65, 25, 55);
line(15, 70, 10, 80);
line(15, 70, 20, 80);

de : https://p5js.org/reference/#/p5/textWrap

I've produced an horror/funny picture depending on how you see it. It's a very small character which is stuck and desperately calls for help but he's alone.
It was easy to use, the names of the functions are very explicit and easy to understand at first sight.
I found it very similar to read and write this code because, as I said, it was really simple to understand.
Code and programming can be used in so manhy different fields to do a lot of different things so it's very broad and I really appreciate it.

*/