const aviationAlphabet = {
    'A': 'Alpha', 'B': 'Bravo', 'C': 'Charlie', 'D': 'Delta', 
    'E': 'Echo', 'F': 'Foxtrot', 'G': 'Golf', 'H': 'Hotel', 
    'I': 'India', 'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima', 
    'M': 'Mike', 'N': 'November', 'O': 'Oscar', 'P': 'Papa', 
    'Q': 'Quebec', 'R': 'Romeo', 'S': 'Sierra', 'T': 'Tango', 
    'U': 'Uniform', 'V': 'Victor', 'W': 'Whiskey', 'X': 'X-ray', 
    'Y': 'Yankee', 'Z': 'Zulu'
};

document.getElementById('word').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        document.getElementById('btn').click();
    }
});

function cheat(){
    const cheatSheetDiv = document.getElementById('cheatSheet');
    if (cheatSheetDiv.style.display === "none") {
        let list = '';
        for (const [letter, word] of Object.entries(aviationAlphabet)) {
            list += `<p>${letter} - ${word}</p>`; // Add each alphabet entry
        }
        cheatSheetDiv.innerHTML = list; // Set the inner HTML of the div
        cheatSheetDiv.style.display = "block"; // Show the div
        document.getElementById("cheatSheetBtn").innerHTML = "închide";
    } else {
        cheatSheetDiv.style.display = "none"; // Hide the div
        document.getElementById("cheatSheetBtn").innerHTML = "fițuică";
    }
}

let randomLetter = '';

window.onload = displayRandomLetter;

function displayRandomLetter() {
    const letters = Object.keys(aviationAlphabet);
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('letter').innerText = `${randomLetter}`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sub() {
    const userWord = document.getElementById('word').value.trim();
    document.getElementById('word').value = "";
    const resultElement = document.getElementById('result');
    console.log(userWord);
    if (aviationAlphabet[randomLetter].toUpperCase() === userWord.toUpperCase()) {
        resultElement.innerText = `${aviationAlphabet[randomLetter].toUpperCase()}` ;
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = `${aviationAlphabet[randomLetter].toUpperCase()}` ;
        resultElement.style.color = 'red';
    }

    await sleep(2000);
    resultElement.innerText = "";
    displayRandomLetter();
}






