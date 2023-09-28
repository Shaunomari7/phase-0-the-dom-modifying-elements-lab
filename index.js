// Write your code here!
let noMain = document.querySelector('main')
noMain.remove()

let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerText= "SHAUN is the champion"
document.body.append(newHeader)

