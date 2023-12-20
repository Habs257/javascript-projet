const display = document.querySelector(".display");
const all = document.querySelectorAll("button");
const specialChars = ["+", "-", "÷", "*", ".", "="];
let sortie = "";

const calculate = (btnvalue) => {
   if (btnvalue === "=" && sortie !== "") {
      // Utilisez parseFloat pour convertir la chaîne en nombre
      sortie = eval(sortie.replace("%", "/100"));
   } else if (btnvalue === "RESET") {
      sortie = "";
   } else if (btnvalue === "DEL") {
      sortie = sortie.toString().slice(0, -1);
   } else {
      if (sortie === "" && specialChars.includes(btnvalue)) return;
      sortie += btnvalue;
   }
   display.value = sortie;
};

all.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
