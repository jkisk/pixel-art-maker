
//build canvas
const container =
    document.querySelector('.container')

for (let i = 0; i < 1518; i++) {
    let pixel = `<div class= "box"></div>`
    container.innerHTML += pixel
}
//available colors
const colors = ['orange', 'yellow', 'green', 'lightblue', 'blue', 'purple', 'red']

//build palettte
const footer = document.querySelector('footer')

for (let i = 0; i < colors.length; i++) {
    let paintSwatch = `<div class="swatch ${colors[i]}" data-color="${colors[i]}"></div>`
    footer.innerHTML += paintSwatch
}
//choose brushcolor and set color indicator
let brushHead = "orange"
const colorPicker = document.querySelector('footer')
colorPicker.addEventListener('click', function (event) {
    brushHead = event.target.dataset.color
    let sidebar = document.querySelector("sidebar")
    sidebar.innerHTML = `<div><h3 class="${brushHead}">  Color = ${brushHead}</h3></div>`
})

//paint
const paintBoxes = document.querySelectorAll(".box")

for (let i of paintBoxes) {
    i.addEventListener("click", function () {
        i.classList.toggle(brushHead)
    })

}


