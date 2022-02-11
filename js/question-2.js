//Question 2
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ee874b0a57a54459a8c6af251b15dd13";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;
const resultsContainer = document.querySelector(".results");

async function getGamesAPI() {
  try {
    const response = await fetch(corsFix);
    const all = await response.json();
    const games = all.results;

    resultsContainer.innerHTML = "";
    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }
      console.log(games[i]);
      resultsContainer.innerHTML += `<div class="result">${games[i].name}.
													Tag amount ${games[i].tags.length}.
													Rating ${games[i].rating}.
													
									</div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = alert("error", error);
  }
}

getGamesAPI();
