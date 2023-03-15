const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const clearBtn = document.getElementById("clear-btn")

convertBtn.addEventListener("click", function() {
    lengthEl.textContent = `${inputEl.textContent} meters = 
    ${(inputEl.textContent * 3.281).toFixed(3)} feet | 
    ${inputEl.textContent} feet = 
    ${(inputEl.textContent / 3.281).toFixed(3)} meters`

    volumeEl.textContent = `${inputEl.textContent} liters = 
    ${(inputEl.textContent * 0.264).toFixed(3)} gallons | 
    ${inputEl.textContent} gallons = 
    ${(inputEl.textContent / 0.264).toFixed(3)} liters`

    massEl.textContent = `${inputEl.textContent} kilos = 
    ${(inputEl.textContent * 2.204).toFixed(3)} pounds | 
    ${inputEl.textContent} pounds = 
    ${(inputEl.textContent / 2.204).toFixed(3)} kilos`
})

clearBtn.addEventListener("click", function() {
    inputEl.textContent = ""
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/