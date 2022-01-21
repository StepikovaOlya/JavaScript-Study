"use strict";

const board = document.querySelector('#board')
const colors = ['#FDFFBC', '#FFEEBB', '#FFDCB8', '#FCFFA6']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
        setColor(square))

    square.addEventListener('mouseleave', () =>
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
}

function removeColor(element) {
    element.style.background = 'initial'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

function dragend (event) {
    event.target.className = 'item'
}

function dragover (event) {
    event.preventDefault()
}

function dragenter (event) {
    event.target.classList.add('hovered')
}

function dragleave (event) {
    event.target.classList.remove('hovered')
}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}
