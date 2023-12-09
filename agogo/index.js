const myTimer = document.querySelector(".timer")
const boutonUn = document.querySelector(".but1")
const boutDeux = document.querySelector(".but2")
const boutTroi = document.querySelector(".but3")
const bouQuatre =document.querySelector(".but4")
const boutCinq = document.querySelector(".but5")









let boutUn = 20;
boutonUn.addEventListener("click",()=>{
let interval = setInterval(()=>{
  timer(boutUn)
  boutUn--
  if(boutUn===0){
    clearInterval(interval)
  }
},1000)
});

let bouDeux = 300;
boutDeux.addEventListener("click",()=>{
  let inter = setInterval(()=>{
    timer(bouDeux)
    bouDeux--
    if(bouDeux===0){
      clearInterval(inter)
    }
  },1000)
});

let bouTrois = 900;
boutTroi.addEventListener("click",()=>{
  let inte = setInterval(()=>{
    timer(bouTrois)
    bouTrois--
    if(bouTrois===0){
      clearInterval(inte)
    }
  },1000)
});




let boutquatre = 1200;
bouQuatre.addEventListener("click",()=>{
  let int = setInterval(()=>{
    timer(boutquatre)
    boutquatre--
    if(boutquatre===0){
      clearInterval(int)
    }
  },1000)
})



 

let boutCin = 1800;
boutCinq.addEventListener("click",()=>{
  let int = setInterval(()=>{
    timer(boutCin)
    boutCin--
    if(boutCin===0){
      clearInterval(int)
    }
  },1000)
});


let input = document.getElementById("impTime");
input.addEventListener("change",(event) => {
  let input = event.target;
let value = parseInt(input.value);
  let ime = setInterval(() => {
    if (isNaN(value)) {
      return;
    }
    timer(value);
    value--;
    if (value===0) {
      clearInterval(ime);
    }
  }, 1000);
});






function timer(seconds) {
  let heur = Math.floor(seconds/3600)
  let minutes = Math.floor(seconds/60%60)
  let secondes = Math.floor(seconds%60)
  myTimer.innerHTML =`${heur}:${minutes}:${secondes}`

}
