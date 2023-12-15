const display = document.querySelector(".display");
const all = document.querySelectorAll("button");
const calculate = (btnvalue) => {
    console.log(btnvalue);
};
all.forEach((button) => {
  button.addEventListner("click", (e) => calculate(e.target.dataset.value))
});