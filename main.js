const COLORS = [
  '#c91f37', '#dc3023', '#9d2933', '#cf000f', '#e68364', '#f22613', '#cf3a24', '#c3272b', '#8f1d21',
  '#d24d57', '#f08f90', '#f47983', '#db5a6b', '#c93756', '#fcc9b9', '#ffb3a7', '#f62459', '#f58f84',
  '#875f9a', '#5d3f6a', '#89729e', '#763568', '#8d608c', '#a87ca0', '#5b3256', '#bf55ec', '#8e44ad', '#9b59b6', '#be90d4',
  '#4d8fac', '#5d8cae', '#22a7f0', '#19b5fe', '#59abe3', '#48929b', '#317589', '#89c4f4', '#4b77be', '#1f4788', '#003171', '#044f67', '#264348',
  '#7a942e', '#8db255', '#5b8930', '#6b9362', '#407a52', '#006442', '#87d37c', '#26a65b', '#26c281', '#049372', '#2abb9b', '#16a085', '#36d7b7', '#03a678', '#4daf7c',
  '#d9b611', '#f3c13a', '#f7ca18', '#e2b13c', '#a17917', '#f5d76e', '#f4d03f',
  '#ffa400', '#e08a1e', '#ffb61e', '#faa945', '#ffa631', '#ffb94e', '#e29c45', '#f9690e', '#ca6924', '#f5ab35',
  '#bfbfbf', '#f2f1ef', '#bdc3c7', '#ecf0f1', '#d2d7d3', '#757d75', '#eeeeee', '#abb7b7', '#6c7a89', '#95a5a6'
]

const COLORS2 = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"]

const COLORS3 = COLORS.concat(COLORS2)

Array.prototype.randomColor = function() {
  return this[Math.floor(Math.random() * this.length)]
}

const app = document.getElementById('app')
const btn = document.getElementById('btn')

let z = 333
let s = 0

document.addEventListener('keydown', function(event) {
  if (event.which === 13) {
    const input = document.getElementsByTagName('input')[0].classList.add('fadeOut')
    setTimeout(function() {
      makeLayer()
    }, 660)
  }
})

function makeLayer() {
  const name = document.getElementsByTagName('input')[0].value.toLowerCase()
  for (let i = 0; i < 200 / name.length; i++) {
    setTimeout(function() {
      const layer = document.createElement('div')
      let str = ''
      let width = (1 / name.length).toFixed(2) * 100
      for (let letter in name)
        str += `<span style='width:${name[letter] === 'm' || name[i] === 'w' ? width + 4 : width}%'>${name[letter]}</span>`
      layer.innerHTML = str
      layer.style.color = COLORS3.randomColor()
      layer.style.zIndex = --z
      layer.style.fontSize = ++i + 'em'
      app.appendChild(layer)
    }, i * 15)
  }
  if (!btn.classList.length) {
    setTimeout(function() {
     btn.classList.add('fadeIn')
   },1000)
 }
}


function makeAnotherLayer() {
  if (app.childElementCount) {
    while (app.hasChildNodes())
      app.removeChild(app.firstChild)
  }
  setTimeout(function() {
    makeLayer()
  }, 100)
}

btn.addEventListener('click', function(event) {
  makeAnotherLayer()
})


// $(document).keypress(function (e) {
//     if (e.which == 13) {
//         alert('enter key is pressed');
//     }
// });




// var name = prompt('name?')

// app.addEventListener('click', function() {
//   return makeLayer(name)
// })


// const app = document.getElementById('app')
// let z = 100
// let w = 2
// let h = 2
//
// app.addEventListener('click', function() {
//   const layer = document.createElement('div')
//   layer.style.backgroundColor = COLORS.randomColor()
//   layer.style.zIndex = --z
//   layer.style.width = ++w + '%'
//   layer.style.height = ++h + '%'
//   app.appendChild(layer)
// })
