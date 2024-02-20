const input = document.querySelector("#input");
const imgDigi = document.querySelector("#img-digi");
const digiTitle = document.querySelector(".card-title");
const digiText = document.querySelector('.card-text');

const fetchAPI = async() =>
 {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await response.json();

    return data;
 }

 function digiAPI()
 {
    input.addEventListener('change',async ({target}) => {
        const digiArr = await fetchAPI();

        const find = digiArr.find(({name})=> name.toLowerCase() ===
        target.value.toLowerCase());

        const {name , level,img} = find;

        digiText.innerText = `Nível: ${level} , Nome: ${name}`;
        digiTitle.innerHTML = name;
        imgDigi.src = img;

        return find;
    })
}
window.onload = () => digiAPI();