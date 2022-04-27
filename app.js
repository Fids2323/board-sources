const board = document.querySelector('#board')
const colors = ['#e8fc08', '#fc2d3b', '#g24f0ff', '#41ff24', '#edff24', '#fb24ff', '#f7890a', '#650af7']
const SQUARES_NUMBER = 416

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div') //create tag
	square.classList.add('square')

	square.addEventListener('mouseover', setColor
	)
	square.addEventListener('mouseleave', removeColor
	)
	board.append(square)
}

function setColor(event) {
	const element = event.target
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}
function removeColor(event) {
	const element = event.target
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
	//const index = Math.floor(Math.random() * colors.length)
	//return colors[index]
	return colors[Math.floor(Math.random() * colors.length)]
}