let showHeroesBtn = document.getElementById("show-hero");
let heroesContainer = document.getElementById("heros");
let startFightBtn = document.getElementById("start-fight");
let showWinner = document.getElementById("show-winner");
showHeroesBtn.addEventListener("click", showHeroesFunc);
function showHeroesFunc() {
  heroesContainer.classList.add("d-flex");
  startFightBtn.classList.add("d-block");
  showHeroesBtn.classList.add("d-none");
  //elem.style.display="flex" <-- ASA NU!!!!!!!!!
}
startFightBtn.addEventListener("click", startFightFunc);
function startFightFunc() {
  heroesContainer.classList.remove("d-flex");
  startFightBtn.classList.remove("d-block");
  showWinner.classList.add("d-flex");
  showWinner.innerHTML += epicfight.findWinner();
}

let choseHeroDragon = document.getElementById("dragon");
choseHeroDragon.addEventListener("click", choseHerofunc);
function choseHerofunc() {
  heroDwarf.classList.add("d-none");
  heroFairy.classList.add("d-none");
}
let heroDwarf = document.getElementById("dwarf");
let heroFairy = document.getElementById("fairy");

heroDwarf.addEventListener("click", choseDwarf);

function choseDwarf() {
  heroFairy.classList.add("d-none");
  choseHeroDragon.classList.add("d-none");
}

heroFairy.addEventListener("click", choseFairy);
function choseFairy() {
  heroDwarf.classList.add("d-none");
  choseHeroDragon.classList.add("d-none");
}
