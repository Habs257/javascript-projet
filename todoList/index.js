
let form = document.getElementById("form");
let msg = document.getElementById("msg");
let categorie = document.getElementById("categorie");
let titre = document.getElementById("titre");
let date = document.getElementById("date");
let textarea = document.getElementById("textarea");
let statut = document.getElementById("statut");

let tasks = document.getElementById("tasks");
let textDescription = document.getElementById("textDescription");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
})

let formValidation = () => {
    if (categorie.value === "" || titre.value === "" || date.value === "" || textarea.value === "" || statut.value === "") {
        msg.innerHTML = "Aucune tâche ne doit être vide!";
    } else {
        msg.innerHTML = "";

        acceptData();
    }
}
// local storage
let data = [];
let acceptData = () => {
    data.push({
        categorie: categorie.value,
        titre: titre.value,
        date: date.value,
        textarea: textarea.value,
        statut:statut.value,
    })

    localStorage.setItem("data", JSON.stringify(data));
    
    createTasks();
}

// Creation de nouvelles taches
let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
      return (tasks.innerHTML += `
      <tr class="les-tr" id=${y}>
            <td>1</td>
            <td>${x.date}</td>
            <td>${x.titre}</td>
            <td>${x.categorie}</td>
    
            <td class="options">
              <span class="span1"><i class="fa-regular fa-eye"></i></span>
              <span class="span2"><i onClick= "editTask(this)" class="fa-solid fa-pen"></i></span>
              <span class="span3"><i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i></span>
            </td>
          </tr>
      `),
      (textDescription.innerHTML = `
      <p id${y}>${x.textarea}
      `);
    });
  
    resetForm();
  };

  // Pour effacer les champs de saisie
  let resetForm = () => {
    categorie.value = "";
    titre.value = "";
    date.value = "";
    textarea.value = "";
    statut.value = "";
  }

  // Fonction pour supprimer une tâche
  let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
  
    data.splice(e.parentElement.parentElement.id, 1);
  
    localStorage.setItem("data", JSON.stringify(data));
  };

  // Fonction pour éditer les tâches
  let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
  
    categorie.value = selectedTask.children[0].innerHTML;
    titre.value = selectedTask.children[1].innerHTML;
    date.value = selectedTask.children[2].innerHTML;
    textarea.value = selectedTask.children[3].innerHTML;
    statut.value = selectedTask.children[4].innerHTML;
  
    deleteTask(e);
  };

    // Obtenir des données du stockage local
    (() => {
        data = JSON.parse(localStorage.getItem("data")) || [];
        console.log(data);
        createTasks();
      })();
