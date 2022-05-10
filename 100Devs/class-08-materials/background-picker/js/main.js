document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed
document.getElementById('pink').onclick = partyPink



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'purple'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'green'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255,1)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(255, 10, 10,1)'
  document.querySelector('body').style.color = 'red'
}

function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgba(243, 1, 211,1)'
  document.querySelector('body').style.color = 'pink'
}

