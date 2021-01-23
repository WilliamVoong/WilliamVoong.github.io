$(document).ready(hideElem("button"));
var progressbarVal = 0
function fun(){
  let  x = document.getElementById('textelem');
  let  heading = document.getElementById('textReact');
  for(let step = 0; step < 5 ; step++){
    heading.textContent = x.value + heading.textContent;
  }
}
var heading = document.getElementById('textReact');
function jumpToPage(page){
  window.location.href = page;
}
function hideElem(tag){
  $(tag).hide()
}
function showElem(tag){
  $(tag).show()
}
function progressBar(){
  let progress= document.getElementById("p1");
  var x = $("#p1").attr("aria-valuenow", progressbarVal); 
  var x = $("#p1").css("width", progressbarVal + "%"); 
  progressbarVal += 1
  console.log(x);
}
function draw(event){
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  console.log(event.x);
  ctx.fillStyle = 'rgb(0,0,255)';
  ctx.fillRect(event.x,event.y,5,5);
  ctx.fillRect(30,30,10,10);
}
var canvas = document.getElementById("myCanvas");
canvas.addEventListener("mousedown", function(e){
  canvas.onmousemove= function(e){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.x,e.y); 
    setTimeout(function (){
      ctx.lineTo(e.x,e.y);
      ctx.stroke();
    } , 1000);
    
  }
});

canvas.addEventListener("mouseup", function(e){
  canvas.onmousemove=null;
})
