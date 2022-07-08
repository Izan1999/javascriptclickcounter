var clicks = 0;

function aumentar(){
  clicks += 1;
  
  document.getElementById("clicks").innerHTML = clicks;
}

function disminuir(){
  clicks -= 1;
  
  document.getElementById("clicks").innerHTML = clicks;
}
