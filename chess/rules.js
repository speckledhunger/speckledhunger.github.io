function phase_2() {
  if (piece === "White Pawn") {
    document.getElementById(parseInt(square.replace("_", "")) + 9).style.backgroundColor = "#FF8466"
    document.getElementById(parseInt(square.replace("_", "")) + 9).style.backgroundColor = "#FF8466"
  }
  phase = 3
  move_piece()
}
