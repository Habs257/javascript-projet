const mesBlagues = [
{
    blague:`"la France FR nous a souvent volé nos richesses 💎💎... Vous allez aussi nous voler nos footballeur ⚽️ ?"`,
    auteur : `"--Président BOBO"`,
},
{
    blague :`"le crocodile 🐊 n 'attent pas que le gorille 🦍 accouche ."`,
    auteur:`"--Présiden BOBO"`
},
{
    blague:`"il est tombé comme du n'importe quoi, on dirait la girafe 🦒 qui s'emmele les pattes."`,
    auteur:`"--Présiden BOBO"`
},
{
    blague:`"On as pas besoin d'eau 💧 potable pour eteindre un incendie "`,
    auteur:`"--Présiden BOBO"`
},
{
    blague:`"la chenille 🐛 ne porte pas des lunettes 👓 quand elle bois l'eau "`,
    auteur:`"--Présiden BOBO"`
},
{
    blague:`"c'est quoi méme ces maniéres ? tu m'(interomps avec ton education de phacochére  🐗 ."`,
    auteur:`"--Président BOBO"`
}
] ;
let btn =document.getElementsByClassName(".bouton");
let bla = document.getElementsByClassName(".blague");
let aute = document.getElementsByClassName(".auteur");


btn.addEventListener("click", function() {
    let rand = Math.floor(Math.random() * mesBlagues.length);
    bla.innerHTML = mesBlagues[rand].blague;
    aute.innerHTML = mesBlagues[rand].auteur;
})