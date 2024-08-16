/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let convertedFt = document.getElementById("converted-feet")
let convertedGal = document.getElementById("converted-gallon")
let convertedLb = document.getElementById("converted-pound")




convertBtn.addEventListener("click", function convert(){
    let inputValue = document.getElementById("input-value").value
    const numberValue = Number(inputValue)
    if (isNaN(numberValue)){
        alert("Please enter a valid number")
        return
    }
    const ftToM = numberValue / 3.281
    const roundedM = ftToM.toFixed(3)

    const galToL = numberValue / 0.264
    const roundedL = galToL.toFixed(3)

    const lbToKg = numberValue / 2.204
    const roundedKg = lbToKg.toFixed(3)

    convertedFt.innerHTML = `<p>${inputValue}ft = ${roundedM}m |
                                ${roundedM}m = ${inputValue}ft</p>`
    convertedGal.innerHTML = `<p>${inputValue}gal = ${roundedL}L |
                                ${roundedL}L = ${inputValue}gal</p>`
    convertedLb.innerHTML = `<p>${inputValue}lb = ${roundedKg}kg |
                                ${roundedKg}kg = ${inputValue}lb</p>`
})




