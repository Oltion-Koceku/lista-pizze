/* 
creiamo un array di 3 oggetti
ogni oggetto ha 3 preoprietà: nome ,prezzo e ingredienti
ciclo for of cicliamo le pizze
ad ogni ciclo stampiamo le proprità degli oggetti con un tamplate literal
*/
const output = document.querySelector(".output")
const output2 = document.querySelector(".output2")
const output3 = document.querySelector(".output3")
const output4 = document.querySelector(".output4")
const pizze = [
  {
    nome: "margherita",
    prezzo: 7,
    ingredienti:["pomodoro", "mozzarella", "basilico"],
    img: "assets/img/margherita.jpg"
  },
  {
    nome: "divola",
    prezzo: 9,
    ingredienti:["pomodoro", "mozzarella", "basilico", "salame"],
    img: "assets/img/diavola.jpg"
  },
  {
    nome: "marinara",
    prezzo: 6,
    ingredienti:["pomodoro", "aglio", "origano"],
    img: "assets/img/marinara.jpg"
  }
]

for(let pizza of pizze){
  console.log(pizza);
  output.innerHTML += `
  
  <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${pizza.nome}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">prezzo ${pizza.prezzo} &euro;</h6>
            <p class="card-text">${pizza.ingredienti.join(" - ")}</p>
          </div>
        </div>
  </div>
  `
}
for(let pizza of pizze){
  console.log(pizza);
  
  let listaIngredienti = '';
  for(let ingrediente of pizza.ingredienti){
    listaIngredienti += `<li>${ingrediente}</li>`
  }
  output2.innerHTML += `
  

  <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${pizza.img}" class="card-img-top" alt="${pizza.nome}">
          <div class="card-body">
            <h5 class="card-title">${pizza.nome}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">prezzo ${pizza.prezzo} &euro;</h6>
            <ul>
              ${listaIngredienti}
            </ul>
          </div>
        </div>
  </div>
  `
}

for(let i = 0; i < pizze.length; i++){
  const pizza = pizze[i];
  console.log(pizza);
  
  let listaIngredienti = '';
  for(let ingrediente of pizza.ingredienti){
    listaIngredienti += `<li>${ingrediente}</li>`
  }
  output3.innerHTML += `
  

  <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${pizza.img}" class="card-img-top" alt="${pizza.nome}">
          <div class="card-body">
            <h5 class="card-title">${pizza.nome}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">prezzo ${pizza.prezzo} &euro;</h6>
            <ul>
              ${listaIngredienti}
            </ul>
          </div>
        </div>
  </div>
  `
}

for(let i in pizze){
  const pizza = pizze[i];
  console.log(pizza);
  
  let listaIngredienti = '';
  for(let ingrediente of pizza.ingredienti){
    listaIngredienti += `<li>${ingrediente}</li>`
  }
  output3.innerHTML += `
  

  <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${pizza.img}" class="card-img-top" alt="${pizza.nome}">
          <div class="card-body">
            <h5 class="card-title">${pizza.nome}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">prezzo ${pizza.prezzo} &euro;</h6>
            <ul>
              ${listaIngredienti}
            </ul>
          </div>
        </div>
  </div>
  `
}