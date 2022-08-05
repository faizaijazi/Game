function playerDetail(){
  alert("Player 1 Keys!\nForward = Right Key\nBack = Left Key\nKick = A")
}
function playerDetail2(){
  alert("Player 2 Keys!\nnone")
}



var count = 300;
window.onkeydown = function () {
  var character = document.getElementById("character_a");
  if (event.keyCode === 39) {
    character.src = "acids/walk.gif";
    count = count + 50;
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "acids/still.gif";
    }, 100);
  }
  
  if (event.keyCode === 37) {
    character.src = "acids/walk.gif";
    count = count - 50;
    character.style.left = count + "px";
    setTimeout(function () {
        character.src("acids/still.gif")
    }, 100) 
  }

  if (event.keyCode === 65) {
    character.src = "acids/fight.gif";
    setTimeout(function () {
        character.src = "acids/still.gif";
    }, 800) 
  }


}  