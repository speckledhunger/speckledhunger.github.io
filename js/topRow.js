var update = setInterval(updatesize, 100)
var wide = ""
function updatesize() {
  document.getElementById("box").style.width = document.getElementById("title").innerHTML.length
  document.getElementById("box").style.left =  0.5 * (window.innerWidth - (document.getElementById("box").style.width - "px")) + "px"
}
