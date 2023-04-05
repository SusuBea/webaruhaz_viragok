import { VIRAGLISTA, VIRAGKULCS, kepLinkek } from "./adat.js";
import  { osszeallit, osszeallit2 } from "./adatkezeles.js";
// import  { rendezesBarmiSzerint} from "./rendezesSzures.js";
window.addEventListener("load", init);

let ARTICLE;
let kartyak;
let tablazat;

function init() {
  // rendezesBarmiSzerint(VIRAGLISTA, "kor", -1)
  //   console.log()
  
  ARTICLE = document.querySelector("article");
  kartyak = document.querySelector("section.kartyak");
  tablazat = document.querySelector("section.tablazat");
  kartyak.innerHTML = osszeallit(VIRAGLISTA, kepLinkek)
  tablazat.innerHTML = osszeallit2(VIRAGLISTA)
  



  torlesGomb();
  const SUBMIT = document.querySelector("#rogzites");
  SUBMIT.addEventListener("click", ujVirag);
}



function torlesGomb() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < VIRAGLISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  VIRAGLISTA.splice(index, 1);
  kartyak.innerHTML = osszeallit(VIRAGLISTA, kepLinkek)
  tablazat.innerHTML = osszeallit2(VIRAGLISTA)

  torlesGomb();
}

function ujVirag() {
  //itt hozom létre  a listát amibe belepakolok majd mindent - NevInputElem...stb.
  const virag= {};


 
  /**szedjük össze az űrlap adatait,
   * és tegyük bele egy objektumba 
   * és fűzzük, hozzá a listánkhoz
    */

  //megfogom a beviteli mezőt
  const NevInputElem = document.querySelector("#vnev") 
  //beleteszem a már fentebb lértehozott listába a beírt adatokat
  virag.nev=NevInputElem.value;

  const FajtaInputElem = document.querySelector("#vfajta") 
  virag.fajta=FajtaInputElem.value;

  const MagassagInputElem = document.querySelector("#vmag") 
  virag.magassag=MagassagInputElem.value;

  const ArInputElem = document.querySelector("#var") 
  virag.ar=ArInputElem.value;

  const OrszagInputElem = document.querySelector("#vorszag") 
  virag.orszag=OrszagInputElem.value;

  console.log("ROGZITES")
  console.log(virag)

  VIRAGLISTA.push(virag)
  kartyak.innerHTML = osszeallit(VIRAGLISTA, kepLinkek);
  tablazat.innerHTML = osszeallit2(VIRAGLISTA);
  torlesGomb();
}
 
 


