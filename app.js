const dicesText = document.getElementById("dices-text");
const dicesImages = document.getElementById("dices-images");

function generateValues(values, images, numOfDice) {
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6)  + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`)
    }
}

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const values = [];
    const images = [];
    generateValues(values, images, numOfDice);
    dicesText.textContent = "dices: " + values.join(", ");
    dicesImages.innerHTML = images.join("");
}