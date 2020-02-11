const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if(params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "question3.html"
}



const gamesUrl = "https://api.rawg.io/api/games/4200";

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json)
    })
    .catch(function(error) {
        console.log(error);
    })



function createGameDetails() {
    console.dir(json);

    const image = document.querySelector(".image");
    image.src = json.background_image;
    image.alt = json.name;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}