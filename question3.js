const gamesUrl = "https://api.rawg.io/api/games/4200";

fetch(gamesUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.dir(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function handleResponse(response) {
    return response.json();
}
function createGameDetails(json) {
    createGameDetails(json);
}
function handleError(error) {
    console.log(error);
}

fetch(gamesUrl)
    .then(handleResponse)
    .then(createGameDetails)
    .catch(handleError)


function createGameDetails(json) {
    console.dir(json);

    const image = document.querySelector(".image");
    const newBackgroundImage = json.background_image_additional;
    image.style = `background-image: url('${newBackgroundImage}')`;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}