var update = setInterval(updatesize, 1)
function updatesize() {
  document.getElementById("box").style.width = document.getElementById("title").offsetWidth + "px"
  document.getElementById("box").style.left =  0.5 * (window.innerWidth - (document.getElementById("box").style.width.replace("px", ""))) + "px"
  document.getElementById("box").style.height = window.innerHeight * (60/678) + "px";document.getElementById("topRow").style.height = window.innerHeight * (60/678) + "px"
  document.getElementById('navmenu').style.top = parseFloat(document.getElementById("box").style.height) + 23 + "px"
}
