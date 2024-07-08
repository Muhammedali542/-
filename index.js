let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
	let countStr = count + " - "
	saveEl.textConent += countStr // we can use textconten instead of innertext to define it in the html and as well read it as string not a number 
	countEl.textContent = 0 // after saviing that meke the value 0 
	count = 0  // after saving and recount that reset the value to sart counting from 0 again 
}

console.log("Let's count people on the subway!")
