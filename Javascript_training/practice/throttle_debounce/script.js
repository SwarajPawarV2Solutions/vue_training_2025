
const input  = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce( text => {
  debounceText.textContent = text
})

// after write one letter this function fires everytime
input.addEventListener("input",e => {
    defaultText.textContent = e.target.value
})

// cb = call back function
function debounce(cb , delay = 1000) {
  return(...args) => {
    setTimeout(() => {
        cb(...args)
    }, delay)
  }
}