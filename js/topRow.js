var update = setInterval(updatesize, 100)
function updatesize() {
  document.getElementById("box").style.left =  0.5 * (window.innerWidth - document.getElementById("title").style.width) + "px"
}
