/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById("input")
let convert = document.getElementById("button")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

convert.addEventListener("click", function(meters,feet){
    
    let feetVal = input.value * 3.281
    let metVal=input.value/3.281
    
     let litVal = input.value * .264
    let galVal=input.value/.264
    
     let kiloVal = input.value * 2.204
    let poundVal=input.value/2.204
    

    length.innerHTML = `
                        <h2> Length </h2>
                        <p> ${input.value} meters = ${feetVal.toFixed(3)} feet |
                            ${input.value} feet = ${metVal.toFixed(3)} meters`
                           
                            
    volume.innerHTML =
             `<h2> Volume </h2>
                        <p> ${input.value} liter = ${litVal.toFixed(3)} gallon |
                            ${input.value} gallon = ${galVal.toFixed(3)} liter`
                            
                        mass.innerHTML =
                              `<h2> Mass </h2>
                        <p> ${input.value} kilo = ${kiloVal.toFixed(3)} pound |
                            ${input.value} pound = ${poundVal.toFixed(3)} kilo
                            </div>`
                                       
                        
                        
    
                        
    input.value = ""
}
    
)