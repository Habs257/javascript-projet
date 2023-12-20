const display = document.querySelector(".display");
const all = document.querySelectorAll("button");
const specialChars = ["*","+","-", "÷", ".", "="];
let sortie = "";

const calculate = (btnvalue) => {
   if (btnvalue === "=" && sortie !== "") {
      // Utilisez parseFloat pour convertir la chaîne en nombre
      sortie = eval(sortie.replace("÷", "/"));
   } else if (btnvalue === "RESET") {
      sortie = "";
   } else if (btnvalue === "DEL") {
      sortie = sortie.slice(0, -1);
   } else {
      if (sortie === "" && specialChars.includes(btnvalue)) return;

      // Vérifier si le dernier caractère est un opérateur spécial
      const lastChar = sortie.slice(-1);
      if (specialChars.includes(lastChar)) {
         // Remplacer le dernier opérateur spécial s'il y en a déjà un
         sortie = sortie.slice(0, -1);
      }

      sortie += btnvalue;
   }
   display.value = sortie;
};

all.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
