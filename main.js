function createGame(player1, hour, player2) {
  return `
   <li>
           <img src="./assets/logo-${player1}.svg" alt="${player1} Flag" />
              <strong>${hour}</strong>
              <img src="/assets/logo-${player2}.svg" alt="${player2} flag" />
        </li>
  
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("Switzerland", "16:00", "cameroon") +
      createGame("portugal", "13:00", "Ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("south-korea", "10:00", "Ghana") +
      createGame("brazil", "13:00", "Switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "Sexta", createGame("portugal", "16:00", "cameroon"))
