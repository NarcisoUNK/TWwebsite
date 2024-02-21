const input = document.querySelector("#input");
const imgDigi = document.querySelector("#img-digi");
const digiTitle = document.querySelector(".card-title");
const digiText = document.querySelector('.card-text');

const fetchAPI = async () => {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await response.json();
    return data;
}

function digiAPI() {
    input.addEventListener('change', async ({ target }) => {
        const digiArr = await fetchAPI();

        const find = digiArr.find(({ name }) => name.toLowerCase() === target.value.toLowerCase());

        if (find) {
            const { name, level, img } = find;
            digiText.innerText = `Nível: ${level}, Nome: ${name}`;  
            digiTitle.innerHTML = name;
            imgDigi.src = img;
        } else {
            // If no Digimon found, clear previous data
            digiText.innerText = "";
            digiTitle.innerHTML = "Digicard";
            imgDigi.src = ""; // or set a default image
            // Optionally, you can notify the user that no Digimon with that name was found
            console.log("No Digimon with that name found.");
        }
    });
}

digiAPI();
