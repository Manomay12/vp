//Create variables here
var     d1,b,b1,d,da,f;
function preload()
{
	//load images here
d1=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
 d=createSprite(200,200,20,20) 
 d.addImage("a",d1)
 d.scale=0.5

b=createButton()
b.html("feeddog")
b.position(700,300)
b1=createButton()
b1.html("addstok")
b1.position(700,390)

da=firebase.database()
da.ref("food").on("value",function(data){
f=data.val()
})
b.mousePressed(feed)
b1.mousePressed(addstock)
}


function draw() {  

  drawSprites();
  //add styles here

}
function feed(){
f=f-1
da.ref("/").update({food:f})
}
function addstock(){
  f=f+1
  da.ref("/").update({food:f})
  }
  

